import React from 'react'
import { connect } from 'react-redux'
import { setBpm } from '../actions'
import './BPMSelect.css'

const BPMSelect = (props) => {
  const onChange = (event) => {
    props.setBpm(event.target.value)
  }

  return (
    <span id='BPMSelectSpan'>
      <label id='BPMSelectLabel' htmlFor='BPMSelect'>
        BPM:
      </label>
      <input
        id='BPMSelect'
        type='number'
        min='50'
        max='200'
        value={props.bpm}
        onChange={onChange} />
    </span>
  )
}

const mapStateToProps = (state, ownProps) => ({
  bpm: state.bpm
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  setBpm: (bpm) => {
    dispatch(setBpm(bpm))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(BPMSelect)
