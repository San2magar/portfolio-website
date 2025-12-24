import React from "react";
import { FaReact, FaNodeJs, FaCode } from "react-icons/fa";
import {
  SiNextdotjs,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiPostgresql,
  SiTailwindcss,
  SiJavascript,
  SiTypescript,
} from "react-icons/si";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      color: "from-blue-500 to-cyan-500",
      skills: [
        {
          name: "React.js",
          icon: <FaReact size={40} />,
          color: "text-cyan-400",
        },
        {
          name: "Next.js",
          icon: <SiNextdotjs size={40} />,
          color: "text-white",
        },
        {
          name: "JavaScript",
          icon: <SiJavascript size={40} />,
          color: "text-yellow-400",
        },
        {
          name: "TypeScript",
          icon: <SiTypescript size={40} />,
          color: "text-blue-400",
        },
        {
          name: "Tailwind CSS",
          icon: <SiTailwindcss size={40} />,
          color: "text-cyan-400",
        },
      ],
    },
    {
      title: "Backend",
      color: "from-green-500 to-emerald-500",
      skills: [
        {
          name: "Node.js",
          icon: <FaNodeJs size={40} />,
          color: "text-green-500",
        },
        {
          name: "Express.js",
          icon: <SiExpress size={40} />,
          color: "text-gray-400",
        },
        {
          name: "REST APIs",
          icon: <FaCode size={40} />,
          color: "text-purple-400",
        },
      ],
    },
    {
      title: "Databases",
      color: "from-purple-500 to-pink-500",
      skills: [
        {
          name: "MongoDB",
          icon: <SiMongodb size={40} />,
          color: "text-green-500",
        },
        { name: "MySQL", icon: <SiMysql size={40} />, color: "text-blue-400" },
        {
          name: "PostgreSQL",
          icon: <SiPostgresql size={40} />,
          color: "text-blue-500",
        },
      ],
    },
  ];

  return (
    <section
      className="py-20 px-4 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50"
      id="skills"
    >
      <div className="max-w-6xl mx-auto">
        <h2
          className="text-4xl md:text-5xl font-bold mb-6 text-center bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent"
          data-aos="fade-down"
        >
          Tech Stack
        </h2>
        <p
          className="text-lg md:text-xl text-gray-700 mb-12 text-center max-w-3xl mx-auto"
          data-aos="fade-up"
        >
          I have good experience in creating responsive and clean UIs for web
          development, along with robust backend systems and database
          management.
        </p>

        <div className="space-y-12">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              data-aos="fade-up"
              data-aos-delay={categoryIndex * 100}
            >
              <h3
                className={`text-2xl md:text-3xl font-bold mb-6 text-center bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}
              >
                {category.title}
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="skill-card bg-gray-900 rounded-xl p-6 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 flex flex-col items-center justify-center border border-gray-700 hover:border-blue-500 group"
                  >
                    <div
                      className={`${skill.color} mb-3 group-hover:scale-110 transition-transform duration-300`}
                    >
                      {skill.icon}
                    </div>
                    <span className="text-sm md:text-base font-semibold text-center text-gray-300 group-hover:text-white transition-colors duration-300">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div
          className="mt-16 bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-8 border border-gray-700"
          data-aos="fade-up"
        >
          <h3 className="text-2xl font-bold mb-4 text-center text-blue-400">
            Always Learning
          </h3>
          <p className="text-gray-300 text-center text-lg">
            I'm always curious about developing and designing architecture for
            web applications and exploring system design principles. Currently
            diving deeper into scalable architectures and modern development
            practices.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Skills;
