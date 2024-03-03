import { SiCsharp, SiJavascript, SiHtml5, SiTailwindcss } from "react-icons/si";
import { FaJava, FaRust } from "react-icons/fa";

export default function About() {
  return (
    <section id="about">
      <div className="grid p-2 mx-auto gap-y-4 md:container">
        <div className="place-self-center md:text-center" id="text-container">
          <h1 className="text-4xl font-extrabold tracking-tight scroll-m-20 lg:text-5xl">
            About
          </h1>
          <p className="leading-7 [&:not(:first-child)]:mdj:mt-4">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Doloremque, reiciendis explicabo! Repellat cupiditate ad explicabo
            earum incidunt beatae. Pariatur deserunt saepe alias, quos aliquam
            consequatur soluta laborum laudantium cum magni!
          </p>
        </div>
        <div className="flex flex-wrap items-center justify-center w-full gap-4">
          <SiCsharp size={"2rem"} />
          <SiJavascript size={"2rem"} />
          <SiHtml5 size={"2rem"} />
          <SiTailwindcss size={"2rem"} />
          <FaJava size={"2rem"} />
          <FaRust size={"2rem"} />
        </div>
      </div>
    </section>
  );
}
