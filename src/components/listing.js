import React from 'react'

const Listing = (props) => (
  <>
  <div style={{overflow: `auto`, paddingTop: `8px`, paddingLeft: `13px`, paddingBottom: `8px`, borderBottom: `1px solid rgba(0, 0, 0, 0.25)`}}>
    <div style={{float: `left`, width: `80%`, paddingRight: `20px`, lineHeight: `125%`}}>
      <div style={{fontSize: `1rem`, fontWeight: `bold`}}>{props.title}</div>
      <div style={{fontSize: `0.9rem`}}>by {props.author}</div>
      <div style={{fontSize: `0.9rem`}}>{props.address}</div>

    </div>
    <div style={{float: `right`, width: `20%`}}>
      <img style={{objectFit: `cover`, width: `75px`, height: `75px`, margin: `0`, overflow: `hidden`, border: `1px solid rgba(0, 0, 0, 0.25)`, borderRadius: `50%`}} src={props.image}/>
    </div>
  </div>
  </>
)

export default Listing
