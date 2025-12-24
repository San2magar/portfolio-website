import { Link } from "react-scroll";
import { FaBars } from "react-icons/fa";
import { useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const navLinks = [
  { name: "Home", to: "home" },
  { name: "About", to: "about" },
  { name: "Skills", to: "skills" },
  { name: "Projects", to: "projects" },
  { name: "Contact", to: "contact" },
];

const socialLinks = [
  { icon: <FaGithub size={22} />, url: "https://github.com/San2magar" },
  {
    icon: <FaLinkedin size={22} />,
    url: "https://www.linkedin.com/in/santu-jhankri-magar-391038350",
  },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <nav className="w-screen bg-white shadow-lg fixed top-0 left-0 z-50 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16 w-full">
        <Link
          to="/"
          className="flex items-center gap-2 text-2xl font-extrabold text-blue-600 tracking-widest hover:scale-105 transition-transform duration-200"
        >
          <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            SantuJM
          </span>
        </Link>
        <div className="hidden md:flex space-x-8 items-center">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.to}
              smooth={true}
              duration={500}
              offset={-64}
              className="cursor-pointer relative text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200 px-2 py-1 after:content-[''] after:block after:h-0.5 after:bg-blue-600 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left"
            >
              {link.name}
            </Link>
          ))}
          <div className="flex items-center space-x-3 ml-6">
            {socialLinks.map((social, idx) => (
              <a
                key={idx}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-600 transition-colors duration-200"
                aria-label="Social link"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
        <button
          className="md:hidden text-gray-700 focus:outline-none hover:text-blue-600 transition-colors duration-200"
          onClick={() => setOpen(!open)}
          aria-label="Open navigation menu"
        >
          <FaBars size={28} />
        </button>
      </div>
      {open && (
        <div className="md:hidden bg-white px-4 pb-4 flex flex-col space-y-2 w-full animate-fade-in-down rounded-b-2xl shadow-xl border-t border-gray-200">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.to}
              smooth={true}
              duration={500}
              offset={-64}
              className="cursor-pointer text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200 py-2 text-lg border-b border-gray-100 last:border-b-0"
              onClick={() => setOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <div className="flex items-center space-x-4 mt-4 justify-center">
            {socialLinks.map((social, idx) => (
              <a
                key={idx}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-600 transition-colors duration-200"
                aria-label="Social link"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
