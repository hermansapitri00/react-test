// section layer for background
// section layer 2rem from content in total
// div for content container
// div set gap of each element 1rem
// div set padding-x of element .5rem
// md breakpoint done by container

import ProjectsCard from "./ProjectsCard";

export default function Projects() {
  return (
    <section id="projects">
      <div className="grid gap-4 px-2 my-8 md:container md:grid-flow-row md:grid-cols-2 lg:grid-cols-3">
        <ProjectsCard />
        <ProjectsCard />
        <ProjectsCard />
        <ProjectsCard />
        <ProjectsCard />
        <ProjectsCard />
      </div>
    </section>
  );
}
