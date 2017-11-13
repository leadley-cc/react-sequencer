import React, { Component } from 'react'
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
        <SequencerGrid />
      </div>
    )
  }
}

export default App
