import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getLogout } from '../redux/user';

class Nav extends React.Component {

  render() {
    let { user } = this.props;
    if (!user) user = {};
    return (
      <div>
        <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
          <Link className='text-center navbar-brand' activeclassname='active' to='/'>
            <img src='/public/favicon.ico' width='40' height='50' className='mr-3 d-inline-block' />
            Hotel</Link>
          <div className='col-md-8' />
          <div className='col-md-3 collapse navbar-collapse justify-content-end'>
            {
              user.id ? <Link className='nav-link' to='/'>
                <button onClick={() => this.props.getLogout()} className='btn btn-outline-light my-1'>Logout</button>
              </Link> :
                <Link className='nav-link' to='/verify'>
                  <button className='btn btn-outline-light my-1'>Verify</button>
                </Link>
            }
          </div>
        </nav>
      </div>
    );
  }
}


const mapStateToProps = ({ user }) => {
  return {
    user
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
   getLogout: () => dispatch(getLogout())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Nav);

