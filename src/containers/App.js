import React, { Component } from 'react'
import { connect } from 'react-redux'
import { togglePad, togglePlaying } from '../actions'
import './App.css'
import Header from '../components/Header'
import PlayButton from '../components/PlayButton'
import SequencerGrid from '../components/SequencerGrid'

class App extends Component {
  render () {
    return (
      <div className='App'>
        <Header>
          <PlayButton togglePlaying={this.props.togglePlaying} />
        </Header>
        <SequencerGrid
          playing={this.props.playing}
          pads={this.props.pads}
          togglePad={this.props.togglePad} />
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => ({
  pads: state.pads,
  playing: state.playing
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  togglePad: (track, pad) => {
    dispatch(togglePad(track, pad))
  },
  togglePlaying: () => {
    dispatch(togglePlaying())
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
