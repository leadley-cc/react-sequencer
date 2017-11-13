import React from 'react'
import './SequencerGrid.css'
import TrackDetails from './TrackDetails'

const SequencerGrid = (props) => {
  const trackTitles = [
    'Kick', 'Snare', 'Closed Hat', 'Open Hat',
    'Clap', 'Rimshot', 'Cowbell', 'Blank'
  ]

  const padValues = [
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0]
  ]

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
