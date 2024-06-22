import './App.css'
import Header from './components/header/Header'
import Hero from './components/hero/Hero'
import About from './components/about/About'
import Projects from './components/projects/Projects'
import Footer from './components/footer/Footer'
import CommandPaletteIframe from './components/cliWindowIframe/CommandPaletteIframe'
import Spacer from './components/customSpacer/Spacer'


function App() {
  

  return (
    <>
    <Header></Header>
    <Hero/>
    <br/>
    {/* <Spacer size="2" />             */}
    <CommandPaletteIframe/>
    <br/>
    {/* <Spacer size="2" />             */}
    <About/>
    <br/>
    {/* <Spacer size="4" />             */}
    <Projects/>
    <br/>
    {/* <Spacer size="4" />             */}
    <Footer></Footer>
    </>
  )
}

export default App
