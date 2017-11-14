import {loadSample} from '../actions'
import {fetchSample, playAudioBuffer} from './webAudio'
import kickSample from '../samples/808Kick.wav'

const loadSamples = (store) => {
  fetchSample(kickSample, (audioBuffer) => {
    store.dispatch(loadSample('kick', audioBuffer))
  })
}

export default loadSamples
