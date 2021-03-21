import React from 'react'

function Header() {
    return (
        <>
            <nav className="navbar navbar-light navbar-expand-lg fixed-top bg-white clean-navbar">
                <div className="container">
                    <a href="#" className="navbar-brand logo">Brand</a>
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
            </nav>
        </>
    )
}

export default Header
