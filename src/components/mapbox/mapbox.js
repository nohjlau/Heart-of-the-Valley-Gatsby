import React from "react"
import mapboxgl from "mapbox-gl"
import art from "../../data/art.json"
import { Link, StaticQuery } from "gatsby"
import "./mapbox.css"

const DEBUG = true;

class Mapbox extends React.Component {

  mapboxMapArtwork() {
    const map = new mapboxgl.Map({
      container: "map",
      style: "mapbox://styles/mapbox/light-v9",
      center: [-121.893028, 37.33548], // position in long, lat format
      zoom: 10,
      dragPan: true,
      trackResize: true,
      doubleClickZoom: true,
      keyboard: true,
    })

    // Add data to map
    // This will let you use the .remove() function later on
    if (!("remove" in Element.prototype)) {
      Element.prototype.remove = function() {
        if (this.parentNode) {
          this.parentNode.removeChild(this);
        }
      };
    }

    map.on("load", function(e) {
      map.addSource("places", {
        type: "geojson",
        data: art,
      })
      if (art && art.features && art.features.length > 0) {
        for (let i = 0; i < art.features.length; i++) {
          let feature = art.features[i]
          if (!feature.geometry || !feature.geometry.coordinates) {
            console.warn(
              `Missing coordinates for: "${feature.properties.title}"`
            )
          } else {
            // Add markers
            let el = document.createElement("div")
            el.id = "marker-" + feature.id
            el.className = "marker"

            try {
              new mapboxgl.Marker(el)
                .setLngLat(feature.geometry.coordinates)
                .addTo(map)

              // Add eventlistener
              el.addEventListener("click", e => {
                map.flyTo({
                  center: feature.geometry.coordinates,
                  zoom: 15,
                })
              var popUps = document.getElementsByClassName("mapboxgl-popup")
              if (popUps[0]) 
                popUps[0].remove()

              // if (typeof linkId !== "undefined") {
              //   setTimeout(() => {
              //     window.location.hash = "#" + linkId
              //   }, 250)
              // }
              if(DEBUG)
                console.log("showing popup for ", feature.properties.title)


              var up = new mapboxgl.Popup({ closeOnClick: false })
                .setLngLat(feature.geometry.coordinates)
                .setHTML(
                  "<h3>" +
                    feature.properties.title +
                  "</h3>"
                )
                .addTo(map)
              })
            } catch (exception) {
              console.error(exception)
            }
          }
        }
      } else {
        console.log("No artworks found!")
      }
    })
  }

  componentDidMount() {
    const MAPBOX_API_TOKEN =
      "pk.eyJ1IjoieWNob3kiLCJhIjoiY2pmOTYwdzZ5MG52dDJ3b2JycXY4ZDU5ciJ9.m9H_Mqu1b42AObg_u_tjpA"
    mapboxgl.accessToken = MAPBOX_API_TOKEN
    this.mapboxMapArtwork()
  }

  render() {
    return (
      <div id={"map"} style={{ height: `100%`, width: `100%`, margin: `0px` }} />
    )
  }
}

export default Mapbox
