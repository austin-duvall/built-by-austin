import React from 'react';
import snoop from '../../assets/landing/snoop.png';
import nameHeading from '../../assets/landing/headline.png';
import coder from '../../assets/landing/coder.png';
import designer from '../../assets/landing/designer.png';
import websiter from '../../assets/landing/websiter.png';


export default function Landing() {

  return (
    <div className='landingPage'>
      <img id='snoop' src={snoop} alt='snoop around directed arrow' />
      <div className='content'>
        <img id='nameHeading' src={nameHeading} alt="I'm Austin Duvall" />
        <img className='subline' id='coder' src={coder} alt='coder' />
        <img className='subline' id='designer' src={designer} alt='designer' />
        <img className='subline' id='websiter' src={websiter} alt='websiter' />
      </div>
    </div>
  )
}