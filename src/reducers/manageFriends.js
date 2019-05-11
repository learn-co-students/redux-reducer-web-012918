export function manageFriends(state = {
  friends: []
}, action){

  switch(action.type){

    case "ADD_FRIEND":
      return {...state, friends: [...state.friends, action.friend]}
      break;
    case "REMOVE_FRIEND":
      const indexForRemoval = state.friends.findIndex(friend => friend.id === action.id)
      return {...state, friends:
        [...state.friends.slice(0, indexForRemoval),
        ...state.friends.slice(indexForRemoval + 1)]
      }
      break;
    default:
      return state;
  }

}
