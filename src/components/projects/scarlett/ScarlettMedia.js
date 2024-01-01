import React from 'react';
import scarlettVid from '../../../assets/scarlett/scarlettMp4.mp4';
import scarlettScreens from '../../../assets/scarlett/scarlettScreens.png';

export default function ScarlettMedia() {
  return (
    <section className='scarlettMedia'>
      <img loading='lazy' src={scarlettScreens} alt='desktop, tablet, and mobile views of Scarlett website' />
    </section>
  )
}