import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import { fetchUsers } from '../redux/users';
import { getLoggedIn } from '../redux/user';
import { fetchBooks } from '../redux/books';

import Nav from './Nav';
import Verify from './Verify';
import Welcome from './Welcome';
import Hotel from './Hotel';
import Book from './Book';

class Root extends React.Component {

  componentDidMount() {
    this.props.fetchUsers();
    this.props.fetchBooks();
    this.props.getLoggedIn();
  }

  render() {
    return (
      <div>
        <Router>
          <div>
            <Nav />
            <Route exact path='/' component={Hotel} />
            <Route exact path='/verify' render={({ history }) => <Verify history={history} />} />
            <Route exact path='/welcome' render={({ history }) => <Welcome history={history} />} />
            <Route exact path='/books' render={({ history }) => <Book history={history} />} />
          </div>
        </Router>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUsers: () => dispatch(fetchUsers()),
    fetchBooks: () => dispatch(fetchBooks()),
    getLoggedIn: () => dispatch(getLoggedIn())
  }
}

export default connect(null, mapDispatchToProps)(Root);


