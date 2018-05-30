import axios from 'axios';

const AUTHENTICATED = 'AUTHENTICATED';
const UNAUTHENTICATED = 'UNAUTHENTICATED';
const UPDATE_A_USER = 'UPDATE_A_USER';

const reducer = (state = [], action) => {
  switch (action.type) {
    case AUTHENTICATED:
      return state = action.user;
    case UNAUTHENTICATED:
      return state = [];
    default:
      return state;
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

export { getLoggedIn, getLogout };
