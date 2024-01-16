import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className='footerContainer'>
      <p>Built By Austin &copy; 2023</p>
      <div className='notices'>
        <Link target='_blank' to='https://github.com/austin-duvall/austin-duvall/blob/main/Privacy%20Policy.md'>
          Privacy Policy
        </Link>
        <Link target="_blank" to='https://github.com/austin-duvall/austin-duvall/blob/main/Copyright%20Notice.md'>
          Copyright Notice
        </Link>
      </div>
    </footer>
  )
}