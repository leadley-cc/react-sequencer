import React from 'react'
import './PlayButton.css'

const PlayButton = (props) => (
  <button onClick={props.togglePlaying}>
    {props.playing ? 'Pause' : 'Play'}
  </button>
)

export default PlayButton
