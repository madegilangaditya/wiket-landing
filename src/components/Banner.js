import florist from '../jpg/header-img-florist.jpg'
import gardener from '../jpg/header-img-gardener.jpg'
import pottery from '../jpg/header-img-pottery.jpg'
import barista from '../jpg/header-img-barista.jpg'
import line from '../svg/header-line-phone-portrait.svg'
import line2 from '../svg/header-line-desktop.svg'
import pin1 from '../svg/pin-01.svg'
import pin2 from '../svg/pin-02.svg'
import { motion } from "framer-motion"
import { useInView } from 'react-intersection-observer'
import { useEffect } from 'react'
import { useAnimation } from 'framer-motion'

const Banner = () => {

    const {ref, inView} = useInView({
        threshold:0.4
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
    }, [inView, animation])

    return (
        <motion.div className="banner-section"
        initial={{ opacity:0}}
        animate={{ opacity:1 }}
        transition={{ duration: .8 }}>
            <div className="container">
                <div className="col col-1">
                    <div className="text-content">
                        <motion.h1 
                            initial={{y:100, opacity:0}}
                            animate={{ y: 0, opacity:1 }}
                            transition={{ duration: .8 }}>
                            <span className="subtitle">Explore new opportunities. </span><strong>Grow</strong> your business.
                        </motion.h1>
                        <motion.p initial={{y:100, opacity:0}}
                            animate={{ y: 0, opacity:1 }}
                            transition={{ duration: 1 }}><strong>Wiket is the first business to business network</strong> which lets you connect to mind like people.</motion.p>
                    </div>
                </div>
                <div ref= {ref} className="col col-2">
                    <motion.div className="big-card-profile" initial={{y:100, opacity:0}}
                            animate={{ y: 0, opacity:1 }}
                            transition={{ duration: 1 }}>
                        <div className="profile-text">
                            <p className="name">Hanging Garden</p>
                            <p className="job-title">Florist in Bangkok</p>
                        </div>
                        <img src={florist} alt="Florist" />
                    </motion.div>
                    <div className="profile-wrap">
                        <img src={pin1} alt="" className="pin-desktop pin1" />
                        <img src={pin2} alt="" className="pin-desktop pin2" />
                        <motion.div className="profile-card card-1" 
                            animate={animation}>
                            <img src={pottery} alt="Pottery" />
                            <div className="profile-text">
                                <p className="name">Potject</p>
                                <p className="job-title">Pottery in Bangkok</p>
                            </div>
                        </motion.div>
                        <motion.div animate={animation} className="profile-card card-2">
                            <img src={gardener} alt="Gardener" />
                            <div className="profile-text">
                                <p className="name">GreenThumb</p>
                                <p className="job-title">Gardener in CheChe</p>
                            </div>
                        </motion.div>
                        <motion.div animate={animation} className="profile-card card-3">
                            <img src={barista} alt="Barista" />
                            <div className="profile-text">
                                <p className="name">Green Cafe</p>
                                <p className="job-title">Cafe in Bangkok</p>
                            </div>
                        </motion.div>
                    </div>
                    <div className="bg-image">
                        <img className="line-mobile" src={line} alt="Line" />
                        <img className="line-desktop" src={line2} alt="Line" />
                    </div>
                </div>
            </div>
        </ motion.div>
    )
}

export default Banner
