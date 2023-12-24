import React from 'react';
import wsiwLogo from '../../../assets/wsiw/wsiwLogo.png';
import WSIWMedia from './WSIWMedia';
import ViewCode from '../ViewCode';


export default function WSIW() {
  return (
    <div className='wsiw'>
      <img id='wsiwLogo' src={wsiwLogo} alt='What Should I Wear logo' />
      <WSIWMedia />
      <article>
        <h2>React-based mobile application to determine what to wear based on weather.</h2>
        <h3>Points of Interest:</h3>
        <ul>
          <li>Geocoding and weather APIs for coordinate conversion based on ZIPCode.</li>
          <li>Custom weather parameters based on user's wardrobe.</li>
          <li>Client-side validation for 5 numerical characters, API validation for US ZIP codes only.</li>
        </ul>
        <h4>Status: In Progress</h4>
        <ViewCode url='austin-duvall/wsiw' />
      </article>
    </div>
  )
}