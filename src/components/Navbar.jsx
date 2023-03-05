import React, {useState} from 'react'
import "../App.scss"
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {

const [isOpen, setIsOpen] = useState(false);
const toggleNav = () => {
    setIsOpen(!isOpen);
};
  return (
    <nav className="wrapper">
     <div className="navbar">
        <a href="/#" className="logo">LOGO</a>
        <div className= {`nav-links ${isOpen && "show"}`}>
            <ul>
                <li><a href="/#">Home</a></li>
                <li><a href="/#">About</a></li>
                <li><a href="/#">Services</a></li>
                <li><a href="/#">Contact</a></li>
            </ul>
        </div>
        <div className="nav-toggle" onClick={toggleNav}>
                {isOpen ? <FaTimes /> : <FaBars />}
        </div>
     </div>
    </nav>
  )
}

export default Navbar