export function manageFriends(state, action){
  switch (action.type) {
    case 'ADD_FRIEND':
      return {friends: [...state.friends, action.friend]}
    case 'REMOVE_FRIEND':
      let friend = state.friends.find(friend => friend.id === action.id)
      let updatedFriends = [...state.friends]
      let index = updatedFriends.indexOf(friend)
      updatedFriends.splice(index, 1)
      return {friends: updatedFriends}
    default:
      return state;
  }
}
