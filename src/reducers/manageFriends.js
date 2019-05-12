export function manageFriends(state, action){
  switch (action.type) {
    case 'ADD_FRIEND':
      let new_fran = action.friend
      return {friends: [...state.friends, new_fran]}
    case 'REMOVE_FRIEND':
      let filtered_friend_list = state.friends.filter(friend => friend.id !== action.id)
      return {friends: filtered_friend_list}
    default:
      return state
  }
}
