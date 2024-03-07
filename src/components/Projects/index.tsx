// section layer for background
// section layer 2rem from content in total
// div for content container
// div set gap of each element 1rem
// div set padding-x of element .5rem
// md breakpoint done by container

import ProjectsCard from "./ProjectsCard";

export default function Projects() {
  return (
    <section className="grid" id="projects">
      <div className="grid gap-4 px-2 mx-auto my-8 md:container">
        <h1 className="text-4xl font-extrabold tracking-tight text-center md:place-self-center scroll-m-20 lg:text-5xl">
          Check out my projects
        </h1>
        <div className="grid gap-4 md:grid-flow-row md:grid-cols-2 lg:grid-cols-3">
          <ProjectsCard />
          <ProjectsCard />
          <ProjectsCard />
          <ProjectsCard />
          <ProjectsCard />
          <ProjectsCard />
        </div>
      </div>
    </section>
  );
}
