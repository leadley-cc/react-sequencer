import { PADS_INITIAL_STATE } from '../constants'

const togglePad = (state, track, pad) => {
  const padState = state[pad][track]
  return [
    ...state.slice(0, pad),
    [
      ...state[pad].slice(0, track),
      ((padState === 2) ? 0 : padState + 1),
      ...state[pad].slice(track + 1)
    ],
    ...state.slice(pad + 1)
  ]
}

const pads = (state = PADS_INITIAL_STATE, action) => {
  switch (action.type) {
    case 'TOGGLE_PAD':
      return togglePad(state, action.track, action.pad)
    default:
      return state
  }
}

export default pads
