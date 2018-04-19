export function manageFriends(state, action){
  switch (action.type){
    case "ADD_FRIEND":
      return {...state, friends: [...state.friends, action.friend]}
    case "REMOVE_FRIEND":
      const index = state.friends.findIndex((friend) => friend.id === action.id);  //objects are not equal??
      let newfriends = [
        ...state.friends.slice(0, index),
        ...state.friends.slice(index + 1)
      ]
      return {...state, friends: newfriends }
    default:
      return state
  }
}
