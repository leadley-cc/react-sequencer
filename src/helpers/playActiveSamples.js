import { playAudioBuffer } from '../helpers/webAudio'

const playActiveSamples = (samples, columnState, time = 0) => {
  columnState.forEach((state, index) => {
    if (state > 0) playAudioBuffer(samples[index], time)
  })
}

export default playActiveSamples
