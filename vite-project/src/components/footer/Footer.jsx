import React from "react";
import github from "./github.png";
import gmail from "./mail.jpg";
import linkden from "./linkden.png";
// import linkden1 from "./linkden1.png";
import twitter from "./twitter2.png";

export default function Footer() {
  return (
    <footer 
      id="sectionFooter"
      className="flex flex-col items-center bg-zinc-50 text-center text-surface dark:bg-gray-900 dark:text-white
      
       "
    >
      <div className="container p-6">
        <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-4">
          
          <div className="mb-6 lg:mb-0 flex justify-center">
            <a
              href="https://github.com/misterraina"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block"
            >
              <img
                src={github}
                className="w-40 rounded-md shadow-lg hover:opacity-75 transform hover:scale-110 transition duration-300"
                alt="GitHub Profile"
              />
            </a>
          </div>
          <div className="mb-6 lg:mb-0 flex justify-center">
            <a
              href="https://www.linkedin.com/in/aayush-raina/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block"
            >
              <img
                src={linkden}
                className="w-40 rounded-md shadow-lg hover:opacity-75 transform hover:scale-110 transition duration-300"
                alt="Linkden Profile"
              />
            </a>
          </div>
          <div className="mb-6 lg:mb-0 flex justify-center">
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=ayushraina617@gmail.commailto:ayushraina@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block"
            >
              <img
                src={gmail}
                className="w-40 rounded-md shadow-lg hover:opacity-75 transform hover:scale-110 transition duration-300"
                alt="Mail ME"
              />
            </a>
          </div>
          <div className="mb-6 lg:mb-0 flex justify-center">
            <a
              href="https://gitGDSna"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block"
            >
              <img
                src={twitter}
                className="w-40 rounded-md shadow-lg hover:opacity-75 transform hover:scale-110 transition duration-300"
                alt="twtter Profile"
              />
            </a>
          </div>

        </div>
      </div>

      {/* <!--Copyright section--> */}
      <div className="w-full text-gray-600 bg-black/5 p-4 text-center">
        © 2023 Copyright:
        <a href="#sectionHeader"> Ayush Raina</a>
      </div>
    </footer>
  );
}
