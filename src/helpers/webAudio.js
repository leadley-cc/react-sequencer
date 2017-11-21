export const audioCtx = new (window.AudioContext || window.webkitAudioContext)()

export const playAudioBuffer = (audioBuffer, time = 0) => {
  const audioBufferSource = audioCtx.createBufferSource()
  audioBufferSource.buffer = audioBuffer
  audioBufferSource.connect(audioCtx.destination)
  audioBufferSource.start(time)
}
