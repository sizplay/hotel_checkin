import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <div>
      <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
        <Link className='text-center navbar-brand' activeclassname='active' to='/'>
          <img src='/public/favicon.ico' width='40' height='50' className='mr-3 d-inline-block' />
          Hotel</Link>
        <div className='col-md-8' />
        <div className='col-md-3 collapse navbar-collapse justify-content-end'>
          <Link className='nav-link' to='/verify'>
            <button className='btn btn-outline-light my-1'>Verify</button>
          </Link>
        </div>
      </nav>
    </div>
  );
}

export default Nav;


