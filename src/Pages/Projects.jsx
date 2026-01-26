import Projectcart from "../Components/ProjectCart"

import projectData from "../Data/ProjectsData"

export default function Projects() {
  return (
    <section className='min-h-screen py-20 px-4'>
      <div className='max-w-7xl mx-auto'>
        <div className='text-center mb-16'>
          <h1 className='font-bold text-4xl md:text-5xl text-slate-100 mb-6'>Projects</h1>
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="h-px w-12 bg-linear-to-r from-transparent to-blue-500/50"></div>
            <div className="h-1.5 w-1.5 rounded-full bg-blue-500/70"></div>
            <div className="h-px w-12 bg-linear-to-l from-transparent to-blue-500/50"></div>
          </div>
          <p className="text-base md:text-lg tracking-wider text-gray-400 uppercase font-light">
            All Case Studies
          </p>
        </div>
        <div className='space-y-16'>
          {projectData.map(project => (
            <Projectcart 
              key={project.id} 
              image={project.image} 
              Project={project}
            />
          ))}
        </div>
      </div>
    </section>
    
  )
}
