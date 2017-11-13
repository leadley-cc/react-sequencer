import {PADS_INITIAL_STATE} from '../constants'

const pads = (state = PADS_INITIAL_STATE, action) => {
  switch (action.type) {
    case 'TOGGLE_PAD':
      return [
        ...state.slice(0, action.pad),
        [
          ...state[action.pad].slice(0, action.track),
          1,
          ...state[action.pad].slice(action.track + 1)
        ],
        ...state.slice(action.pad + 1)
      ]
    default:
      return state
  }
}

export default pads
