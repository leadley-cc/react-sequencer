import { playAudioBuffer } from '../helpers/webAudio'

const playActiveSamples = (samples, columnState) => {
  columnState.forEach((state, index) => {
    if (state > 0) playAudioBuffer(samples[index])
  })
}

export default playActiveSamples
