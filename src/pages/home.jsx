import Navbar from "../components/home/Navbar"
import Footer from "../components/home/Footer"
import Header from "../components/home/Header"
import Featured from "../components/home/Featured"
import About from "../components/home/About"
import Gallery from "../components/home/Gallery"


import './home.css';
import { useEffect, useRef, useState } from "react"
import useLocomotiveScroll from "../hooks/useLocomotiveScroll"
 
import CSSPlugin from 'gsap/CSSPlugin';
const C = CSSPlugin // wierd stuff needed to make it work


const Home = () => {

  const [preloader, setPreloader] = useState(true)

  useLocomotiveScroll(!preloader)

  const [timer, setTimer] = useState(1)

  const id = useRef(null)

  const clear = () => {
    window.clearInterval(id.current)
    setPreloader(false)
  }


  useEffect(() => {
    id.current = window.setInterval(()=>{
      setTimer((timer)=>timer-1)
    }, 1000)
  }, [])

  useEffect(() => {
    if (timer <= 0) {
      clear();
    }
  }, [timer])

  return (
    <>
    
      {preloader ? 
        <div className="loader-wrapper absolute">
          <h1>Team <i>"Think About It"</i></h1>
          <h2>Presents</h2>
        </div> 

          :

        <div className="App" id="main-container" data-scroll-container><div/>
          <Navbar/>
          <Header/>
          <Featured/>
          <About/>
          <Gallery/>
          <Footer/>
        </div>
      }
    </>

  );
}

export default Home;
