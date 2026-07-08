import TopHome from '@/c/Home/TopHome';
import Projects from '@/c/Projects';
import Skills from '@/c/Skills/Skills';
import FutureLearn from '@/Home/Future-Learn';
import Github from '@/c/Github';
import Contact from '@/c/Contact/Contact';

function App() {
  return (
    <div className=' text-black dark:text-slate-100 bg-slate-900 dark:bg-slate-800 p-4'>
      <TopHome/>
      <Projects />
      <Skills/>
      <FutureLearn />
      <Github/>
      <Contact />
    </div>  )
}

export default App
