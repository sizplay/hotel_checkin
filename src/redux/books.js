import axios from 'axios';

const SET_BOOKS = 'SET_BOOKS';
const CREATE_BOOK = 'CREATE_BOOK';
const DELETE_BOOK = 'DELETE_BOOK';
const UPDATE_BOOK = 'UPDATE_BOOK';

const reducer = (state = [], action) => {
  switch (action.type) {
    case SET_BOOKS:
      state = action.books;
      break;
    case CREATE_BOOK:
      state = [...state, action.book];
      break;
    case DELETE_BOOK:
      state = state.filter(book => book.id !== action.book.id);
      break;
    case UPDATE_BOOK:
      state = state.map(book => action.book.id === book.id ? action.book : book);
      break;
  }
  return state;
}

const fetchBooks = () => {
  return (dispatch) => {
    return axios.get('/api/books')
      .then(result => result.data)
      .then(books => dispatch({
        type: SET_BOOKS,
        books
      }))
  }
}

const createBook = (book, history) => {
  return (dispatch) => {
    return axios.post('/api/books', book)
      .then(result => result.data)
      .then(book => dispatch({
        type: CREATE_BOOK,
        book
      }))
      .then(result => {
        history.push('/welcome');
      })
    };
};

const deleteBook = (book, history) => {
  return (dispatch) => {
    return axios.delete(`/api/books/${book.id}`)
      .then(() => dispatch({
        type: DELETE_BOOK,
        book
      }))
      .then(() => {
        history.push('/books');
      })
  }
}

const updateBook = (book, history, id) => {
  return (dispatch) => {
    return axios.put(`/api/books/${book.id}`, book)
      .then(result => result.data)
      .then(book => dispatch({
        type: UPDATE_BOOK,
        book
      }))
      .then(() => {
        history.push(`/books/${id}`);
      })
  }
}

export default reducer;

export { fetchBooks, createBook, deleteBook, updateBook };
