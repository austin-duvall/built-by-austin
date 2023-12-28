import React from 'react';
import dmcVid from '../../../assets/dmc/dmcMp4.mp4';

export default function DMCMedia() {
  return (
    <section className='dmcMedia'>
      <img id='dmcDT' src='https://i.ibb.co/zrfZqBp/dmc-desktop-150.png' loading='lazy' alt='desktop view of DMC website' />
      <img id='dmcTab' src='https://i.ibb.co/YBk6wvR/dmc-tablet-150.png' loading='lazy' alt='tablet view of DMC website' />
      <video autoPlay loop muted playsInline disablePictureInPicture>
        <source src={dmcVid} type='video/mp4' />
        Your browser does not support video
      </video>
    </section>
  )
}