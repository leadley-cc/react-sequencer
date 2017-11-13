import React from 'react'
import './SequencerGrid.css'
import TrackDetails from './TrackDetails'
import Pad from './Pad'

const SequencerGrid = (props) => {
  const trackCount = 8
  const padCount = 16

  const trackTitles = [
    'Kick', 'Snare', 'Closed Hat', 'Open Hat',
    'Clap', 'Rimshot', 'Tom', 'Cowbell'
  ]

  const padValues = []
  for (let i = 0; i < padCount; i++) {
    padValues.push([])
    for (let j = 0; j < trackCount; j++) {
      padValues[i].push(0)
    }
  }

  const trackDetailsColumn = trackTitles.map(
    (title, index) => (
      <TrackDetails key={index} trackIndex={index + 1} trackTitle={title} />
    )
  )

  const padColumns = padValues.map((colValues, colIndex) => (
    colValues.map((padValue, trackIndex) => (
      <Pad
        trackIndex={trackIndex}
        padIndex={colIndex}
        key={trackTitles.length * (colIndex + 1) + trackIndex} />
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
