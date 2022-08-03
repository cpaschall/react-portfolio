import React from "react";
// import '../styles/style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faCode, faFile, faEnvelope} from '@fortawesome/free-solid-svg-icons'


function Navigation({ currentPage, handlePageChange }) {
    return (
        <nav className="navbar navbar-expand-xl">
            <ul className="nav-links">
                <ul className="nav-links">
                        <li className="link-item">
                            <a 
                            href="#intro-top"
                            onClick={() => handlePageChange('Header')}
                            className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'}
                            >
                                <span className="desktop-nav">home</span>
                                <span className="mobile-nav">
                                    <FontAwesomeIcon icon={faHome} className="fa-solid fa-xl"/> 
                                </span>
                            </a>
                        </li>
                        <li className="link-item">
                            <a 
                            href="#about"
                            onClick={() => handlePageChange('About')}
                            className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
                            >
                                <span className="desktop-nav">about</span>
                                <span className="mobile-nav">
                                    <FontAwesomeIcon icon={faUser} className="fa-solid fa-xl"/> 
                                </span>
                            </a>
                        </li>
                        <li className="link-item">                
                            <a 
                            href="#projects"
                            onClick={() => handlePageChange('Project')}
                            className={currentPage === 'Project' ? 'nav-link active' : 'nav-link'}
                            >
                                <span className="desktop-nav">projects</span>
                                <span className="mobile-nav">
                                    <FontAwesomeIcon icon={faCode} className="fa-solid fa-xl"/> 
                                </span>
                            </a>
                        </li>
                        <li className="link-item">
                            <a 
                            href="#resume"
                            onClick={() => handlePageChange('Resume')}
                            className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
                            >
                                <span className="desktop-nav">resume</span>
                                <span className="mobile-nav">
                                    <FontAwesomeIcon icon={faFile} className="fa-solid fa-xl"/> 
                                </span>
                            </a>
                        </li>
                            <li className="link-item">
                            <a 
                            href="#contact"
                            onClick={() => handlePageChange('Contact')}
                            className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
                            >
                                <span className="desktop-nav">contact me</span>
                                <span className="mobile-nav">
                                    <FontAwesomeIcon icon={faEnvelope} className="fa-solid fa-xl"/> 
                                </span>
                            </a>
                        </li>
                    </ul>
            </ul>
        </nav>
    );
}

export default Navigation;