import React from 'react';
import scarlettDT from '../../../assets/scarlett/scarlett - desktop 36.png';
import scarlettTab from '../../../assets/scarlett/scarlett - tablet 36.png';
import scarlettVid from '../../../assets/scarlett/scarlettMp4.mp4';

export default function ScarlettMedia() {
  return (
    <section className='scarlettMedia'>
      <img id='scarlettDT' loading='lazy' src={scarlettDT} alt='desktop view of Scarlett restaurant website' />
      <img id='scarlettTab' loading='lazy' src={scarlettTab} alt='tablet view of Scarlett restaurant website' />
      <video autoPlay loop muted playsInline disablePictureInPicture>
        <source src={scarlettVid} type='video/mp4' />
        Your browser does not support video
      </video>
    </section>
  )
}