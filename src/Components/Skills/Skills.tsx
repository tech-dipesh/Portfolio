import Skillcart from "../Components/Skills/Skillcard";
import CertificateCart from "../Components/Skills/Certificatecard";
import {  Achievements, LanguagesList, LibraryList, Tools } from "../Data/SkillsData";
import CertificateData from "../Data/CertificateData";
import Achievementscard from "../Components/Skills/Achievementscard";
export default function Skills() {
  return (
    <div className='min-h-screen py-10 md:py-20 px-3 md:px-4 bg-slate-900 dark:bg-slate-800'>
      <div className='max-w-7xl mx-auto w-full overflow-x-hidden flex flex-col lg:flex-row gap-8 md:gap-12'>
        <div className='flex-1 min-w-0'>
          <div className='mb-10 md:mb-20'>
            <h1 className='font-bold text-3xl md:text-5xl text-slate-100 mb-8 md:mb-12'>Skills</h1>
            <div className='mb-8 md:mb-12'>
              <h2 className='text-xl md:text-2xl font-semibold text-slate-200 mb-4 md:mb-6'>Languages:</h2>
              <div className="flex flex-wrap gap-3 md:gap-4">
                {LanguagesList.map(({ name, icon }, i) => (
                  <Skillcart key={i} name={name} icon={icon} />
                ))}
              </div>
            </div>
            <div className='mb-8 md:mb-12'>
              <h2 className='text-xl md:text-2xl font-semibold text-slate-200 mb-4 md:mb-6'>Library & Framework</h2>
              <div className="flex flex-wrap gap-3 md:gap-4">
                {LibraryList.map(({ name, icon }, i) => (
                  <Skillcart key={i} name={name} icon={icon} />
                ))}
              </div>
            </div>
            <div className='mb-8 md:mb-12'>
              <h2 className='text-xl md:text-2xl font-semibold text-slate-200 mb-4 md:mb-6'>Tools</h2>
              <div className="flex flex-wrap gap-3 md:gap-4">
                {Tools.map(({ name, icon }, i) => (
                  <Skillcart key={i} name={name} icon={icon} />
                ))}
              </div>
            </div>
          </div>
        </div>
          <div className='shrink-0 w-full lg:w-96 min-w-0'> 
            <div className="py-4">
            <h1 className='font-bold text-3xl md:text-5xl text-slate-100 py-3'>Achievements:</h1>
              <div className='space-y-3'>
                {Achievements.map(({name, proof}, i) => (
                  <Achievementscard key={i} name={name} proof={proof}/>
                ))}
              </div>
            </div>
          <div>
            <div className='mb-8'>
              <h2 className='text-2xl md:text-3xl font-semibold text-slate-200 mb-6'>Certifications</h2>
              <div className='space-y-3'>
                {CertificateData.map(({title, url}, i) => (
                  <CertificateCart key={i} title={title} url={url}/>
                ))}
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
      )
}
