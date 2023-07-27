let initState = {
  showMe: true,
  showSkill: false,
  showExperience: false,
}

function reducer(state = initState, action) {
  switch(action.type) {
    case "CLICK_ME":
      return {showMe: true, showSkill: false, showExperience: false};
    case "CLICK_SKILL":
      return {showMe: false, showSkill: true, showExperience: false};
    case "CLICK_EXPERIENCE":
      return {showMe: false, showSkill: false, showExperience: true};
    default:
      return {...state};
  }
}

export default reducer;