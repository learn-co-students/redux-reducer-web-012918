export function manageFriends(state, action){
  let friends = []

  switch (action.type) {
    case 'ADD_FRIEND':
      return Object.assign({}, state, {
        friends: [
          ...state.friends,
          action.friend
        ]
      })
    case 'REMOVE_FRIEND':
    const itemToRemove = state.friends.findIndex(friend => friend.id === action.id)
      return Object.assign({}, state, {
        friends: [
          ...state.friends.slice(0, itemToRemove),
          ...state.friends.slice(itemToRemove + 1)
        ]
      })
    default:
      return state
  }
}
