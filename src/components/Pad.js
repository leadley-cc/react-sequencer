import React from 'react'
import './Pad.css'

const Pad = (props) => {
  const onClick = () => {
    props.togglePad(props.trackIndex, props.padIndex)
  }

  return (
    <div
      className={
        'PadContainer' +
        (props.playing ? ' playing' : '')
      }
      onClick={onClick} >
      <div className={
        'Pad' +
        (props.state === 1 ? ' active' : '') +
        (props.state === 2 ? ' accent' : '')
      } />
    </div>
  )
}

export default Pad
