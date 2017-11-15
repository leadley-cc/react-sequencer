import playActiveSamples from '../helpers/playActiveSamples'
import { audioCtx } from '../helpers/webAudio'

let nextBeatTime = 0

const nextBeat = (bpm) => {
  const secondsToAdd = 60 / bpm / 2
  nextBeatTime += secondsToAdd
}

export const scheduleBeats = (samples, columnState, bpm) => {
  console.log('nextBeatTime: ', nextBeatTime)
  console.log('currentTime: ', audioCtx.currentTime)
  console.log('endOfWindow: ', audioCtx.currentTime + 0.1)
  while (nextBeatTime < audioCtx.currentTime + 0.1) {
    playActiveSamples(samples, columnState, nextBeatTime)
    nextBeat(bpm)
  }
}

export const startSchedule = () => {
  nextBeatTime = audioCtx.currentTime
}
