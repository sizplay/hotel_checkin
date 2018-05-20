import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Speech from 'react-speech';


class Welcome extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      info: false,
      checkout: false
    }
    this.checkout = this.checkout.bind(this);
  }

  checkout() {
    this.setState({ checkout: true })
  }

  render() {
    const { user, book } = this.props;
    const { checkout } = this.state;
    if (!user) {
      return null;
    }
    return (
      <div className='container'>
        {
          checkout ?
            <h4 className='text-center mt-5'>Thank you for choosing our hotel!<br /> Good Bye {user.name}</h4>
            :
            <div>
              <h4 className='text-center mt-5'>Welcome! {user.name}</h4>
              <div className='row'>
                <div className='col-md-10' />
                <button onClick={this.checkout} className='btn btn-lg btn-primary mr-2'>Check Out</button>
              </div>
              <div>
                <h4></h4>
              </div>
            </div>
        }

      </div>
    )
  }
}


const mapStateToProps = ({ books, user }) => {
  const book = books.find(book => book.user_id === user.id);
  return {
    user,
    book,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Welcome);

