export const audioCtx = new (window.AudioContext || window.webkitAudioContext)()

export const playAudioBuffer = (audioBuffer, time = 0) => {
  const audioBufferSource = audioCtx.createBufferSource()
  audioBufferSource.buffer = audioBuffer
  const gainNode = audioCtx.createGain()
  gainNode.gain.value = 0.6

  audioBufferSource.connect(gainNode)
  gainNode.connect(audioCtx.destination)
  audioBufferSource.start(time)
}
