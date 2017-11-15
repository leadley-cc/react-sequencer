import { audioCtx, playAudioBuffer } from '../helpers/webAudio'

let nextBeatTime = 0
let secondsToAdd = 0

export const start = (bpm) => {
  secondsToAdd = 60 / bpm / 2
  nextBeatTime = audioCtx.currentTime
}

export const nextBeat = (bpm) => {
  secondsToAdd = 60 / bpm / 2
  nextBeatTime += secondsToAdd
}

export const check = (callback) => {
  while (nextBeatTime < audioCtx.currentTime + 0.1) {
    callback(nextBeatTime)
  }
}

export const schedule = (samples, activeTracks, time = 0) => {
  activeTracks.forEach((state, index) => {
    if (state > 0) playAudioBuffer(samples[index], time)
  })
}
