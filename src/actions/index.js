export const togglePad = (track, pad) => {
  return {
    type: 'TOGGLE_PAD',
    track,
    pad
  }
}

export const togglePlaying = () => ({
  type: 'TOGGLE_PLAYING'
})
