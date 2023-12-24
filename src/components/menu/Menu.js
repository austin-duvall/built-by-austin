import React, { useState } from 'react';
import PageLink from './PageLink';
import menuIcon from '../../assets/menu.png'

export default function Menu() {

  const [menuOn, setMenuOn] = useState(false)

  const clickHandler = () => {
    setMenuOn(!menuOn)
  }

  return (
    <div className='menu'>
      <button onClick={clickHandler} className={`${menuOn ? 'xIcon' : 'plusIcon'}`}>
        <img src={menuIcon} />
      </button>
      <ul className={menuOn ? 'menuOn' : 'menuOff'}>
        <li>
          <PageLink setMenuOn={setMenuOn} linkPath={'/'} page='home'/>
          <PageLink setMenuOn={setMenuOn} linkPath={'/about'} page='about' />
          <PageLink setMenuOn={setMenuOn} linkPath={'/projects'} page='projects' />
          <PageLink setMenuOn={setMenuOn} linkPath={'/contact'} page='contact' />
        </li>
      </ul>
    </div>

  )
}