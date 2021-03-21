import React, { useState } from 'react'
import {Link} from 'react-router-dom'

function Header() {
    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)
    const closeMobileMenu = () => setClick(false)
    return (
        <>
        <nav className="navbar">
            <div className="navbar-contianer">
                <Link className="navbar-logo">
                    Simple Folio
                </Link>
                <div className="menu-icon" onClick={handleClick}>
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className="nav-item">
                        <Link to='/' className="nav-links" onClick={closeMobileMenu}>Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/about' className="nav-links" onClick={closeMobileMenu}>About</Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/contact' className="nav-links" onClick={closeMobileMenu}>Contact</Link>
                    </li>
                </ul>
            </div>
        </nav>
            {/* <nav className="navbar navbar-light navbar-expand-lg fixed-top bg-white clean-navbar">
                <div className="container">
                    <Router>
                        <Link to="/" className="navbar-brand logo">Brand</Link>
                    </Router>
                    
                    <button className="navbar-toggler" data-target="#navcol-1" data-toggle="collapse">
                        <span className="sr-only">Toggle Navigation</span>
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div id="navcol-1" className="collapse navbar-collapse">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <a href="index.html" className="nav-link active">Home</a>
                            </li>
                            <li className="nav-item">
                                <a href="about.html" className="nav-link">About</a>
                            </li>
                            <li className="nav-item">
                                <a href="contact.html" className="nav-link">Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav> */}
        </>
    )
}

export default Header
