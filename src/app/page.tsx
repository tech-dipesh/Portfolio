import { Hero } from "@/components/home/hero";
import { About } from "@/components/home/about";
import { Projects } from "@/components/home/projects";
import { GithubActivity } from "@/components/home/github-activity";
import { Experience } from "@/components/home/experience";
import { Skills } from "@/components/home/skills";
import { TechTree } from "@/components/home/tech-tree";
import {ScheduleCall} from "@/components/home/schedule-call";

import { Contact } from "@/components/home/contact";
import { CalSchedule } from "@/components/home/cal-schedule-inline";
export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Projects />
      <GithubActivity />
      <Experience />
      <Skills />
      <TechTree />
      <ScheduleCall />
      <CalSchedule/> 
      <Contact />
    </>
  );
}
