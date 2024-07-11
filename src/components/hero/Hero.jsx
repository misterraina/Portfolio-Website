import React from 'react'
import heroPic from '../../assets/heroPic.png'


export default function Hero() {

  const scrollToSection = (sectionId) => {
    const targetElement = document.getElementById(sectionId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div>
     <section className="text-gray-400 bg-gray-900 body-font">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 md:mb-0 mb-10">
      <img className="object-cover object-center rounded" alt="hero" src={heroPic}/>
    </div>
    <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">Ayush Raina
        <br className="hidden lg:inline-block"/>Web Developer/ Software Engineer
      </h1>
      <p className="mb-8 leading-relaxed">Hello! Hi there! I am Ayush Raina, a passionate learner and aspiring Software Engineer.Welcome to my website, where I showcase my skills, resume, projects, and interests.</p>
      <div className="flex justify-center">
      <a
        href="https://drive.google.com/file/d/12OfwWS79bwyRn__BK41AV4_5f9sppu9U/view?usp=sharing"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
      >
        Resume
      </a>
        <button onClick={() => scrollToSection('sectionCli')} className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">CLI Inerface</button>
      </div>
    </div>
  </div>
</section>
    </div>
  )
}
