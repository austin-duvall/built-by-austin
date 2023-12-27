import React from 'react';
import scarlettLogo from '../../../assets/scarlett/scarlett - main logo.png';
import ScarlettMedia from './ScarlettMedia';
import ViewCode from '../ViewCode';


export default function Scarlett() {
  return (
    <div className='scarlett'>
      <img id='scarlettLogo' src={scarlettLogo} alt='Scarlett restaurant logo' />
      <ScarlettMedia />
      <article>
        <h2>React-based single-page application designed for a fictional fine-dining restaurant located in Seattle, WA.</h2>
        <h3>Points of Interest:</h3>
        <ul>
          <li>Five-input reservation form with client-side validation.</li>
          <li>Confirmation screen with summary of input.</li>
        </ul>
        <h4>Status: Complete</h4>
        <ViewCode url='austin-duvall/scarlett' />
      </article>
    </div>
  )
}