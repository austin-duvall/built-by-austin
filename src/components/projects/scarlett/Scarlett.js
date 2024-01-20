import React from 'react';
import ScarlettMedia from './ScarlettMedia';
import ViewCode from '../ViewCode';


export default function Scarlett() {
  return (
    <div className='scarlett'>
      <img id='scarlettLogo' src='https://i.ibb.co/NW3NvWF/scarlett-main-logo.png' alt='Scarlett restaurant logo' />
      <ScarlettMedia />
      <article>
        <h2>React-based single-page application designed for a fictional fine-dining restaurant located in Seattle, WA.</h2>
        <h3>Points of Interest:</h3>
        <ul>
          <li>Five-input reservation form with client-side validation.</li>
          <li>Confirmation screen with summary of input.</li>
        </ul>
        <ViewCode url='austin-duvall/scarlett' />
      </article>
    </div>
  )
}