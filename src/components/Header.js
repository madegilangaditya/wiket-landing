import logo from '../svg/wiket-logo.svg'
import React, { useEffect } from 'react'

const Header = () => {
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

    return (
        <header className={`App-header ${scrolled ? 'scrolled' : ''}`}>
            <div className="container">
                <div className="col col-left">
                    <img className="logo" src={logo} alt="Logo" />
                </div>
                <div className="col col-right">
                    <nav className="menu">
                        <ul>
                            <li><a href="#root">Benefits</a></li>
                            <li><a href="#root">Your Profile</a></li>
                            <li><a href="#root">Connections</a></li>
                            <li><a href="#root">Plans & Pricing</a></li>
                        </ul>
                    </nav>
                    <a href="#root" className="btn">Get Started</a>
                    <div className="mobile-menu-icon">

                    </div>
                </div>
            </div>
      </header>
    )
}

export default Header
