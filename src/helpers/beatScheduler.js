import { audioCtx, playAudioBuffer } from '../helpers/webAudio'

let nextBeatTime = 0

export const start = () => {
  nextBeatTime = audioCtx.currentTime
}

export const nextBeat = (bpm) => {
  const secondsToAdd = 60 / bpm / 2
  nextBeatTime += secondsToAdd
}

export const check = (callback) => {
  // console.log('nextBeatTime: ', nextBeatTime)
  // console.log('currentTime: ', audioCtx.currentTime)
  // console.log('endOfWindow: ', audioCtx.currentTime + 0.1)
  while (nextBeatTime < audioCtx.currentTime + 0.1) {
    callback(nextBeatTime)
  }
}

export const schedule = (samples, activeTracks, time = 0) => {
  activeTracks.forEach((state, index) => {
    if (state > 0) playAudioBuffer(samples[index], time)
  })
}
