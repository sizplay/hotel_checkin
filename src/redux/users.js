import axios from 'axios';

const SET_USERS = 'SET_USERS';
const CREATE_USER = 'CREATE_USER';
const DELETE_USER = 'DELETE_USER';
const UPDATE_USER = 'UPDATE_USER';

const reducer = (state = [], action) => {
  switch (action.type) {
    case SET_USERS:
      state = action.users;
      break;
    case CREATE_USER:
      state = [...state, action.user];
      break;
    case DELETE_USER:
      state = state.filter(user => user.id !== action.user.id);
      break;
    case UPDATE_USER:
      state = state.map(user => action.user.id === user.id ? action.user : user);
      break;
  }
  return state;
}

const fetchUsers = () => {
  return (dispatch) => {
    return axios.get('/api/users')
      .then(result => result.data)
      .then(users => dispatch({
        type: SET_USERS,
        users
      }))
  }
}

const createUser = (user, history) => {
  return (dispatch) => {
    return axios.post('/api/users', user)
      .then(result => result.data)
      .then(user => dispatch({
        type: CREATE_USER,
        user
      }))
  };
};

const deleteUser = (user, history) => {
  return (dispatch) => {
    return axios.delete(`/api/users/${user.id}`)
      .then(() => dispatch({
        type: DELETE_USER,
        user
      }))
      .then(() => {
        history.push('/users');
      })
  }
}

const updateUser = (user, history, id) => {
  return (dispatch) => {
    return axios.put(`/api/users/${user.id}`, user)
      .then(result => result.data)
      .then(user => dispatch({
        type: UPDATE_USER,
        user
      }))
      .then(() => {
        history.push(`/users/${id}`);
      })
  }
}

export default reducer;

export { fetchUsers, createUser, deleteUser, updateUser };
