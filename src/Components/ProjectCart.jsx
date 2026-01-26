import { Link } from "react-router";
import Github from "../assets/social-media/github.png"

export default function Projectcart({image, Project}) {
  return (
 <article className='flex flex-col lg:flex-row gap-8 bg-slate-900/50 p-6 md:p-8 rounded-2xl border border-slate-800 hover:border-slate-700 transition-all duration-300 group'>
      <div className='flex-1 relative'>
        <div className='bg-slate-800/50 p-4 md:p-6 rounded-xl border border-slate-700/50 h-full overflow-hidden'>
          <p className="text-slate-400 text-base md:text-lg mb-4 md:mb-6 leading-relaxed">
            {Project.intro}
          </p>
          
          <Link 
            to={Project.liveDemo} 
            className='block relative overflow-hidden rounded-lg group-hover:shadow-2xl group-hover:shadow-blue-500/10 transition-all duration-300'
          >
            <img 
              src={image} 
              alt={Project.name} 
              className="w-full rounded-lg transform group-hover:scale-105 transition-transform duration-500"
            />
          </Link>
        </div>
      </div>

      <div className="flex-1 flex flex-col gap-6 relative">
        
        <Link 
          to={Project.githubLink} 
          className='absolute -top-2 -right-2 w-12 h-12 bg-slate-800 border border-slate-700 rounded-full flex items-center justify-center hover:bg-slate-700 hover:border-slate-600 transition-all duration-300 hover:scale-110 z-10'
        >
          <img src={Github} alt="Github" className="w-6 h-6"/>
        </Link>

        <div className='pt-4'>
          <div className='flex items-center gap-3 mb-2'>
            <div className='w-1 h-8 bg-blue-500 rounded-full'></div>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-100">
              {Project.name}
            </h2>
          </div>
          <p className="text-slate-400 text-sm ml-4 uppercase tracking-wide">
            {Project.isTeamOrSolo}
          </p>
        </div>

        <p className="text-slate-300 leading-relaxed text-base">
          {Project.Description}
        </p>

        <div className='space-y-3 grow'>
          {Project.features.map((feature, index) => (
            <div 
              key={index} 
              className="flex items-start gap-3 text-slate-300 hover:text-slate-100 transition-colors duration-200"
            >
              <span className='text-blue-500 text-xl font-bold mt-0.5 shrink-0'>+</span>
              <span className="text-sm md:text-base">{feature}</span>
            </div>
          ))}
        </div>
        <div className='mt-auto pt-6 border-t border-slate-800'>
          <p className='text-slate-500 text-xs uppercase tracking-wider mb-3'>Tech Stack</p>
          <div className='flex flex-wrap gap-3'>
            {Project.techStack.map((tech, index) => (
              <div 
                key={index} 
                className="px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg text-slate-300 text-sm hover:border-blue-500/50 hover:bg-slate-700 transition-all duration-300 cursor-default"
              >
                {tech}
              </div>
            ))}
          </div>
        </div>
      </div>
    </article>
  )
}
