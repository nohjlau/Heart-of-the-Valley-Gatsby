import React from 'react'
import { Link } from 'gatsby'

const Menu = () => (
    <div>
        <ul style={{ listStyle: `none`, float: `right`, margin: `0px`}}>
          <ListLink to="/about/">About</ListLink>
          <ListLink to="/contact/">Contact</ListLink>
        </ul>
    </div>
)


const ListLink = props => (
  <li style={{ display: `inline-block`, marginRight: `1rem`}}>
    <Link className={`nav`} style={{ textDecoration: `none` }} to={props.to}>{props.children}</Link>
  </li>
)

export default Menu
