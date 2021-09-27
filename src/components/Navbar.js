import React from 'react'
import {Link} from 'react-router-dom'
import CSS from './NavbarStyling.css'

function Navbar() {
    return (
        <nav>
        <div className = "navbar">
            <Link to="/" className="navbar-logo">
                <img src = "./assets/NEW-his-image-studio-logo.png" alt="Logo"/>
            </Link>
            <div className = "not-logo-nav-items">
                <Link to="/realty">
                    <span>Real Estate</span>
                </Link>

                <Link to="/construction">
                    <span>Construction and<br/>Inspection Services</span>
                </Link>

                <Link to="/specialevents">
                    <span>Special Events</span>
                </Link>

                <Link to="/fun">
                    <span>For Fun</span>
                </Link>

                <Link to="/contact">
                    <span>Contact Us</span>
                </Link>

                <Link to="/about">
                    <span>About Us</span>
                </Link>
            </div>
        </div>
        </nav>
    )
}

export default Navbar