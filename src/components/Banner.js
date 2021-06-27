import florist from '../jpg/header-img-florist.jpg'
import gardener from '../jpg/header-img-gardener.jpg'
import pottery from '../jpg/header-img-pottery.jpg'
import barista from '../jpg/header-img-barista.jpg'
import line from '../svg/header-line-phone-portrait.svg'
import line2 from '../svg/header-line-desktop.svg'
import pin1 from '../svg/pin-01.svg'
import pin2 from '../svg/pin-02.svg'
import { motion } from "framer-motion"

const Banner = () => {
    return (
        <div className="banner-section">
            <div className="container">
                <div className="col col-1">
                    <div className="text-content">
                        <h1><span className="subtitle">Explore new opportunities. </span><strong>Grow</strong> your business.</h1>
                        <p><strong>Wiket is the first business to business network</strong> which lets you connect to mind like people.</p>
                    </div>
                </div>
                <div className="col col-2">
                    <div className="big-card-profile">
                        <div className="profile-text">
                            <p className="name">Hanging Garden</p>
                            <p className="job-title">Florist in Bangkok</p>
                        </div>
                        <img src={florist} alt="Florist" />
                    </div>
                    <div className="profile-wrap">
                        <img src={pin1} alt="" className="pin-desktop pin1" />
                        <img src={pin2} alt="" className="pin-desktop pin2" />
                        <div className="profile-card card-1">
                            <img src={pottery} alt="Pottery" />
                            <div className="profile-text">
                                <p className="name">Potject</p>
                                <p className="job-title">Pottery in Bangkok</p>
                            </div>
                        </div>
                        <div className="profile-card card-2">
                            <img src={gardener} alt="Gardener" />
                            <div className="profile-text">
                                <p className="name">GreenThumb</p>
                                <p className="job-title">Gardener in CheChe</p>
                            </div>
                        </div>
                        <div className="profile-card card-3">
                            <img src={barista} alt="Barista" />
                            <div className="profile-text">
                                <p className="name">Green Cafe</p>
                                <p className="job-title">Cafe in Bangkok</p>
                            </div>
                        </div>
                    </div>
                    <div className="bg-image">
                        <img className="line-mobile" src={line} alt="Line" />
                        <img className="line-desktop" src={line2} alt="Line" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner
