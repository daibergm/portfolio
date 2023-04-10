import { ProjectsList } from '@/mocks';
import ProjectItem from './components/ProjectItem';

function Projects() {
  return (
    <div id="projects" className="w-full p-4">
      <div className="max-w-[1240px] mx-auto py-16">
        <p className="uppercase text-[#5651e5] text-xl tracking-widest">Projects</p>
        <h2 className="pt-4">What I have Built</h2>
        <div className="grid md:grid-cols-2 gap-8 pt-4">
          {ProjectsList.map((project) => (
            <ProjectItem item={project} key={JSON.stringify(project)} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;
