import Header from './components/Header'
import Banner from './components/Banner'
import React, { useEffect } from 'react'
import { motion, useAnimation } from "framer-motion"
import { useInView } from 'react-intersection-observer'


function App() {
  const [scrolled, setScrolled] = React.useState(false)

    const menuClick= () => {
        document.querySelector('.menu').classList.toggle('active')
    }

    // Menu change background when scrolled
    const handleScroll=() => {
        const offset=window.scrollY;
        if(offset > 100 ){
            setScrolled(true);
        }
        else{
            setScrolled(false);
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        document.querySelector('.mobile-menu-icon').addEventListener('click', menuClick);
    },[]);
  
  // Motion animation
  const {ref, inView} = useInView({
      threshold:0.2
  })
  const animation = useAnimation()

  useEffect(() => {
      if (inView){
          animation.start({
              y: 0, 
              opacity:1,
              transition:{
                  duration:1
              }
          })
      }
      if(!inView){
          animation.start({
              y: 100, 
              opacity:0
          })
      }
      console.log('test ', inView)
  }, [inView, animation])

  return (
    <div className="App">
      <Header scrolled={scrolled}/>
      <Banner tref={ref} motion={motion} animation={animation}/>
    </div>
  );
}

export default App;
