import Skillcart from "../Components/Skillcart";
import CertificateCart from "../Components/Certificatecart";
import {  LanguagesList, LibraryList, Tools } from "../Data/SkillsData";
import CertificateData from "../Data/CertificateData";
export default function Skills() {
  return (
    <div className='min-h-screen py-20 px-4'>
      <div className='max-w-7xl mx-auto flex flex-col lg:flex-row gap-12'>
        <div className='flex-1'>
          <div className='mb-20'>
            <h1 className='font-bold text-5xl text-slate-100 mb-12'>Skills</h1>
            <div className='mb-12'>
              <h2 className='text-2xl font-semibold text-slate-200 mb-6'>Frontend</h2>
              <div className="flex flex-wrap gap-4">
                {LanguagesList.map(({ name, icon }, i) => (
                  <Skillcart key={i} name={name} icon={icon} />
                ))}
              </div>
            </div>
            <div className='mb-12'>
              <h2 className='text-2xl font-semibold text-slate-200 mb-6'>Library & Framework</h2>
              <div className="flex flex-wrap gap-4">
                {LibraryList.map(({ name, icon }, i) => (
                  <Skillcart key={i} name={name} icon={icon} />
                ))}
              </div>
            </div>
            <div className='mb-12'>
              <h2 className='text-2xl font-semibold text-slate-200 mb-6'>Backend</h2>
              <div className="flex flex-wrap gap-4">
                {Tools.map(({ name, icon }, i) => (
                  <Skillcart key={i} name={name} icon={icon} />
                ))}
              </div>
            </div>
          </div>
        </div>
          <div className='shrink-0 lg:w-96'> 
          <div>
            <h1 className='font-bold text-5xl text-slate-100 mb-12'>Certifications</h1>
            <div className='mb-8'>
              {/* <h2 className='text-2xl font-semibold text-slate-200 mb-6'>Frontend</h2> */}
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