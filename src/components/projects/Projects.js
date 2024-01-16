import React from 'react';
import Scarlett from './scarlett/Scarlett';
import DMC from './dmc/DMC';
import Chloe from './chloe/Chloe';

export default function Projects() {
  return (
    <div className='projects'>
      <Scarlett />
      <hr />
      <DMC />
      <hr />
      <Chloe />
    </div>
  )
}