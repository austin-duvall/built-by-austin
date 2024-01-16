import React from 'react';
import Landing from './components/landing/Landing'
import About from './components/about/About';
import Contact from './components/contact/Contact';
import './App.css'
import { Routes, Route } from 'react-router-dom';
import Menu from './components/menu/Menu';
import MainLogo from './components/MainLogo';
import Projects from './components/projects/Projects';
import Footer from './components/footer/Footer';


export default function App() {
  return (
    <div className='background'>
        <MainLogo />
        <Menu />
        <Routes>
          <Route path='/' element={<Landing />} />
          <Route path='/about' element={<About />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
        <Footer />
    </div>
  )
}