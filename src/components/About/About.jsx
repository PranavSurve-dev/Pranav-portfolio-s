import React from 'react';
import ReactTypingEffect from 'react-typing-effect';
import Tilt from 'react-parallax-tilt';
import profileImage from "../../assets/mypic.png";

const About = () => {
  return (
    <section
      id="about"
      className="py-4 px-[7vw] md:px-[7vw] lg:px-[20vw] font-sans mt-16 md:mt-24 lg:mt-32"
    >
      <div className="flex flex-col-reverse md:flex-row justify-between items-center">
        {/* Left Side */}
        <div className="md:w-1/2 text-center md:text-left mt-8 md:mt-0">
          {/* Greeting */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2 leading-tight">
            Hi, I am
          </h1>
          {/* Name */}
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 leading-tight">
            Saish Shaikh
          </h2>
          {/* Skills Heading with Typing Effect */}
          <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 text-[#8245ec] leading-tight">
            <span className="text-white">& I am a </span>
            <ReactTypingEffect
              text={['Fullstack Developer', 'Data Analyst', 'Coder']}
              speed={100}
              eraseSpeed={50}
              typingDelay={500}
              eraseDelay={2000}
              cursorRenderer={(cursor) => <span className="text-[#8245ec]">{cursor}</span>}
            />
          </h3>
          {/* About Me Paragraph */}
          <p className="text-base sm:text-lg md:text-lg text-gray-400 mb-10 mt-8 leading-relaxed">
            I'm a BE CS Engineering student with a strong passion for crafting innovative, user-friendly, and scalable web solutions. As a Full-Stack Developer, I specialize in JavaScript, React, Next.js, Node.js, and Python, while also exploring AI-powered automation with LangChain. Alongside development, I have a keen interest in Data Analysis, transforming raw data into meaningful insights through EDA, SQL, and visualization tools.

            Currently, I'm sharpening my DSA skills and working on real-world projects that combine both full-stack and analytical expertise.

            Outside of tech, you'll often find me watching or playing cricket, or travelling to explore new places and cultures, experiences that fuel my creativity and problem-solving mindset.
          </p>
          {/* Resume Button */}
          <a
            href="https://drive.google.com/drive/home"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-white py-3 px-8 rounded-full mt-5 text-lg font-bold transition duration-300 transform hover:scale-105"
            style={{
              background: 'linear-gradient(90deg, #8245ec, #a855f7)',
              boxShadow: '0 0 2px #8245ec, 0 0 2px #8245ec, 0 0 40px #8245ec',
            }}
          >
            DOWNLOAD CV
          </a>
        </div>

        {/* Right Side */}
        <div className="md:w-1/2 flex justify-center md:justify-end">
          <Tilt
            className="w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 border-4 border-purple-700 rounded-full overflow-hidden"
            tiltMaxAngleX={20}
            tiltMaxAngleY={20}
            perspective={1000}
            scale={1.05}
            transitionSpeed={1000}
            gyroscope={true}
          >
            <img
              src={profileImage}
              alt="Saish Shaikh"
              className="w-full h-full object-cover"
            />
          </Tilt>
        </div>
      </div>
    </section>
  );
};

export default About;
