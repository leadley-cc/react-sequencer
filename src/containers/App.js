import React, { Component } from 'react'
import { connect } from 'react-redux'
import { nextActiveColumn } from '../actions'
import * as beatScheduler from '../helpers/beatScheduler'
import './App.css'
import Header from '../components/Header'
import PlayButton from '../components/PlayButton'
import BPMSelect from '../components/BPMSelect'
import SequencerGrid from '../components/SequencerGrid'

class App extends Component {
  constructor (props) {
    super(props)
    this.beatScheduleTick = this.beatScheduleTick.bind(this)
  }

  beatScheduleTick () {
    beatScheduler.check((time) => {
      const nextActiveColumn = (this.props.activeColumn + 1) % 16
      const activeTracks = this.props.pads[nextActiveColumn]
      beatScheduler.schedule(this.props.samples, activeTracks, time)
      beatScheduler.nextBeat(this.props.bpm)
      this.props.nextActiveColumn()
    })
  }

  startPlaying () {
    setTimeout(() => beatScheduler.start(this.props.bpm), 25)
    this.beatScheduleInterval = setInterval(
      this.beatScheduleTick,
      25
    )
  }

  stopPlaying () {
    clearInterval(this.beatScheduleInterval)
  }

  componentWillReceiveProps (nextProps) {
    if (nextProps.playing !== this.props.playing) {
      nextProps.playing ? this.startPlaying() : this.stopPlaying()
    }
  }

  render () {
    return (
      <div className='App'>
        <Header>
          <PlayButton />
          <BPMSelect />
        </Header>
        <SequencerGrid />
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => ({
  samples: state.samples,
  pads: state.pads,
  playing: state.playing,
  activeColumn: state.activeColumn,
  bpm: state.bpm
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  nextActiveColumn: () => {
    dispatch(nextActiveColumn())
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
