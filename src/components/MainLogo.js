import React from 'react';
import logo from '../../src/assets/logo.png'
import { Link } from 'react-router-dom';

export default function MainLogo() {
  return (
    <Link to='/'>
      <img className='mainLogo' src={logo} alt="Austin Duvall's 'A' logo" />
    </Link>
  )
}