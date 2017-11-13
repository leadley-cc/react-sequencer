export function togglePad (track, pad) {
  return {
    type: 'TOGGLE_PAD',
    track,
    pad
  }
}
