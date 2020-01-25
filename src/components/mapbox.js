import React from 'react'
import mapboxgl from "mapbox-gl"
import art from "../data/art.json"
import { Link, StaticQuery } from "gatsby"

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
      keyboard: true
    })

    // TODO: addFeaturesToMap();

    // Add data to map
    map.on("load", function(e) {
      map.addSource("places", {
        type: "geojson",
        data: art
      }); 
      if (art && art.features && art.features.length > 0) {
        for(let i = 0; i < art.features.length; i++) {
          let feature = art.features[i];
          if(!feature.geometry || !feature.geometry.coordinates) {
            console.warn(
              `Missing coordinates for listing: "${feature.properties.title}"`
            );
          } else { // Add markers
            let el = document.createElement("div");
            el.id = "marker-" + feature.title;
            el.className= "marker";
            // el.setAttribute("style","width: 1px;height: 1px;border-radius: 50%;border:1px solid gray;background-color:lightblue");
            console.log(el.id);
            try {
              new mapboxgl.Marker(el)
                .setLngLat(feature.geometry.coordinates)
                .addTo(map);
            } catch (exception) {
              console.error(exception);
            }
          }
        }
      } else {
        console.log("No artworks found!");
      }
    });

  }


  componentDidMount() {
    const MAPBOX_API_TOKEN = "pk.eyJ1IjoieWNob3kiLCJhIjoiY2pmOTYwdzZ5MG52dDJ3b2JycXY4ZDU5ciJ9.m9H_Mqu1b42AObg_u_tjpA"
    mapboxgl.accessToken = MAPBOX_API_TOKEN
    this.mapboxMapArtwork()
  }
  
  render() {
    return (
        <div id={'map'} style={{height: `100%`, width: `100%`, margin: `0px`}}/>
    )
  }

}

export default Mapbox
