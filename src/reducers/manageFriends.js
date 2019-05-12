export function manageFriends(state, action){
  switch (action.type) {
    case "ADD_FRIEND":
      return {friends: [...state.friends, action.friend] }
    case "REMOVE_FRIEND":
      const index = state.friends.findIndex(obj => obj.id === action.id);
      const newData = [
        ...state.friends.slice(0, index),
        ...state.friends.slice(index + 1)
      ]
      return {friends: newData}
    default:
      return state
  }
}
