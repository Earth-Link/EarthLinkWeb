import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <nav className='navbar'>
      <ul class='header-nav'>
        <Link to='/aboutus'>About Us</Link>
        <a id='contact' href='#'>
          Contact
        </a>
      </ul>
    </nav>
  );
}
export default Header;
