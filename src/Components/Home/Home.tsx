import Projects from '@/components/Projects/Projects';
import Contact from './Contact';
import FutureLearn from './Future-Learn';
import Skills from './Skills';
import TopHome from '@/components/TopHome';
import Github from '@/components/Github';

export default function Home() {
  return (
    <div className=' text-black dark:text-slate-100 bg-slate-900 dark:bg-slate-800 p-4'>
      <TopHome/>
      <Projects />
      <Skills/>
      <FutureLearn />
      <Github/>
      <Contact />
    </div>
  )
}
