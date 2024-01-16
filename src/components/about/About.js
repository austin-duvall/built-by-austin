import React from 'react';
import avatar from '../../assets/icon.png';
import gh from '../../assets/about/gh.png';
import linkedin from '../../assets/about/linkedin.png';
import email from '../../assets/about/email.png';
import resume from '../../assets/about/resume.png';
import Social from './Social';

export default function About() {
  return (
    <div className='aboutPage' role='region' aria-label='About Austin'>
      <img id='aboutAvatar' src={avatar} alt='portrait of Austin' />
      <article className='bio'>
        <p>Hey there! I'm Austin, a passionate front-end developer with a keen interest in both coding and design. My journey in the world of web development led me to specialize in React.</p>
        <p>Equipped with a professional certificate in front-end web development from Meta, I bring a solid foundation in creating engaging and user-friendly interfaces. My approach blends simplicity of design with feature-rich functionality to craft seamless and visually appealing web apps optimized for all devices.</p>
        <p>Whether you're in need of a dedicated developer for a specific project or seeking someone to contribute their skills to your team, I am ready to bring my expertise in front-end development to the table.</p>
      </article>
      <h1>Find me:</h1>
      <article className='social' role='list' aria-label='Social Links'>
        <Social id='li' img={linkedin} path='www.linkedin.com/in/austin-duvall-a63a771b4' alt='LinkedIn icon' role='listitem' />
        <Social id='gh' img={gh} path='https://github.com/austin-duvall' alt='GitHub icon' role='listitem' />
        <Social id='emailLink' img={email} path='/contact' alt='Email icon' role='listitem' />
        <Social id='resume' img={resume} path='https://github.com/austin-duvall/austin-duvall/blob/main/Resume.pdf' alt='Resume icon' role='listitem' />
      </article>
    </div>
  )
}
