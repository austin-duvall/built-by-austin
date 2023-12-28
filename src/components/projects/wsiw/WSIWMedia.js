import React from 'react';
import wsiwVid from '../../../assets/wsiw/wsiwMp4.mp4';

export default function WSIWMedia() {
  return (
    <section className='wsiwMedia'>
      <img id='wsiwLanding' src='https://i.ibb.co/C1HTdKC/wsiw-Landing.png' loading='lazy' alt="Landing view of 'What Should I Wear?'" />
      <img id='wsiwResults' src='https://i.ibb.co/YPd79hs/wsiw-Results.png' loading='lazy' alt="Results view of 'What Should I Wear?'" />
      <video autoPlay loop muted playsInline disablePictureInPicture>
        <source src={wsiwVid} type='video/mp4' />
        Your browser does not support video
      </video>
    </section>
  )
}