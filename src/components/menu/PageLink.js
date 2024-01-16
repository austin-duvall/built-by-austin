import React from 'react';
import { Link } from 'react-router-dom';

export default function PageLink({ linkPath, page, setMenuOn }) {
  
  const clickHandler = () => {
    setMenuOn(false)
  }
  
  return (
    <Link onClick={clickHandler} className='pageLink' to={linkPath}>{page}</Link>
  )
}