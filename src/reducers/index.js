import {combineReducers} from 'redux'
import pads from './pads'

export default combineReducers({
  pads
})

export const getPadState = (state, padIndex, trackIndex) => (
  state.pads[padIndex][trackIndex]
)
