import React from "react";
import { FaHeart, FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { SiReact, SiTailwindcss, SiVite } from "react-icons/si";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: <FaGithub size={20} />,
      url: "https://github.com/San2magar",
      label: "GitHub",
    },
    {
      icon: <FaLinkedin size={20} />,
      url: "https://www.linkedin.com/in/santu-jhankri-magar-391038350",
      label: "LinkedIn",
    },
    {
      icon: <FaEnvelope size={20} />,
      url: "mailto:jhankrisantu@gmail.com",
      label: "Email",
    },
  ];

  const techStack = [
    { icon: <SiReact size={20} />, name: "React" },
    { icon: <SiTailwindcss size={20} />, name: "Tailwind CSS" },
    { icon: <SiVite size={20} />, name: "Vite" },
  ];

  return (
    <footer className="bg-gray-900 text-white py-12 border-t border-gray-800">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* About Section */}
          <div>
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
              Santu Jhankri Magar
            </h3>
            <p className="text-gray-400 leading-relaxed">
              Computer Engineering Student & Full Stack Developer passionate
              about creating beautiful, responsive web applications.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-blue-400">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {["Home", "About", "Skills", "Projects", "Contact"].map(
                (link) => (
                  <li key={link}>
                    <a
                      href={`#${link.toLowerCase()}`}
                      className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
                    >
                      {link}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Connect Section */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-blue-400">Connect</h3>
            <div className="flex gap-3 mb-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-gray-800 rounded-lg text-gray-400 hover:text-white hover:bg-blue-600 transition-all duration-300 transform hover:scale-110"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-center md:text-left">
              &copy; {currentYear} Santu Jhankri Magar. All rights reserved.
            </p>

            <div className="flex items-center gap-2 text-gray-400">
              <span>Built with</span>
              <FaHeart className="text-red-500 animate-pulse" />
              <span>using</span>
              {techStack.map((tech, index) => (
                <span key={index} className="flex items-center gap-1">
                  <span className="text-blue-400">{tech.icon}</span>
                  {index < techStack.length - 1 && <span>,</span>}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
