import React from 'react';
import wsiwLanding from '../../../assets/wsiw/wsiwLanding.png';
import wsiwResults from '../../../assets/wsiw/wsiwResults.png';
import wsiwVid from '../../../assets/wsiw/wsiwMp4.mp4';

export default function WSIWMedia() {
  return (
    <section className='wsiwMedia'>
      <img id='wsiwLanding' src={wsiwLanding} alt="Landing view of 'What Should I Wear?'" />
      <img id='wsiwResults' src={wsiwResults} alt="Results view of 'What Should I Wear?'" />
      <video autoPlay loop muted playsInline disablePictureInPicture>
        <source src={wsiwVid} type='video/mp4' />
        Your browser does not support video
      </video>
    </section>
  )
}