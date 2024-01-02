import React from 'react';
import Scarlett from './scarlett/Scarlett';
import DMC from './dmc/DMC';

export default function Projects() {
  return (
    <div className='projects'>
      <Scarlett />
      <hr />
      <DMC />
    </div>
  )
}