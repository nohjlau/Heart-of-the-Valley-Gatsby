import React from 'react'

const Listing = (props) => (
  <>
  <div id={props.id} className='listing' style={{overflow: `auto`, paddingTop: `8px`, paddingBottom: `8px`, borderBottom: `1px solid rgba(0, 0, 0, 0.25)`}}>
    <div style={{ paddingLeft: `13px`, float: `left`, width: `70%`, lineHeight: `125%`}}>
      <div style={{fontSize: `1rem`, fontWeight: `bold`, overflow: `hidden`}}><a href="#" className="listingUrl" id={"listing-" + props.id}>{props.title}</a></div>
      <div style={{fontSize: `0.9rem`}}>by {props.author}</div>
      <div style={{fontSize: `0.9rem`}}>{props.address}</div>

    </div>

    <div style={{float: `right`, paddingRight: `5%`, display: `inline`}}>
      <img style={{objectFit: `cover`, minWidth: `75px`, maxWidth: `75px`, height: `75px`, margin: `0`, overflow: `hidden`, border: `1px solid rgba(0, 0, 0, 0.25)`, borderRadius: `50%`}} alt="icon" src={props.image}/>
    </div>

    <div className="description" style={{backgroundColor: `lightgray`, clear: `both`, textAlign: `justify`, display: `none`, padding: `1rem 1rem 1rem 1rem`}}>
      {/* <img style={{width: `100%`, border: `1px solid rgba(0, 0, 0, 0.25)`}} alt="full image" src={props.image} /> */}
      <img style={{objectFit: `cover`, minWidth: `50%`, maxWidth: `50%`, overflow: `hidden`, float: `left`, padding: `0rem 1rem 0rem 0rem`, marginBottom: `0.33rem`}} src={props.image}/>
      <div>{props.description}</div>
    </div>
  </div>
  </>
)

export default Listing
