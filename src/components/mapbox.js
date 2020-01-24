import React from 'react'
import mapboxgl from "mapbox-gl"
import art from "../../content/art.json"
import { Link } from "gatsby"

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
          }
          // let props = feature.properties;
        }
      } else {
        console.log("error");
        // const notice = document.createElement("div");
        // notice.innerText = "No artworks found.";
        // document.getElementById("listings").appendChild(notice);
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
