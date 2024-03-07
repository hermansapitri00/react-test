import SkillsCard from "./SkillsCard";

export default function Skills() {
  return (
    <section className="grid" id="skills">
      <div className="grid px-2 mx-auto my-8 md:container min-h-fit">
        <div className="grid h-full gap-2" id="content">
          <h1 className="text-4xl font-extrabold tracking-tight text-center md:place-self-center scroll-m-20 lg:text-5xl">
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
