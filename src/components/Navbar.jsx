import React from 'react'
import '../styles/Navbar.scss'

const Navbar = () => {
    return (
        <nav>
            <div className="nav1">
                <h1>UNLOCK</h1>
                <div className="nav1-inner">
                    <h4>Team</h4>
                    <h4>Programs</h4>
                    <h4>FAQ</h4>
                </div>
            </div>
            <button>Get In Touch <img src="/images/arrow.png" alt="arrow" /></button>
        </nav>
    )
}

export default Navbar