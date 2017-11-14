const playing = (state = false, action) => {
  switch (action.type) {
    case 'TOGGLE_PLAYING':
      return !state
    default:
      return state
  }
}

export default playing
