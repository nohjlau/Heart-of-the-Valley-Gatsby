import Layout from "../components/layout"
import Sidebar from "../components/sidebar/sidebar"
import Mapbox from "../components/mapbox/mapbox"
import React from "react"

const IndexPage = () => (
  <Layout>
    <div
      style={{
        height: "100%",
        width: `100%`,
        paddingTop: `50px`,
      }}
    >
      <div
        style={{
          height: `100%`,
          width: `30%`,
          float: `left`,
          borderRight: `1px solid rgba(0, 0, 0, 0.25)`,
        }}
      >
        <Sidebar />
      </div>
      <div style={{ height: `100%`, width: `70%`, float: `right` }}>
        <Mapbox />
      </div>
    </div>
  </Layout>
)

export default IndexPage
