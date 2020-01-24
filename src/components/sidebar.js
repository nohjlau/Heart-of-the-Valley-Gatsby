import { Link } from "gatsby"
import React from "react"
import Listing from "./listing"

const Sidebar = () => (
    <div id={'sidebar'} style={{height: `100%`}}>
        <Listing title="Alviso & Alviso Mandalas"
                 author="Donna Billick"
                 address="5050 North First Street, San Jose, CA 95002"
                 thumbnail="img" />
        <Listing title="title"
                 author="author"
                 address="address"
                 thumbnail="img" />
        <Listing title="title"
                 author="author"
                 address="address"
                 thumbnail="img" />
    </div>
)


export default Sidebar