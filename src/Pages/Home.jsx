import React, { useState } from 'react'
import Profile from "../assets/profile.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClipboard, faCopy } from '@fortawesome/free-regular-svg-icons'
import { faArrowRight, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faXTwitter } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons/faLinkedin';
import { Link } from 'react-router';
import Projects from '../Components/Projects';
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
    let getAmOrPm = hours >= 12 ? 'pm' : 'am';
    minutes = minutes < 10 ? '0' + minutes : minutes;
    return `${hours}:${minutes} ${getAmOrPm}`
  }


  const skills=['JavaScript', 'React', 'C++', 'Redux', 'Nodejs', 'TypeScript']

  return (
    <div>
      <h3 className='my-8 md:gap-2 justify-center flex text-3xl md:text-4xl font-bold text-slate-100'>I Design the Sytem that Work For Everyone.</h3>
      <div className='flex flex-col md:flex-row items-center gap-4 justify-center text-lg text-slate-200'>
        <h3>Hello I'm Dipesh Sharma, </h3>
        <img src={Profile} alt="Profile" className='rounded-full h-32 w-32 object-cover border-4 border-blue-500 shadow-lg' />
        <span className='text-slate-300'>a Software Aficianto</span>
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


    <section className='flex'>
      <div className='bg-slate-900 p-8 rounded-lg max-w-md mx-10 md:mx-10 lg:mx-20 grid'>
        <h2 className='text-3xl mb-4'>
          <span className='font-light italic'>Dipesh</span>
          <span className='font-bold'> Sharma.</span>
        </h2>
        <div className='flex items-center gap-2 bg-slate-900  text-gray-400 text-sm mb-8'>
          <FontAwesomeIcon icon={faLocationDot} className='text-gray-500' />
          <span>Chandigarh, In</span>
          <span className='mx-1'>•</span>
          <span>{getWithAmPm(new Date())}</span>
        </div>
          <div className='gap-6 text-xl text-gray-300'>
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
      <section className='justify-center p-24'>
        <h2>Who I am:</h2>
        {/* <h3>I'm Dipesh Sharma, a Software Developer Aficionado who loves to solve the comlex problem, with help of the coding.</h3> */}
        <h3>I’m a software developer who loves to solve real-world problems by writing code that tells computers what to do. Day and night, I enjoy thinking about coding—finding better ways to solve problems and learning new topics through different approaches. I love coding in my strongest areas of technology, with a major focus on JavaScript and C++.</h3>
        <div className='flex my-4'>
          {skills.map(skill=>(
            <div className='rounded-1xl cursor-pointer px-4 py-2 gap-4 bg-slate-900 mx-4'>
              {skill}
            </div>
          ))}
        </div>
      </section>
    </section>
    <Projects/>
    </div>
  )
}