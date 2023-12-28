import React from 'react';
import scarlettVid from '../../../assets/scarlett/scarlettMp4.mp4';

export default function ScarlettMedia() {
  return (
    <section className='scarlettMedia'>
      <img id='scarlettDT' loading='lazy' src='https://i.ibb.co/NsMMcpS/scarlett-desktop-36.png' alt='desktop view of Scarlett restaurant website' />
      <img id='scarlettTab' loading='lazy' src='https://i.ibb.co/jk5RcjB/scarlett-tablet-36.png' alt='tablet view of Scarlett restaurant website' />
      <video poster='https://i.ibb.co/5kMpdF4/portfolio-loading-poster.png' autoPlay loop muted playsInline disablePictureInPicture>
        <source src={scarlettVid} type='video/mp4' />
        Your browser does not support video
      </video>
    </section>
  )
}