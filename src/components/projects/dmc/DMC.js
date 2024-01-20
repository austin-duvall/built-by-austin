import React from 'react';
import DMCMedia from './DMCMedia';
import ViewCode from '../ViewCode';

export default function DMC() {
  return (
    <div className='dmc'>
      <img id='dmcLogo' src='https://i.ibb.co/8c9VBVb/dmc-blue-condensed.png' alt='Disability Management and Consulting logo'/>
      <DMCMedia />
      <article>
        <h2>React-based application built as a pitch for Disability Management and Consulting, a firm out of Spokane, WA.</h2>
        <h3>Points of Interest:</h3>
        <ul>
          <li>Dropdown accordion menu using React context.</li>
          <li>Easy editing of employees and locations via components.</li>
          <li>Four-button "Why?" section with horizontal scrolling.</li>
        </ul>
        <ViewCode url='austin-duvall/dmc' />
      </article>
    </div>
  )
}