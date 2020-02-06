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
                    description
                  }
                  id
                  geometry {
                    coordinates
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
      console.log("TEST: Get first listing: " + data.allDataJson.edges[0].node.features[0].properties.title);
      console.log("TEST Get first ID: " + data.allDataJson.edges[0].node.features[0].id);
    }
      data.allDataJson.edges[0].node.features.forEach(d => (
        artDataArray.push(<Listing 
          key={d.properties.title + Math.random()*100}
          title={d.properties.title}
          author={d.properties.artist}
          address={d.properties.address}
          description={d.properties.description}
          image={d.properties.image} id={d.id}
          coordinates={d.geometry.coordinates}/>
        )
    ))
    return artDataArray;
}

export default Sidebar
