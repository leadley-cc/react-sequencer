import React, { Component } from 'react'
import { connect } from 'react-redux'
import { togglePad, togglePlaying } from '../actions'
import './App.css'
import Header from '../components/Header'
import SequencerGrid from '../components/SequencerGrid'

class App extends Component {
  render () {
    return (
      <div className='App'>
        <Header
          togglePlaying={this.props.togglePlaying} />
        <SequencerGrid
          pads={this.props.pads}
          togglePad={this.props.togglePad} />
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    pads: state.pads,
    playing: state.playing
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    togglePad: (track, pad) => {
      dispatch(togglePad(track, pad))
    },
    togglePlaying: () => {
      dispatch(togglePlaying())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
