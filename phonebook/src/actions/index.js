import ApolloClient from 'apollo-boost';
import gql from 'graphql-tag';
import Swal from 'sweetalert2';

const API_URL = 'http://localhost:3001/graphql/'

const client = new ApolloClient({
  uri: API_URL
});


// start load user data
export const loadUserSuccess = (users) => ({
  type: 'LOAD_USER_SUCCESS',
  users
})

export const loadUserFailure = () => ({
  type: 'LOAD_USER_FAILURE'
})

export const loadUser = () => {
  const usersQuery = gql`
  query {
    users{
      id
      nama
      phone
    }
  }`;
  return dispatch => {
    return client.query({
      query: usersQuery,
    })
    .then(function (response) {
      console.log(response);
      dispatch(loadUserSuccess(response.data.users))
    })
    .catch(function (error) {
      console.error(error);
      dispatch(loadUserFailure())
    });
  }
}

// end load user data

// start post user data

export const postUserSuccess = (users) => ({
  type: 'POST_USER_SUCCESS',
  users
})

export const postUserFailure = (id) => ({
  type: 'POST_USER_FAILURE', id
})

const postUserRedux = (id, nama, phone) => ({
  type: 'POST_USER', id, nama, phone
})


export const postUser = (id, nama, phone) => {
  const addQuery = gql`
  mutation updateUser($id: String!, $nama: String!, $phone: String!) {
    addUser(id: $id, nama: $nama, phone: $phone) {
      id
      nama
      phone
    }
  }`;
  return dispatch => {
    dispatch(postUserRedux(id, nama, phone))
    return client.mutate({
      mutation: addQuery,
      variables: {
        id,
        nama,
        phone
      }
    })
    .then(function (response) {
      dispatch(postUserSuccess(response.data))
    })
    .catch(function (error) {
      console.error(error);
      dispatch(postUserFailure(id))
    });
  }
}

// start delete user data

const deleteUserRedux = (id) => ({
  type: 'DELETE_USER', id
})

export const deleteUserSuccess = (users) => ({
  type: 'DELETE_USER_SUCCESS',
  users
})

export const deleteUserFailure = () => ({
  type: 'DELETE_USER_FAILURE'
})


export const deleteUser = (id) => {
  const deleteQuery = gql`
  mutation removeUser($id: String!) {
    removeUser(id: $id) {
      id
    }
  }`;
  return dispatch => {
    dispatch(deleteUserRedux(id))
    return client.mutate({
      mutation: deleteQuery,
      variables: {
        id
      }
    })
    .then(function (response) {
      dispatch(deleteUserSuccess(response))
    })
    .catch(function (error) {
      console.error(error);
      dispatch(deleteUserFailure())
    });
  }
}

// end delete user data

export const resendUser = (id, nama, phone) => {
  const addQuery = gql`
  mutation updateUser($id: String!, $nama: String!, $phone: String!) {
    addUser(id: $id, nama: $nama, phone: $phone) {
      id
      nama
      phone
    }
  }`;
  return dispatch => {
    return client.mutate({
      mutation: addQuery,
      variables: {
        id,
        nama,
        phone
      }
    })
    .then(function (response) {
      dispatch(postUserSuccess(response))
    })
    .catch(function (error) {
      console.error(error);
      dispatch(postUserFailure(id))
    });
  }
}


//START EDIT users DATA

export const onUpdateUser = (id) => ({
  type: 'ON_UPDATE_USER',
  id
})

export const offUpdateUser = (id) => ({
  type: 'OFF_UPDATE_USER',
  id
})

const updateUserSuccess = (users) => ({
  type: 'UPDATE_USER_SUCCESS',
  users
})

const updateUserFailure = (id) => ({
  type: 'UPDATE_USER_FAILURE',
  id
})

const updateUserRedux = (id, name, phone) => ({
  type: 'UPDATE_USER', 
  id,
  name,
  phone
})

export const updateUser = (id, name, phone) => {
  return dispatch => {
     dispatch(updateUserRedux(id, name, phone));
     const updateQuery = gql`
     mutation updateUser($id: ID!, $name: String!, $phone: String!) {
       updateUser(id: $id, name: $name, phone: $phone ) {
         id
         name
         phone
       }
     }
   `;

     return client.mutate({
        mutation: updateQuery,
        variables: {
           id,
           name,
           phone
        }
     })
        .then(function (response) {
           Swal.fire({
              position: 'center',
              icon: 'success',
              title: 'users updated successfully!',
              showConfirmButton: false,
              timer: 1200
           })
           dispatch(updateUserSuccess(response.data.updateUser))
        })
        .catch(function (error) {
           Swal.fire({
              icon: 'error',
              title: 'There is a problem',
              text: 'Something went wrong! check your connection',
              showConfirmButton: true
           })
           dispatch(updateUserFailure(id))
        });
  }
}