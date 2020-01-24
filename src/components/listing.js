import React from 'react'

const Listing = (props) => (
  <>
  <div style={{overflow: `auto`, paddingTop: `8px`, paddingLeft: `8px`, paddingBottom: `13px`, borderBottom: `1px solid rgba(0, 0, 0, 0.25)`}}>
    <div style={{float: `left`, width: `80%`, lineHeight: `100%`}}>
      <div style={{fontSize: `1rem`, fontWeight: `bold`}}>{props.title}</div>
      <div style={{fontSize: `0.9rem`}}>by {props.author}</div>
      <div style={{fontSize: `0.9rem`}}>{props.address}</div>

    </div>
    <div style={{float: `right`, width: `20%`, top: `50%`, mstransform: `translateY(50%)`, transform: `translateY(50%)`}}>
      {props.thumbnail}
    </div>
  </div>
  </>
)

export default Listing