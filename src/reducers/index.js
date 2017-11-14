import {combineReducers} from 'redux'
import pads from './pads'
import playing from './playing'

export default combineReducers({
  pads,
  playing
})

export const getPadState = (state, padIndex, trackIndex) => (
  state.pads[padIndex][trackIndex]
)
