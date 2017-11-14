const samples = (state = {}, action) => {
  switch (action.type) {
    case 'LOAD_SAMPLE':
      const newState = {...state}
      newState[action.track] = action.buffer
      return newState
    default:
      return state
  }
}

export default samples
