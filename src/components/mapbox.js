import React from 'react'
import mapboxgl from "mapbox-gl"

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
