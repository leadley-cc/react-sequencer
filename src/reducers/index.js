import { combineReducers } from 'redux'
import samples from './samples'
import pads from './pads'
import playing from './playing'
import activeColumn from './activeColumn'

export default combineReducers({
  samples,
  pads,
  playing,
  activeColumn
})

export const getColumnState = (state, padIndex) => (
  state.pads[padIndex]
)

export const getPadState = (state, padIndex, trackIndex) => (
  state.pads[padIndex][trackIndex]
)
