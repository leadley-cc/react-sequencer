import React from 'react'
import './PlayButton.css'

const PlayButton = (props) => (
  <button onClick={props.togglePlaying}>
    Play
  </button>
)

export default PlayButton
