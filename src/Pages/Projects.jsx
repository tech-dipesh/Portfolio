import Projectcart from "../Components/projectCart"
import projectData from "../Data/ProjectsData"

export default function Projects() {
  return (
    <section className='flex justify-center my-12'>
      <h1 className='font-semibold font-mono text-2xl'>Projects</h1>
      <div className="flex items-center gap-4 my-6">
        <div className="h-px w-12 bgfrom-transparent to-purple-500/50"></div>
        <div className="h-1.5 w-1.5 rounded-full bg-purple-500/70"></div>
        <div className="h-px w-12 bg-gradient-to-1 from-transparent to-purple-500/50"></div>
      <p className="text-base md:text-lg tracking-wider text-gray-300 uppercase max-w-md text-center font-light">All Case Studies: </p>
    </div>
    <div>
      {projectData.map(project=>(
        <Projectcart key={project.id} image={project.image} Project={project}/>
      ))}
    </div>
    </section >
  )
}
