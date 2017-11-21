import { loadSample } from '../actions'
import { audioCtx } from './webAudio'

import kick from '../samples/808Kick.wav'
import snare from '../samples/808Snare.wav'
import chh from '../samples/808CHH.wav'
import ohh from '../samples/808OHH.wav'
import clap from '../samples/808Clap.wav'
import rim from '../samples/808Rim.wav'
import tom from '../samples/808Tom.wav'
import cowbell from '../samples/808Cowbell.wav'

const loadSamples = (store) => {
  const samples = [kick, snare, chh, ohh, clap, rim, tom, cowbell]
  samples.forEach(
    async (sample, index) => {
      const response = await fetch(sample)
      const buffer = await response.arrayBuffer()
      const audioBuffer = await audioCtx.decodeAudioData(buffer)
      store.dispatch(loadSample(index, audioBuffer))
    }
  )
}

export default loadSamples
