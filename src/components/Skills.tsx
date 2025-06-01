import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaGitAlt } from "react-icons/fa";
import { SiTailwindcss, SiTypescript, SiFigma } from "react-icons/si";

const skills = [
  { name: "HTML5", icon: <FaHtml5 className="text-orange-500" /> },
  { name: "CSS3", icon: <FaCss3Alt className="text-blue-500" /> },
  { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
  { name: "TypeScript", icon: <SiTypescript className="text-blue-600" /> },
  { name: "React", icon: <FaReact className="text-cyan-400" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-teal-400" /> },
  { name: "Git", icon: <FaGitAlt className="text-red-500" /> },
  { name: "Figma", icon: <SiFigma className="text-pink-500" /> },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="bg-[#222123] py-16 text-white h-screen max-sm:h-auto"
    >
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold mb-14 text-center">Skills</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 justify-items-center">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="flex flex-col  bg-white hover:text-orange-500 bg-opacity-10 items-center gap-2 transition-transform transform hover:scale-105 rounded-lg w-40 h-40 justify-center"
            >
              <div className="text-5xl">{skill.icon}</div>
              <p className="text-lg font-medium ">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
