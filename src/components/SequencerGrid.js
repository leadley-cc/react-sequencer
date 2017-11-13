import React from 'react'
import './SequencerGrid.css'
import TrackDetails from './TrackDetails'
import Pad from './Pad'

const SequencerGrid = (props) => {
  console.log(props)

  const trackCount = 8

  const trackTitles = [
    'Kick', 'Snare', 'Closed Hat', 'Open Hat',
    'Clap', 'Rimshot', 'Tom', 'Cowbell'
  ]

  const trackDetailsColumn = trackTitles.map(
    (title, index) => (
      <TrackDetails key={index} trackIndex={index + 1} trackTitle={title} />
    )
  )

  const padColumns = props.pads.map((colValues, colIndex) => (
    colValues.map((padValue, trackIndex) => (
      <Pad
        trackIndex={trackIndex}
        padIndex={colIndex}
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
