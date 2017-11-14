import React from 'react'
import './SequencerGrid.css'
import { TRACK_TITLES } from '../constants'
import TrackDetails from './TrackDetails'
import Pad from './Pad'

const SequencerGrid = (props) => {
  const trackCount = 8

  const trackDetailsColumn = TRACK_TITLES.map(
    (title, index) => (
      <TrackDetails key={index} trackIndex={index + 1} trackTitle={title} />
    )
  )

  const padColumns = props.pads.map((column, colIndex) => (
    column.map((padState, trackIndex) => (
      <Pad
        playing={colIndex === props.activeColumn}
        trackIndex={trackIndex}
        padIndex={colIndex}
        state={padState}
        togglePad={props.togglePad}
        key={trackCount * (colIndex + 1) + trackIndex} />
    ))
  ))

  return (
    <div className='SequencerGridContainer'>
      <div className='SequencerGrid'>
        {trackDetailsColumn}
        {padColumns}
      </div>
    </div>
  )
}

export default SequencerGrid
