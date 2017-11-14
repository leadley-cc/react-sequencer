const boundedIncrement = (state) => {
  if (state === 15) return 0
  return state + 1
}

const activeColumn = (state = 0, action) => {
  switch (action.type) {
    case 'NEXT_ACTIVE_COLUMN':
      return boundedIncrement(state)
    default:
      return state
  }
}

export default activeColumn
