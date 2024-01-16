import React from 'react';
import { Link } from 'react-router-dom';

export default function Social({ img, alt, path, id }) {
  return (
    <Link to={path} target='_blank'>
      <img id={id} src={img} alt={alt} />
    </Link>
  )
}