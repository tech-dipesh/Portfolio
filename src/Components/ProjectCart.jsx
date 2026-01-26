import { Link } from "react-router";
import Github from "../assets/social-media/github.png"

export default function Projectcart({image, Project}) {
  console.log('project', Project);
  return (
    <section className='flex justify-center my-12'>
      <div>
      <Link to={Project.githubLink}>
         <img src={Github} alt="Github" />
      </Link>
      <h3 className="text-gray-400">{Project.intro}</h3>
      <Link to={Project.liveDemo}>
        <img src={image} alt={Project.name} className="w-1xl rounded-lg"/>
      </Link>
      </div>
      <div className="justify-end">
          <h2 className="text-2xl font-semibold font-mono">{Project.name}</h2>
          <h3 className="text-gray-500">{Project.isTeamOrSolo}</h3>
          <h3 className="text-gray-500">{Project.Description}</h3>
          <div>
          {Project.features.map(p=>(
              <div className="text-gray">{p}</div>
            ))}
          </div>
      </div>
      <div>
        {Project.techStack.map(p=>(
            <div className="text-gray">{p}</div>
        ))}
      </div>
    </section >
  )
}
