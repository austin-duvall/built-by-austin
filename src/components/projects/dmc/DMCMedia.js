import React from 'react';
import dmcScreens from '../../../assets/dmc/dmcScreensSmall.png';

export default function DMCMedia() {
  return (
    <section className='dmcMedia'>
      <img id='dmcDT' src={dmcScreens} loading='lazy' alt='desktop, tablet, and mobile view of DMC website' />
    </section>
  )
}