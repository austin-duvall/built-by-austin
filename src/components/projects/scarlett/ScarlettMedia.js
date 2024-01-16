import React from 'react';
import scarlettScreens from '../../../assets/scarlett/scarlettScreensSmall.png';

export default function ScarlettMedia() {
  return (
    <section className='scarlettMedia'>
      <img loading='lazy' src={scarlettScreens} alt='desktop, tablet, and mobile views of Scarlett website' />
    </section>
  )
}