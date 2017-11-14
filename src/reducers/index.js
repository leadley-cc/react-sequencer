import {combineReducers} from 'redux'
import pads from './pads'
import playing from './playing'

export default combineReducers({
  pads,
  playing
})

export const getColumnState = (state, padIndex) => (
  state.pads[padIndex]
)

export const getPadState = (state, padIndex, trackIndex) => (
  state.pads[padIndex][trackIndex]
)
