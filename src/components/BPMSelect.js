import React from 'react'
import './BPMSelect.css'

const BPMSelect = (props) => {
  const oninput = (event) => {
    props.setBpm(event.target.value)
  }

  return (
    <span id='BPMSelectSpan'>
      <label
        id='BPMSelectLabel'
        htmlFor='BPMSelect'>
        BPM:
      </label>
      <input
        id='BPMSelect'
        type='number'
        min='50'
        max='200'
        list='defaults'
        value={props.bpm}
        onInput={oninput} />
      {/* <datalist id='defaults'>
        <option value='90' />
        <option value='120' />
        <option value='140' />
        <option value='170' />
      </datalist> */}
    </span>
  )
}

export default BPMSelect
