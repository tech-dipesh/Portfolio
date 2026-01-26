import { LanguagesList, LibraryList, Tools } from "../Data/SkillsData";

export default function Skills() {
  return (
    <>
    <div>
      <h1 className='font-bold text-5xl'>Skills</h1>
      <h2>Languages:</h2>
      <div className="flex">
      {LanguagesList.map(({name, icon}, i)=>(
        <Skillcart key={i} name={name} icon={icon}/>
      ))}
      </div>
      
      <h2>Library & Framework</h2>
      <div className="flex">
      {LibraryList.map(({name, icon}, i)=>(
        <Skillcart key={i} name={name} icon={icon}/>
      ))}
      </div>

      <h2>Tools</h2>
      <div className="flex">
      {Tools.map(({name, icon}, i)=>(
        <Skillcart key={i} name={name} icon={icon}/>
      ))}
      </div>
    </div>
    <div>
        <h2>Certificates</h2>

    </div>
    </>
  )
}
