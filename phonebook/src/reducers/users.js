const initState = {
  users: [],
  // page: 1,
  // pages: 0,
  // isSearch: false,
  // filternama: '',
  // filterPhone: ''
}



const users = (state = initState, action) => {
  switch (action.type) {
    case 'LOAD_USER_SUCCESS':
    return {
      ...state,
    users : action.users.map((item)=>{
      item.sent = true;
      return item
    })
    }

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
//===============================================
    case 'ON_UPDATE_USER':
      return {
        ...state,
        users: state.users.map((item) => {
          if (item.id === action.id) {
            item.isEditing = true;
          }
          console.log(item);
          
          return item
        })
      }

    case 'OFF_UPDATE_USER':
      return {
        ...state,
        users: state.users.map((item) => {
          if (item.id === action.id) {
            item.isEditing = false;
          }
          return item
        })
      }

    case 'UPDATE_USER':
      return {
        ...state,
        users: state.users.map(item => {
          if (item.id === action.id) {
            item.nama = action.nama;
            item.phone = action.phone;
          }
          return item
        })
      }

    case 'UPDATE_USER_SUCCESS':
      return {
        ...state,
        users: state.users.map(item => {
          item.sent = true;
          item.isEditing = false;
          return item
        })
      }

    case 'UPDATE_USER_FAILURE':
      return {
        ...state,
        users: state.users.map((item) => {
          if (item.id === action.id) {
            item.sent = false;
          }
          return item
        })
      }

//======================================================
    case 'DELETE_USER':
    return {
      ...state,
      users: state.users.filter((item) => item.id !== action.id)}

    case 'DELETE_USER_SUCCESS':
    return state

    case 'LOAD_USER_FAILURE':
    case 'DELETE_USER_FAILURE':
    default:
    return state
  }
  
}



export default users