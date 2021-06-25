const Banner = () => {
    return (
        <div className="banner-section">
            <div className="container">
                <div className="col">
                    <div className="text-content">
                        <p className="subtitle">Explore new opportunities. </p>
                        <h1><span>Grow</span> your business.</h1>
                        <p><strong>Wiket is the first business to business network</strong> which lets you connect to mind like people.</p>
                    </div>
                </div>
                <div className="col">
                    <div className="big-card-profile">
                        <div className="profile-text">
                            <p className="name">Hanging Garden</p>
                            <p className="job-title">Florist in Bangkok</p>
                        </div>
                        <img src="../jpg/header-img-florist.jpg" alt="Florist" />
                    </div>
                    <div className="profile-wrap">
                        <div className="profile-card card-1">
                            <img src="../jpg/header-img-pottery.jpg" alt="Pottery" />
                            <div className="profile-text">
                                <p className="name">Potject</p>
                                <p className="job-title">Pottery in Bangkok</p>
                            </div>
                        </div>
                        <div className="profile-card card-2">
                            <img src="../jpg/header-img-pottery.jpg" alt="Pottery" />
                            <div className="profile-text">
                                <p className="name">GreenThumb</p>
                                <p className="job-title">Gardener in CheChe</p>
                            </div>
                        </div>
                        <div className="profile-card card-3">
                            <img src="../jpg/header-img-pottery.jpg" alt="Pottery" />
                            <div className="profile-text">
                                <p className="name">Green Cafe</p>
                                <p className="job-title">Cafe in Bangkok</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner
