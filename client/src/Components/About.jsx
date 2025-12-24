import React from "react";
import { FaCode, FaLaptopCode, FaDatabase } from "react-icons/fa";

const About = () => {
  const highlights = [
    {
      icon: <FaLaptopCode className="text-4xl text-blue-400" />,
      title: "Frontend Development",
      description:
        "Creating responsive and clean UIs with React.js and Next.js",
    },
    {
      icon: <FaCode className="text-4xl text-green-400" />,
      title: "Backend Development",
      description: "Building robust APIs with Node.js and Express.js",
    },
    {
      icon: <FaDatabase className="text-4xl text-purple-400" />,
      title: "Database Management",
      description: "Working with MongoDB, MySQL, and PostgreSQL",
    },
  ];

  return (
    <section className="py-20 px-4 bg-white text-gray-900" id="about">
      <div className="max-w-6xl mx-auto">
        <h2
          className="text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent"
          data-aos="fade-down"
        >
          About Me
        </h2>

        <div
          className="about-card bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl shadow-2xl p-8 md:p-12 mb-12 border border-blue-100"
          data-aos="fade-up"
        >
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="text-lg md:text-xl mb-6 leading-relaxed">
              Hello! I'm{" "}
              <span className="text-blue-600 font-semibold">
                Santu Jhankri Magar
              </span>
              , a passionate Computer Engineering student at{" "}
              <span className="text-indigo-600 font-semibold">
                Himalaya College of Engineering
              </span>
              . I'm dedicated to crafting exceptional web experiences that
              combine beautiful design with powerful functionality.
            </p>

            <p className="text-lg md:text-xl mb-6 leading-relaxed">
              My journey in web development has equipped me with expertise in{" "}
              <span className="text-blue-600 font-semibold">Next.js</span>,{" "}
              <span className="text-indigo-600 font-semibold">React.js</span>,{" "}
              <span className="text-green-600 font-semibold">Express.js</span>,
              and <span className="text-purple-600 font-semibold">Node.js</span>
              . I specialize in creating responsive and clean user interfaces
              that provide seamless user experiences across all devices.
            </p>

            <p className="text-lg md:text-xl mb-6 leading-relaxed">
              On the backend, I work with{" "}
              <span className="text-emerald-600 font-semibold">MongoDB</span>{" "}
              for NoSQL solutions, and{" "}
              <span className="text-sky-600 font-semibold">MySQL</span> and{" "}
              <span className="text-indigo-600 font-semibold">PostgreSQL</span>{" "}
              for relational database management. I'm always curious about
              developing and designing architecture for web applications and
              exploring system design principles.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {highlights.map((item, index) => (
            <div
              key={index}
              className="about-highlight bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 border border-gray-200 hover:border-blue-500"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="flex justify-center mb-4">{item.icon}</div>
              <h3 className="text-xl font-bold text-center mb-3 text-indigo-700">
                {item.title}
              </h3>
              <p className="text-gray-600 text-center">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
