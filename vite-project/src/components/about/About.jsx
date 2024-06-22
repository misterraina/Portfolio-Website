import React from 'react'
import Toolkit from '../toolkit/Toolkit'

export default function About() {
  return (
    
      <section id='sectionAbout' className="text-gray-400 bg-gray-900 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="xl:w-1/2 lg:w-3/4 w-full mx-auto text-center">
      <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="inline-block w-8 h-8 text-gray-500 mb-8" viewBox="0 0 975.036 975.036">
        <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
      </svg>
      <p className="leading-relaxed text-lg">I am currently pursuing a degree in Electrical Engineering with aspirations to become a Software Engineer. I believe in taking the hard path with no shortcuts. This website serves as my portfolio, showcasing my skills and projects.

I began my programming journey in 2021 when I entered college. My first languages were C and C++, and I have gained a solid foundation in Data Structures and Algorithms (DSA) using C. Additionally, I am proficient in Python and have written several programs using this language.

As I progressed, I ventured into web development and became a MERN (MongoDB, Express.js, React, Node.js) and PERN (PostgreSQL, Express.js, React, Node.js) stack developer. I recently completed my third-year exams and am now entering my fourth year.

I am hardworking and deeply committed to my interests. By creating this website, I aim to stay motivated and focused on completing the projects I am currently working on.</p>
      <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-8 mb-6"></span>

      <Toolkit/>

      <h2 className="text-white font-medium title-font tracking-wider text-sm">ABOUT</h2>
      <p className="text-gray-500">My skills </p>
    </div>
  </div>
</section>
  
  )
}
