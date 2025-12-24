import React from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description:
        "Full-stack e-commerce application with cart functionality, payment integration, and admin dashboard. Built with Next.js, Node.js, and MongoDB.",
      tech: ["Next.js", "Node.js", "MongoDB", "Stripe"],
      gradient: "from-blue-500 to-cyan-500",
      github: "#",
      demo: "#",
    },
    {
      title: "Task Management System",
      description:
        "A comprehensive task management application with real-time updates, team collaboration features, and analytics dashboard.",
      tech: ["React.js", "Express.js", "PostgreSQL", "Socket.io"],
      gradient: "from-purple-500 to-pink-500",
      github: "#",
      demo: "#",
    },
    {
      title: "Social Media Dashboard",
      description:
        "Analytics dashboard for social media metrics with data visualization, automated reporting, and multi-platform integration.",
      tech: ["Next.js", "Node.js", "MySQL", "Chart.js"],
      gradient: "from-green-500 to-emerald-500",
      github: "#",
      demo: "#",
    },
    {
      title: "Real Estate Portal",
      description:
        "Property listing platform with advanced search filters, virtual tours, and agent management system.",
      tech: ["React.js", "Express.js", "MongoDB", "Mapbox"],
      gradient: "from-orange-500 to-red-500",
      github: "#",
      demo: "#",
    },
    {
      title: "Blog Platform",
      description:
        "Modern blogging platform with rich text editor, SEO optimization, and content management system.",
      tech: ["Next.js", "Node.js", "PostgreSQL", "AWS S3"],
      gradient: "from-indigo-500 to-purple-500",
      github: "#",
      demo: "#",
    },
    {
      title: "Fitness Tracker",
      description:
        "Health and fitness tracking app with workout plans, progress monitoring, and nutrition tracking features.",
      tech: ["React.js", "Express.js", "MongoDB", "Chart.js"],
      gradient: "from-cyan-500 to-blue-500",
      github: "#",
      demo: "#",
    },
  ];

  return (
    <section className="py-20 px-4 bg-white" id="projects">
      <div className="max-w-7xl mx-auto">
        <h2
          className="text-4xl md:text-5xl font-bold mb-6 text-center bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent"
          data-aos="fade-down"
        >
          Featured Projects
        </h2>
        <p
          className="text-lg md:text-xl text-gray-700 mb-12 text-center max-w-3xl mx-auto"
          data-aos="fade-up"
        >
          Here are some of my recent projects showcasing my skills in full-stack
          development, responsive design, and modern web technologies.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="project-card bg-white rounded-2xl shadow-xl overflow-hidden transform hover:-translate-y-2 transition-all duration-300 border border-gray-200 hover:border-blue-500 group"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className={`h-2 bg-gradient-to-r ${project.gradient}`}></div>

              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3 text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                  {project.title}
                </h3>

                <p className="text-gray-600 mb-4 leading-relaxed min-h-[80px]">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-blue-50 rounded-full text-xs font-semibold text-blue-600 border border-blue-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4 mt-6">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-800 rounded-lg text-sm font-semibold transition-all duration-300 flex-1 justify-center"
                  >
                    <FaGithub size={18} />
                    Code
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white rounded-lg text-sm font-semibold transition-all duration-300 flex-1 justify-center"
                  >
                    <FaExternalLinkAlt size={16} />
                    Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center" data-aos="fade-up">
          <p className="text-gray-400 mb-4">Want to see more?</p>
          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 rounded-full font-semibold transition-all duration-300 transform hover:scale-105"
          >
            <FaGithub size={20} />
            View All Projects on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
