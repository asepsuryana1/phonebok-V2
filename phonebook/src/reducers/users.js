const users = (state = [], action) => {
  switch (action.type) {
    case 'LOAD_USER_SUCCESS':
    return action.users.map((item)=>{
      item.sent = true;
      return item
    })

    case 'POST_USER':
    return [
      ...state,
      {
        id: action.id,
        nama: action.nama,
        phone: action.phone,
        sent: true
      }
    ]

    case 'POST_USER_SUCCESS':
    return state.map((item)=>{
      item.sent = true;
      return item
    })

    case 'POST_USER_FAILURE':
    return state.map((item)=>{
      if(item.id === action.id){
        item.sent = false;
      }
      return item
    })

    case 'DELETE_USER':
    return state.filter((item) => item.id !== action.id)

    case 'DELETE_USER_SUCCESS':
    return state

    case 'LOAD_USER_FAILURE':
    case 'DELETE_USER_FAILURE':
    default:
    return state
  }
}

export default users