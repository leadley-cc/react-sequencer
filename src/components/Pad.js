import React from 'react'
import './Pad.css'

const Pad = (props) => {
  return (
    <div className={'PadContainer Track' + (props.trackIndex)}>
      <div className='Pad' />
    </div>
  )
}

export default Pad
