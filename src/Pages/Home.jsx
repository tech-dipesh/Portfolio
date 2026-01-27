import React, { useState } from 'react'
import Projects from './Projects';
import Contact from './Contact';
import FutureLearn from './Future-Learn';
import Skills from './Skills';
import TopHome from '../Components/TopHome';
export default function Home() {
  return (
    <div className=' text-black dark:text-slate-100 bg-slate-900 dark:bg-slate-800 p-4'>
      <TopHome/>
      <Projects />
      <Skills/>
      <FutureLearn />
      <Contact />
    </div>
  )
}