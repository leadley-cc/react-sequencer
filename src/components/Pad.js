import React from 'react'
import './Pad.css'

const Pad = (props) => {
  const onClick = () => {
    props.togglePad(props.trackIndex, props.padIndex)
  }

  return (
    <div
      className={'PadContainer Track' + (props.trackIndex)}
      onClick={onClick} >
      <div className='Pad' />
    </div>
  )
}

export default Pad
