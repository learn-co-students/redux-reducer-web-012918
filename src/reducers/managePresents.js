export function managePresents(state, action){
  // switch statements checking action.type
  switch (action.type) {
    case "INCREASE":
      return { numberOfPresents: state.numberOfPresents + 1 }
    default:
      return state
  }
}
