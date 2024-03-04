import SkillsCard from "./SkillsCard";

export default function Skills() {
  return (
    <section id="skills">
      <div className="grid px-2 mx-auto md:container min-h-fit">
        <div className="grid h-full gap-2 my-4" id="content">
          <h1 className="text-4xl font-extrabold tracking-tight md:place-self-center scroll-m-20 lg:text-5xl">
            Skills
          </h1>
          <div
            className="grid w-full gap-4 md:grid-flow-row md:grid-cols-2 md:place-self-center lg:grid-cols-3"
            id="skills-container"
          >
            <SkillsCard />
            <SkillsCard />
            <SkillsCard />
            <SkillsCard />
            <SkillsCard />
          </div>
        </div>
      </div>
    </section>
  );
}
