import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Menu from "./menu"
const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `rebeccapurple`,
      position: `fixed`,
      width: `100%`
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        padding: `0.5rem 1.00rem`
      }}
    >
      
      <Menu />
      <span style={{ margin: 0, fontSize: `1.0rem`, textTransform: `uppercase`, fontFamily: `Raleway, sans-serif` }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </span>
      
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
