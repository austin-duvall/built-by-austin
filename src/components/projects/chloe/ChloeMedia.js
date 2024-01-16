import React from 'react';
import chloeScreens from '../../../assets/chloe/chloeScreens.png';

export default function ChloeMedia() {
  return (
    <section className='chloeMedia'>
      <img id='chloeDT' src={chloeScreens} loading='lazy' alt='desktop, tablet, and mobile view of Chloé website' />
    </section>
  )
}