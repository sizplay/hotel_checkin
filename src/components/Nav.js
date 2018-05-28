import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getLogout } from '../redux/user';

const Nav = ({ user }) => {
  console.log('user',user)
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
              <button onclick={() => this.props.getLogout()} className='btn btn-outline-light my-1'>Logout</button>
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

export default connect(null, mapDispatchToProps)(Nav);

/**/
