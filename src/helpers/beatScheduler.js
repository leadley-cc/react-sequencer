import { audioCtx, playAudioBuffer } from '../helpers/webAudio'

export let nextBeatTime = 0

export const start = () => {
  nextBeatTime = audioCtx.currentTime
}

export const nextBeat = (bpm) => {
  nextBeatTime += 60 / bpm / 2
}

export const check = () => {
  return nextBeatTime < audioCtx.currentTime + 0.1
}

export const schedule = (samples, activeTracks, time = 0) => {
  activeTracks.forEach((state, index) => {
    if (state > 0) playAudioBuffer(samples[index], time)
  })
}
