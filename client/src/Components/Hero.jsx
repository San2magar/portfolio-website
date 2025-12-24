import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { gsap } from "gsap";
import AOS from "aos";
import "aos/dist/aos.css";

const Hero = () => {
  React.useEffect(() => {
    gsap.from(".hero-title", { opacity: 0, y: -50, duration: 1 });
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section
      className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white"
      id="hero"
    >
      <h1
        className="hero-title text-5xl font-extrabold mb-4 text-center"
        data-aos="fade-up"
      >
        Hi, I'm <span className="text-blue-400">Santu Jhankri Magar</span>
      </h1>
      <p
        className="text-2xl mb-4 text-center max-w-2xl"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        I'm an undergraduate student at{" "}
        <span className="text-blue-300 font-semibold">
          Himalaya College of Engineering, IOE
        </span>
        .<br />A passionate software developer with hands-on experience in{" "}
        <span className="text-yellow-300 font-semibold">JavaScript</span>,{" "}
        <span className="text-green-300 font-semibold">Python</span>,{" "}
        <span className="text-cyan-300 font-semibold">C</span> &{" "}
        <span className="text-cyan-300 font-semibold">C++</span>.<br />I love
        building beautiful, interactive, and performant web applications.
      </p>
      <div
        className="flex space-x-4 mt-2"
        data-aos="fade-up"
        data-aos-delay="400"
      >
        <a
          href="https://github.com/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <FaGithub size={32} />
        </a>
        <a
          href="https://linkedin.com/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <FaLinkedin size={32} />
        </a>
        <a
          href="https://twitter.com/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Twitter"
        >
          <FaTwitter size={32} />
        </a>
      </div>
    </section>
  );
};

export default Hero;
