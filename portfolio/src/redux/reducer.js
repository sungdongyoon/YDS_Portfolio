let initState = {
  isToggle: false,
}

function reducer(state = initState, action) {
  switch(action.type) {
    case "TOGGLE":
      return {...state, isToggle: !state.isToggle};
    case "FALSE_TOGGLE":
      return {...state, isToggle: false};
    default:
      return {...state};
  }
}

export default reducer;