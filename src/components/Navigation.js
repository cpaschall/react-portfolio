import React from "react";
// import '../styles/style.css';


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
                            >home</a>
                        </li>
                        <li className="link-item">
                            <a 
                            href="#about"
                            onClick={() => handlePageChange('About')}
                            className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
                            >about</a>
                        </li>
                        <li className="link-item">                
                            <a 
                            href="#projects"
                            onClick={() => handlePageChange('Project')}
                            className={currentPage === 'Project' ? 'nav-link active' : 'nav-link'}
                            >projects</a>
                        </li>
                        <li className="link-item">
                            <a 
                            href="#contact"
                            onClick={() => handlePageChange('Contact')}
                            className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
                            >contact</a>
                        </li>
                    </ul>
            </ul>
        </nav>
    );
}

export default Navigation;