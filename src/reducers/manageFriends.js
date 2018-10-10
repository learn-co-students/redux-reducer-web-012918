export function manageFriends(state, action){
  switch (action.type) {
    case "ADD_FRIEND":
      return {...state, friends: [...state.friends, action.friend]}
    case "REMOVE_FRIEND":
      let removeIndex = state.friends.findIndex( x => x.id == action.id)
      return {...state, friends: [...state.friends.slice(0, removeIndex), ...state.friends.slice(removeIndex + 1)]}
    default:
      return state
  }
}
