import React from 'react'
import './TrackDetails.css'

const TrackDetails = (props) => {
  return (
    <div className={'TrackDetails Track' + (props.trackIndex)}>
      <span>{props.trackTitle}</span>
    </div>
  )
}

export default TrackDetails
