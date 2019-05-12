export function manageFriends(state, action){
  switch(action.type) {
    case "ADD_FRIEND":
      return Object.assign({}, state, state.friends.push(action.friend));
      break;
    case "REMOVE_FRIEND":
      let newArr = state.friends.filter(friend => {
        return friend.id !== action.id;
      })
      return Object.assign({}, state, {friends: newArr})
      break;
    default:
      return state
  }
}
