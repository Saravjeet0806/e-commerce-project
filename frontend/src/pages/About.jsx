import React from 'react';

const About = () => {
  const socialBtnStyle = "inline-block px-6 py-3 bg-gray-100 text-gray-700 rounded-lg border border-gray-200 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all duration-300 font-medium shadow-sm";

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-6 py-12">

      <div className="max-w-4xl w-full mx-auto p-8 md:p-12 bg-white rounded-2xl border border-gray-200 shadow-lg text-center">

        <img
          src="/dp.jpg"
          alt="Saravjeet Singh"
          className="w-44 h-44 rounded-full object-cover border-4 border-blue-600 mx-auto mb-6 shadow-md"
        />

        <h2 className="text-4xl font-bold text-gray-800 mb-3">
          About Me
        </h2>

        <h3 className="text-xl md:text-2xl font-semibold text-blue-600 mb-6">
          Saravjeet Singh
        </h3>

        <p className="text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto mb-8">
          <strong className="text-gray-800">
            Join the community and grow together!
          </strong>{' '}
          Welcome to my platform where we build, deploy, and scale highly engineered systems.
        </p>

        <div className="flex flex-wrap justify-center gap-3 mt-6">

          <a
            href="https://saravjeet0806.github.io/portfolio-website/"
            target="_blank"
            rel="noreferrer"
            className={socialBtnStyle}
          >
            🌐 Website
          </a>


          <a
            href="https://instagram.com/saravjeet_rathore"
            target="_blank"
            rel="noreferrer"
            className={socialBtnStyle}
          >
            📸 Instagram
          </a>

          <a
            href="https://www.linkedin.com/in/saravjeetsingh08"
            target="_blank"
            rel="noreferrer"
            className={socialBtnStyle}
          >
            💼 LinkedIn
          </a>

        </div>

      </div>
    </div>
  );
};

export default About;