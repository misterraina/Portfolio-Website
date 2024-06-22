import React from "react";
import handyHub from "./logo.png";

export default function Projects() {
  return (
    <div>
      <section
        id="sectionProject"
        className="text-gray-400 bg-gray-900 body-font"
      >
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="text-2xl font-medium title-font mb-4 text-white tracking-widest">
              My Projects
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
              I've actively engaged in diverse web development projects,
              mastering front-end and back-end technologies alike. Here are some
              of my projects
            </p>
          </div>
          <div className="flex flex-wrap -m-4">
            <div className="p-4 lg:w-1/2">
              <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                <img
                  alt="team"
                  className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4"
                  src="https://i.guim.co.uk/img/media/77e3e93d6571da3a5d77f74be57e618d5d930430/0_0_2560_1536/master/2560.jpg?width=1900&dpr=1&s=none"
                />
                <div className="flex-grow sm:pl-8">
                  <h2 className="title-font font-medium text-lg">
                    <a
                      href="https://github.com/misterraina/I-Read-Books"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:text-blue-500 transition-colors"
                    >
                      I-Read-Books
                    </a>
                  </h2>
                  <h3 className="text-gray-500 mb-3">Books Notes</h3>
                  <p className="mb-4">
                    I liked the idea very much as i have an intrest in reading
                    books this website keeps a record of books i read and stores
                    personal reviews and notes
                  </p>
                </div>
              </div>
            </div>
            <div className="p-4 lg:w-1/2">
              <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                <img
                  alt="team"
                  className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4"
                  src="https://www.svgrepo.com/show/303500/react-1-logo.svg"
                />
                <div className="flex-grow sm:pl-8">
                  <h2 className="title-font font-medium text-lg">
                    <a
                      href="https://github.com/Deveplomentfd-Testgdfing-ENV/Application-V1"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:text-blue-500 transition-colors"
                    >
                      React To-Do App
                    </a>
                  </h2>
                  <h3 className="text-gray-500 mb-3">Web App</h3>
                  <p className="mb-4">
                    A react To-Do List app i am providing login password and
                    details this to-do app is conneced with a backend and
                    database.
                  </p>
                </div>
              </div>
            </div>
            <div className="p-4 lg:w-1/2">
              <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                <img
                  alt="team"
                  className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4"
                  src={handyHub}
                />
                <div className="flex-grow sm:pl-8">
                  <h2 className="title-font font-medium text-lg">
                    <a
                      href="https://github.com/misterraina/HandyHub"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:text-blue-500 transition-colors"
                    >
                      Handy-Hub
                    </a>
                  </h2>

                  <h3 className="text-gray-500 mb-3">OnGoing</h3>
                  <p className="mb-4">
                    A platform where too much intergration of technology like
                    messaging anomous profiles admin profile payment gateaway.
                  </p>
                </div>
              </div>
            </div>
            <div className="p-4 lg:w-1/2">
              <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                <img
                  alt="team"
                  className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4"
                  src="https://cdn.prod.website-files.com/5fac161927bf86485ba43fd0/644e6a93adfd2172b179b1fb_Blog%20Cover_2023_04_%2015%20Top%20Live%20Streaming%20Platforms%20for%20All%20Uses%20in%202023%20(Free%20_%20Paid)-p-500.webp"
                />

                <div className="flex-grow sm:pl-8">
                  <h2 className="title-font font-medium text-lg">
                    <a
                      href="https://github.com/Deveploment-Testing-ENV/Application-V1"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:text-blue-500 transition-colors"
                    >
                      Streaming-Platform
                    </a>
                  </h2>
                  <h3 className="text-gray-500 mb-3">Started- june2024</h3>
                  <p className="mb-4">
                    This project takes my intrest because to start with video
                    rendering i have no idea but my devOps friend explained me
                    buckets lets deep dive and build some awsome
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
