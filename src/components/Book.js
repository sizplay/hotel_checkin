import React from 'react';
import Webcam from 'react-webcam';
import axios from 'axios';
import { connect } from 'react-redux';
import DateTime from 'react-datetime';

import { createBook } from '../redux/books';


class Book extends React.Component {

  constructor(props) {
    super(props)
    this.state = this.states(this.props);
    this.onChangeStartCal = this.onChangeStartCal.bind(this);
    this.onChangeEndCal = this.onChangeEndCal.bind(this);
    this.onSave = this.onSave.bind(this);
  }

  states(props) {
    return {
      room: 100,
      startDate: '',
      endDate: ''
    }
  }

  componentWillReceiveProps(nextProps) {
    this.setState(this.states(nextProps))
  }

  onChangeStartCal(date) {
    this.setState({ startDate: date._d })
  }

  onChangeEndCal(date) {
    this.setState({ endDate: date._d })
  }

  onSave(ev) {
    ev.preventDefault();
    const book = this.state;
    book.user_id = this.props.user.id;
    this.props.createBook(book);
  }

  render() {
    return (
      <div className='container row'>
        <div className='col-md-4' />
        <div className='mt-5 row'>
          <h5 className='p-2 mr-2'>CheckIn</h5>
          <DateTime
            dateFormat='YYYY-MM-DD'
            onChange={this.onChangeStartCal}
          />
          <h5 className='p-2 mr-2'>Checkout</h5>
          <DateTime
            dateFormat='YYYY-MM-DD'
            onChange={this.onChangeEndCal}
          />
          <button className='btn btn-primary ml-2' onClick={this.onSave}>Book</button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ user }) => {
  return {
    user
  }
}

const mapDispatchToProps = (dispatch, { history }) => {
  return {
    createBook: (book) => dispatch(createBook(book, history))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Book);

