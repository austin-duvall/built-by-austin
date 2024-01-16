import React from 'react';
import { Link } from 'react-router-dom';

export default function ViewCode({ url }) {
  return (
    <div className='viewCode'>
      <Link to={`https://www.github.com/${url}`} target='_blank'>
        <p>view the code</p>
      </Link>
  </div>
  )
}