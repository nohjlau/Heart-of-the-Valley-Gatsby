import { Link, StaticQuery, graphql } from "gatsby"
import React from "react"
import Listing from "./listing"

const Sidebar = () => (
  <div id={"sidebar"} style={{ height: `100%`, overflowY: `scroll` }}>
    <StaticQuery
      query={graphql`
        query ArtQuery {
          allDataJson {
            edges {
              node {
                features {
                  properties {
                    title
                    image
                    address
                    artist
                  }
                }
              }
            }
          }
        }
      `}
      render={data => (
        <>
          {getArtData(data)}
        </>
      )}
    />
  </div>
)

function getArtData(data) {
    const artDataArray = [];
    if(process.env.NODE_ENV) {
      console.log("Checking first art entry: " + data.allDataJson.edges[0].node.features[0].properties.title);
    }
      data.allDataJson.edges[0].node.features.forEach(d => (
        artDataArray.push(<Listing key={d.properties.title + Math.random()*100} title={d.properties.title} author={d.properties.artist} address={d.properties.address} image={d.properties.image}/>)
    ))
    return artDataArray;
}

export default Sidebar
