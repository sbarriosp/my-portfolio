import {Link, NavLink} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faClose, faEnvelope, faHome, faSuitcase, faUser } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faInstagram, faLinkedin, faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import './index.scss'
import LogoS from '../../assets/images/logo-s.jpg'
import LogoSubtitle from '../../assets/images/logo_sub.png'
import { useState } from 'react'

const Sidebar = () => {
    const [showNav, setShowNav] = useState(false);
  
    return (
        <div className='nav-bar'>
            <Link className='logo' to='/' onClick={()=>setShowNav(false)}>
                <img src={LogoS} alt ="logo" />
                <img className='sub-logo' src={LogoSubtitle} alt ="sebastian" /> {/*this slobodan is the logo of the instructor, change it after finish this work*/}
            </Link>

            <nav className={showNav ? 'mobile-show' : ''}>
                <NavLink exact="true" activeclassname="active" to="/" onClick={() => setShowNav(false)}>
                    <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
                </NavLink>

                <NavLink activeclassname="active" className="about-link" to="/about" onClick={() => setShowNav(false)}>
                    <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
                </NavLink>

                <NavLink activeclassname="active" className="contact-link" to="/contact" onClick={() => setShowNav(false)}>
                    <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
                </NavLink>

                <NavLink activeclassname="active" className="portfolio-link" to="/portfolio" onClick={() => setShowNav(false)}>
                    <FontAwesomeIcon icon={faSuitcase} color="#4d4d4e" />
                </NavLink>

                <FontAwesomeIcon onClick={() => setShowNav(false)} icon={faClose} color="#00ffff" size='3x' className='close-icon'/>
            </nav>  
            
            <ul >
                <li>
                    <a target="_blank" rel='noreferrer' href='https://www.linkedin.com/in/sebastianbarriospoveda/'>
                        <FontAwesomeIcon onClick={() => setShowNav(false)} icon={faLinkedin} color="#4d4d4e" />
                    </a>
                </li>

                <li>
                    <a target="_blank" rel='noreferrer' href='https://github.com/sbarriosp'>
                        <FontAwesomeIcon onClick={() => setShowNav(false)} icon={faGithub} color="#4d4d4e" />
                    </a>
                </li>

                <li>
                    <a target="_blank" rel='noreferrer' href='https://wa.me/573208942725'>
                        <FontAwesomeIcon onClick={() => setShowNav(false)} icon={faWhatsapp} color="#4d4d4e" />
                    </a>
                </li>

                <li>
                    <a target="_blank" rel='noreferrer' href='https://www.instagram.com/sbarriosp/'>
                        <FontAwesomeIcon onClick={() => setShowNav(false)} icon={faInstagram} color="#4d4d4e" />
                    </a>
                </li>
            </ul>
            
            
            <FontAwesomeIcon onClick={() => setShowNav(true)} icon={faBars} color="#00ffff" size='3x' className='hamburger-icon'/>
        </div>
    )
}
export default Sidebar;