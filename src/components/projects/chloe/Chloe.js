import React from 'react';
import ViewCode from '../ViewCode';
import ChloeMedia from './ChloeMedia';

export default function Chloe() {
  return (
    <div className='chloe'>
      <img id='chloeLogo' src='https://i.ibb.co/pjZ0z3h/chloe-logo.png' alt='Chloé logo' />
      <ChloeMedia />
      <article>
        <h2>Web landing for fictional musician, Chloé. Built with HTML, CSS, JS, and jQuery.</h2>
        <h3>Points of Interest:</h3>
        <ul>
          <li>Modular insertion of content using JS, mimicking components.</li>
          <li>Merch image carousel and streaming link dropdown using jQuery.</li>
        </ul>
        <h4>Status: In Progress - Responsive Styling</h4>
        <ViewCode url='austin-duvall/chloe' />
      </article>
    </div>
  )
}