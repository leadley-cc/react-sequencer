import React, { Component } from 'react'
import { connect } from 'react-redux'
import { togglePad, togglePlaying } from '../actions'
import { playAudioBuffer } from '../helpers/webAudio'
import './App.css'
import Header from '../components/Header'
import PlayButton from '../components/PlayButton'
import SequencerGrid from '../components/SequencerGrid'

class App extends Component {
  constructor (props) {
    super(props)
    this.tick = this.tick.bind(this)
    this.startPlaying = this.startPlaying.bind(this)
    this.stopPlaying = this.stopPlaying.bind(this)
  }

  tick () {
    playAudioBuffer(this.props.samples.kick)
  }

  startPlaying () {
    this.interval = setInterval(
      () => this.tick(),
      60000 / 100
    )
  }

  stopPlaying () {
    clearInterval(this.interval)
  }

  componentWillReceiveProps (nextProps) {
    if (nextProps.playing === this.props.playing) return
    nextProps.playing ? this.startPlaying() : this.stopPlaying()
  }

  render () {
    return (
      <div className='App'>
        <Header>
          <PlayButton
            playing={this.props.playing}
            togglePlaying={this.props.togglePlaying} />
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
  samples: state.samples,
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
