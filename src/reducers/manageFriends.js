export function manageFriends(state, action){
  switch(action.type){
    case 'ADD_FRIEND':
      newObj = {...state}
      newObj.friends.push(action.friend)
    return newObj
    break;

    case 'REMOVE_FRIEND':
      let newObj = Object.assign({}, state, {friends: [...state.friends]})
      let frnd = newObj.friends.filter((friend)=> friend.id === action.id)[0]
      newObj.friends.splice(newObj.friends.indexOf(frnd),1)
      return newObj
    break;
    default:
    return {...state};

  }
}
