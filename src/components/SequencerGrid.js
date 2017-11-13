import React from 'react'
import './SequencerGrid.css'
import TrackDetails from './TrackDetails'

const SequencerGrid = (props) => {
  const trackCount = 8
  const padCount = 16

  const trackTitles = [
    'Kick', 'Snare', 'Closed Hat', 'Open Hat',
    'Clap', 'Rimshot', 'Cowbell', 'Blank'
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
    colValues.map((padValue, rowIndex) => (
      <div
        key={padValues.length * (colIndex + 1) + rowIndex}
        className={'Pad Pad' + (colIndex + 1) + ' Track' + (rowIndex + 1)} />
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
