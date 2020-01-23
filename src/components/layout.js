/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import Mapbox from "./mapbox"
import Sidebar from "./sidebar"
import Search from "./search"
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <div
        style={{
          margin: `0 auto`,
          height: `100%`
        }}
      >

        <div style={{height: '100%', width: `100%`, overflow: `hidden`, paddingTop: `50px`}}>
          <div style={{height: `100%`, width: `30%`, float: `left`, borderRight: `1px solid rgba(0, 0, 0, 0.25)`}}>
            <Search />
            <Sidebar />
          </div>
          <div style={{height: `100%`, width: `70%`, float: `right`}}>
            <Mapbox />
          </div>
        </div>


        <main>{children}</main>
        
        {/* <footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer> */}
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
