import React, { Component } from 'react'
import { connect } from 'react-redux'
import { togglePad } from '../actions'
import './App.css'
import Header from '../components/Header'
import SequencerGrid from '../components/SequencerGrid'

class App extends Component {
  render () {
    return (
      <div className='App'>
        <Header />
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
