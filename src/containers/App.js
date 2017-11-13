import React, { Component } from 'react'
import { connect } from 'react-redux'
import { togglePad } from '../actions'
import logo from '../logo.svg'
import './App.css'
import SequencerGrid from '../components/SequencerGrid'

class App extends Component {
  render () {
    return (
      <div className='App'>
        <header className='App-header'>
          <div className='App-title-div'>
            <img src={logo} className='App-logo' alt='logo' />
            <h1 className='App-title'>React Sequencer</h1>
          </div>
        </header>
        <SequencerGrid
          pads={this.props.pads}
          togglePad={this.props.togglePad} />
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    pads: state.pads
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    togglePad: (track, pad) => {
      dispatch(togglePad(track, pad))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
