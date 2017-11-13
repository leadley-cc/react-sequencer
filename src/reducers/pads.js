import {PADS_INITIAL_STATE} from '../constants'

const togglePad = padState => (
  (padState === 2) ? 0 : padState + 1
)

const pads = (state = PADS_INITIAL_STATE, action) => {
  switch (action.type) {
    case 'TOGGLE_PAD':
      return [
        ...state.slice(0, action.pad),
        [
          ...state[action.pad].slice(0, action.track),
          togglePad(state[action.pad][action.track]),
          ...state[action.pad].slice(action.track + 1)
        ],
        ...state.slice(action.pad + 1)
      ]
    default:
      return state
  }
}

export default pads
