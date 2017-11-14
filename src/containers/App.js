import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../actions'
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
    this.props.nextActiveColumn()
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
          activeColumn={this.props.activeColumn}
          togglePad={this.props.togglePad} />
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => ({
  samples: state.samples,
  pads: state.pads,
  playing: state.playing,
  activeColumn: state.activeColumn
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  togglePad: (track, pad) => {
    dispatch(actions.togglePad(track, pad))
  },
  togglePlaying: () => {
    dispatch(actions.togglePlaying())
  },
  nextActiveColumn: () => {
    dispatch(actions.nextActiveColumn())
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
