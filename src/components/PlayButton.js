import React from 'react'
import { connect } from 'react-redux'
import { togglePlaying } from '../actions'
import './PlayButton.css'

const PlayButton = (props) => (
  <button id='PlayButton' onClick={props.togglePlaying} >
    {props.playing ? 'Pause' : 'Play'}
  </button>
)

const mapStateToProps = (state, ownProps) => ({
  playing: state.playing
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  togglePlaying: () => {
    dispatch(togglePlaying())
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(PlayButton)
