export function manageFriends(state = {friends: []}, action){


  switch(action.type){
    case 'REMOVE_FRIEND':
      let removedFriendId = state.friends.findIndex(friend => friend.id === action.id)
      return Object.assign({}, state, {friends: [...state.friends.slice(0,removedFriendId),...state.friends.slice(removedFriendId + 1)]})
    case 'ADD_FRIEND':
      return Object.assign({}, state, {friends:[...state.friends, action.friend]})
    default:
      return state
  }

}
