import axios from 'axios';

const SET_A_USER = 'SET_A_USER';
const CREATE_A_USER = 'CREATE_A_USER';
const DELETE_A_USER = 'DELETE_A_USER';
const UPDATE_A_USER = 'UPDATE_A_USER';

const reducer = (state = [], action) => {
  switch (action.type) {
    case CREATE_A_USER:
      return state = action.user;
    case UPDATE_A_USER:
      return state = action.user;
    case DELETE_A_USER:
      return Object.assign({}, state, { user: {} });
    case SET_A_USER:
      return state;
    default:
      return state;
  }
}

const fetchUser = () => {
  return (dispatch) => {
    return axios.get('/api/user')
      .then(result => result.data)
      .then(users => dispatch({
        type: SET_A_USER,
        users
      }))
  }
}

const createAUser = (user, history) => {
  return (dispatch) => {
    return axios.post('/api/user', user)
      .then(result => result.data)
      .then(user => dispatch({
        type: CREATE_A_USER,
        user
      }))
  };
};

const updateAUser = (user, history, id) => {
  return (dispatch) => {
    return axios.put(`/api/user/${user.id}`, user)
      .then(result => result.data)
      .then(user => dispatch({
        type: UPDATE_A_USER,
        user
      }))
  }
}

const deleteAUser = (user, history) => {
  return (dispatch) => {
    return axios.delete(`/api/user/${user.id}`)
      .then(() => dispatch({
        type: DELETE_USER,
        user
      }))
  }
}

export default reducer;

export { fetchUser, createAUser, deleteAUser, updateAUser };
