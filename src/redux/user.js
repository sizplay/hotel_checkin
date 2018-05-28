import axios from 'axios';

const SET_A_USER = 'SET_A_USER';
const AUTHENTICATED = 'AUTHENTICATED';
const UNAUTHENTICATED = 'UNAUTHENTICATED';
const UPDATE_A_USER = 'UPDATE_A_USER';

const reducer = (state = [], action) => {
  switch (action.type) {
    case AUTHENTICATED:
      return state = action.user;
    case UNAUTHENTICATED:
      return state = [];
    case SET_A_USER:
      return state;
    default:
      return state;
  }
}

const fetchUser = () => {
  return (dispatch) => {
    return axios.get('/api/user/me')
      .then(result => result.data)
      .then(users => dispatch({
        type: SET_A_USER,
        users
      }))
  }
}

const getLoggedIn = (user, history) => {
  return (dispatch) => {
    return axios.post('/api/user/me', user)
      .then(result => result.data)
      .then(user => dispatch({
        type: AUTHENTICATED,
        user
      }))
  };
};

const getLogout = (user, history) => {
  return (dispatch) => {
    dispatch({ type: UNAUTHENTICATED })
  }
}

export default reducer;

export { fetchUser, getLoggedIn, getLogout };
