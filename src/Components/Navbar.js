import React, { useState } from 'react'
import "./styles.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from "@fortawesome/free-solid-svg-icons"
import { faGears } from "@fortawesome/free-solid-svg-icons"
import { faBriefcase } from "@fortawesome/free-solid-svg-icons"
import { faAddressCard } from '@fortawesome/free-solid-svg-icons'
import logo from "./images/nav-bar-logo.png"


const Navbar = () => {
    const[open, setOpen] = useState(false)

    return (
        <div>
        <div>
            <nav className={open ? "nav" : "mini"} onMouseOver={() => setOpen(true)} onMouseOut={() => setOpen(false)}>
                <h2><img src={logo} alt=""/> &nbsp;&nbsp;Parthiv</h2>
                <ul>
                    <a href='#about'><li><FontAwesomeIcon className='icon' icon={faUser} /> About</li></a>
                    <a href='#skills'><li><FontAwesomeIcon className='icon' icon={faGears} />Skills</li></a>
                    <a href='#work'><li><FontAwesomeIcon className='icon' icon={faBriefcase} />Work</li></a>
                    <a href='#contact'><li><FontAwesomeIcon className='icon' icon={faAddressCard} />Contact</li></a>
                </ul>
            </nav>
        </div>
        </div>

    )
}

export default Navbar