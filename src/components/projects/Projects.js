import React from 'react';
import Scarlett from './scarlett/Scarlett';
import DMC from './dmc/DMC';
import WSIW from './wsiw/WSIW';

export default function Projects() {
  return (
    <div className='projects'>
      <Scarlett />
      <hr />
      <DMC />
      <hr />
      <WSIW />
    </div>
  )
}