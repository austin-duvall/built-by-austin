import React from 'react';
import dmcDT from '../../../assets/dmc/dmc - desktop 150.png';
import dmcTab from '../../../assets/dmc/dmc - tablet 150.png';
import dmcVid from '../../../assets/dmc/dmcMp4.mp4';

export default function DMCMedia() {
  return (
    <section className='dmcMedia'>
      <img id='dmcDT' src={dmcDT} alt='desktop view of DMC website' />
      <img id='dmcTab' src={dmcTab} alt='tablet view of DMC website' />
      <video autoPlay loop muted playsInline disablePictureInPicture>
        <source src={dmcVid} type='video/mp4' />
        Your browser does not support video
      </video>
    </section>
  )
}