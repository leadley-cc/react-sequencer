const activeColumn = (state = -1, action) => {
  switch (action.type) {
    case 'NEXT_ACTIVE_COLUMN':
      return (state + 1) % 16
    default:
      return state
  }
}

export default activeColumn
