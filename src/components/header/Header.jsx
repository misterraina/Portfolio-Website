import React from 'react'
import Avatar from '../avatar/Avatar'

export default function Header() {
  return (
    <header id='sectionHeader' className="text-gray-400 bg-gray-900 body-font">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    
    <Avatar/>
    <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
      <a href="#sectionAbout" className="mr-5 hover:text-white cursor-pointer">About</a>
      <a href="http://127.0.0.1:5500/resume-main/docs/index.html" target='blank' className="mr-5 hover:text-white cursor-pointer">MyResume</a>
      <a href="#sectionProject" className="mr-5 hover:text-white cursor-pointer">Projects</a>
      <a href="#sectionFooter" className="mr-5 hover:text-white cursor-pointer">Contact</a>
    </nav>
    
  </div>
</header>
  )
}
