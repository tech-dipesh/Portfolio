import React from 'react'
import SmallDeveloperIcon from "../assets/images/developer-small-icon.png"
import futureSkills from '../Data/futureSkills'
export default function FutureLearn() {
  return (
    <section className='py-12 px-4'>
      <div className='max-w-5xl mx-auto'>
        <div className='flex items-center gap-4 mb-8'>
          <div className='relative'>
            <div className='absolute inset-0 bg-blue-500/20 rounded-full blur-xl'></div>
            <img 
              src={SmallDeveloperIcon} 
              alt="Icon" 
              className='relative rounded-full h-12 w-12 object-cover border-2 border-slate-700 shadow-lg'
            />
          </div>
          <h1 className='text-xl md:text-2xl text-slate-200 font-medium'>
            Currently expanding my knowledge in
          </h1>
        </div>
        <div className='bg-slate-900/80 backdrop-blur-sm border border-slate-800 rounded-2xl p-6 md:p-8'>
          <h2 className='text-2xl md:text-3xl font-bold text-blue-400 mb-6'>
            Advanced Machine Learning, Cloud Architecture & Web3
          </h2>
          
          <div className='flex flex-wrap gap-3'>
            {futureSkills.map((skill, index) => (
              <div 
                key={index}
                className={`
                  ${skill.bgColor} 
                  ${skill.borderColor} 
                  ${skill.textColor}
                  px-5 py-2.5 
                  rounded-full 
                  border-2
                  font-medium
                  text-sm md:text-base
                  hover:scale-105 
                  hover:shadow-lg
                  transition-all 
                  duration-300
                  cursor-default
                `}
              >
                {skill.skill}
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}