import React, { useState } from 'react'
import Profile from "../assets/profile.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClipboard, faCopy } from '@fortawesome/free-regular-svg-icons'
import { faArrowRight, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faXTwitter } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons/faLinkedin';
import { Link } from 'react-router';
import Projects from './Projects';
import Contact from './Contact';
import FutureLearn from './Future-Learn';
import Skills from './Skills';
export default function Home() {
  const [isCopy, setIsCopy] = useState(false);
  const clickCopy = () => {
    navigator.clipboard.writeText('dipsharmadev+portfolio@gmail.com')
    setIsCopy(!isCopy)
  }


  function getWithAmPm(date) {
    let hours = date.getHours();
    hours %= 12;
    hours = hours ? hours : 12;
    let minutes = date.getMinutes();
    let getAmOrPm = hours >= 12 ? 'am' : 'pm';
    minutes = minutes < 10 ? '0' + minutes : minutes;
    return `${hours}:${minutes} ${getAmOrPm}`
  }


  const skills = ['JavaScript', 'React', 'C++', 'Redux', 'Nodejs', 'TypeScript']

  return (
    <div>
      <h3 className='md:my-6 lg:my-8 md:gap-2 justify-center flex md:text-2xl lg:text-3xl font-bold text-slate-100'>I Design the Sytem that Work For Everyone.</h3>
      <div className='flex flex-col md:flex-row items-center gap-4 justify-center text-lg text-slate-200'>
        <h3>Hello I'm Dipesh Sharma, </h3>
        <img src={Profile} alt="Profile" className='rounded-full h-32 w-32 object-cover border-4 border-blue-500 shadow-lg' />
        <span className='text-slate-300'>a Software aficionado</span>
      </div>
      <div className='flex justify-center my-8'>
        <div className='p-6 rounded-xl bg-slate-800 hover:bg-slate-700 transition-colors shadow-xl border border-slate-700'>
          <div className='flex items-center justify-between w-full gap-4'>
            <div className='flex items-center gap-2 cursor-pointer bg-slate-800/50 px-6 py-3 rounded-full border border-slate-700/50'>
              <h2 className='text-slate-100 font-semibold text-lg'>Let's Connect</h2>
              <FontAwesomeIcon icon={faArrowRight} className='text-blue-400' />
            </div>
            <div onClick={clickCopy} className='flex items-center gap-3 bg-slate-800/50 px-6 py-3 rounded-full border border-slate-700/50 cursor-pointer hover:border-blue-400/50 transition-all'>
              <FontAwesomeIcon
                icon={isCopy ? faClipboard : faCopy}
                className='text-slate-400'
              />
              <span className='text-slate-300'>dipsharmadev@gmail.com</span>
            </div>
          </div>
        </div>
      </div>


      <section className='flex flex-col lg:flex-row gap-8 max-w-6xl mx-auto px-4 my-12'>
        <div className='bg-slate-900 p-8 rounded-2xl border border-slate-800 shrink-0 lg:w-96'>
          <h2 className='text-4xl mb-6'>
            <span className='font-light italic'>Dipesh</span>
            <span className='font-bold text-gray-300'> Sharma.</span>
          </h2>

          <div className='flex items-center gap-2 text-gray-400 text-sm mb-12'>
            <FontAwesomeIcon icon={faLocationDot} className='text-gray-500' />
            <span>Chandigarh, In</span>
            <span className='mx-1'>•</span>
            <span>{getWithAmPm(new Date())}</span>
          </div>

          <div className='flex gap-8 text-2xl text-gray-300'>
            <Link to='https://github.com/tech-dipesh' target='_blank'>
              <FontAwesomeIcon icon={faGithub} className='hover:text-white cursor-pointer transition-colors' />
            </Link>
            <Link to='https://x.com/tec_dipesh' target='_blank'>
              <FontAwesomeIcon icon={faXTwitter} className='hover:text-white cursor-pointer transition-colors' />
            </Link>
            <Link to='https://linkedin.com/in/tech-dipesh' target='_blank'>
              <FontAwesomeIcon icon={faLinkedin} className='hover:text-white cursor-pointer transition-colors' />
            </Link>
          </div>
        </div>
        <section className='flex-1 flex flex-col gap-6'>
          <h2 className='text-2xl font-semibold text-slate-200'>Who I am:</h2>
          <p className='text-slate-300 leading-relaxed text-base'>
            I'm a software developer who loves to solve real-world problems by writing code that tells computers what to do. Day and night, I enjoy thinking about coding—finding better ways to solve problems and learning new topics through different approaches. I love coding in my strongest areas of technology, with a major focus on JavaScript and C++.
          </p>
          <div className='flex flex-wrap gap-3 mt-2'>
            {skills.map((skill, i) => (
              <div
                className='px-5 py-2.5 bg-slate-900 border border-slate-800 rounded-lg text-slate-300 text-sm hover:border-slate-700 hover:bg-slate-800 transition-all cursor-default'
                key={i}
              >
                {skill}
              </div>
            ))}
          </div>
        </section>
      </section>
      <Projects />
      <Skills/>
      <FutureLearn />
      <Contact />
    </div>
  )
}