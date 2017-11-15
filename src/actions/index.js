export const togglePad = (track, pad) => ({
  type: 'TOGGLE_PAD',
  track,
  pad
})

export const togglePlaying = () => ({
  type: 'TOGGLE_PLAYING'
})

export const loadSample = (track, buffer) => ({
  type: 'LOAD_SAMPLE',
  track,
  buffer
})

export const nextActiveColumn = () => ({
  type: 'NEXT_ACTIVE_COLUMN'
})

export const setBpm = (bpm) => ({
  type: 'SET_BPM',
  bpm
})
