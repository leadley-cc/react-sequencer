import React from 'react'
import './PlayButton.css'

const PlayButton = (props) => (
  <button
    id='PlayButton'
    onClick={props.togglePlaying} >
    {props.playing ? 'Pause' : 'Play'}
  </button>
)

export default PlayButton
