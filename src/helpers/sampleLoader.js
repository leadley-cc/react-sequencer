import { loadSample } from '../actions'
import { fetchSample } from './webAudio'
import kickSample from '../samples/808Kick.wav'

const loadSamples = (store) => {
  fetchSample(kickSample, (audioBuffer) => {
    store.dispatch(loadSample('kick', audioBuffer))
  })
}

export default loadSamples
