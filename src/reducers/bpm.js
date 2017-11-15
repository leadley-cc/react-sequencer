const bpm = (state = 170, action) => {
  switch (action.type) {
    case 'SET_BPM':
      return action.bpm
    default:
      return state
  }
}

export default bpm
