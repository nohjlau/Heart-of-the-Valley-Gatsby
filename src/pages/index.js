import Layout from "../components/layout"
import Search from "../components/search"
import Sidebar from "../components/sidebar"
import Mapbox from "../components/mapbox"
import React from "react"

const IndexPage = () => (
  <Layout>
    <div
      style={{
        height: "100%",
        width: `100%`,
        overflow: `hidden`,
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
        <Search />
        <Sidebar />
      </div>
      <div style={{ height: `100%`, width: `70%`, float: `right` }}>
        <Mapbox />
      </div>
    </div>
  </Layout>
)

export default IndexPage
