import Projects from '@/c/Projects/Projects';
import Contact from '@/c/Contact/Contact'
import FutureLearn from '@/c/Home/Future-Learn';
import Skills from '@/c/Skills/Skills';
import TopHome from '@/c/TopHome';
import Github from '@/c/Github';

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
