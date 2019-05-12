export function manageFriends(state, action){
  switch(action.type){
    case 'ADD_FRIEND':
      return {friends: [...state.friends, action.friend]}
    case 'REMOVE_FRIEND':
      let friend = state.friends.find(friend => friend.id === action.id)
      let newFriends = [...state.friends]
      let index = newFriends.indexOf(friend)
      newFriends.splice(index, 1)
      return {friends: newFriends}
    default: return state
  }
}
