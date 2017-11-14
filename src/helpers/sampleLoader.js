import { loadSample } from '../actions'
import { fetchSample } from './webAudio'

import kickSample from '../samples/808Kick.wav'
import snareSample from '../samples/808Snare.wav'
import CHHSample from '../samples/808CHH.wav'
import OHHSample from '../samples/808OHH.wav'
import clapSample from '../samples/808Clap.wav'
import rimSample from '../samples/808Rim.wav'
import tomSample from '../samples/808Tom.wav'
import cowbellSample from '../samples/808Cowbell.wav'

const samples = [
  kickSample, snareSample, CHHSample, OHHSample,
  clapSample, rimSample, tomSample, cowbellSample
]

const loadSamples = (store) => {
  samples.forEach((sample, index) => {
    fetchSample(sample, (audioBuffer) => {
      store.dispatch(loadSample(index, audioBuffer))
    })
  })
}

export default loadSamples
