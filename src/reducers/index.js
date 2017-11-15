import { combineReducers } from 'redux'
import samples from './samples'
import pads from './pads'
import playing from './playing'
import activeColumn from './activeColumn'
import bpm from './bpm'

export default combineReducers({
  samples,
  pads,
  playing,
  activeColumn,
  bpm
})
