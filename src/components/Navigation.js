import React from "react";
import '../styles/Navigation.css';


function Navigation() {
    return (
        <nav className="navbar navbar-expand-xl">
            <ul className="nav-links">
                {/* <li className="link-item">
                    <a href="#intro-top"><i className="fa-solid fa-house fa-xl"></i></a>
                </li>
                <li className="link-item">
                    <a href="#about-title"><i className="fa-solid fa-circle-question fa-xl"></i></a>
                </li>
                <li className="link-item">                
                    <a href="#project-title"><i className="fa-solid fa-code fa-xl"></i></a>
                </li>
                <li className="link-item">
                    <a href="#contact-title"><i className="fa-solid fa-envelope fa-xl"></i></a>
                </li> */}
                <ul className="nav-links">
                        <li className="link-item">
                            <a href="#intro-top">home</a>
                        </li>
                        <li className="link-item">
                            <a href="#about-title">about</a>
                        </li>
                        <li className="link-item">                
                            <a href="#project-title">projects</a>
                        </li>
                        <li className="link-item">
                            <a href="#contact-title">contact</a>
                        </li>
                    </ul>
            </ul>
            {/* <div className="menu-mobile">
                <div className="menu-icon">
                    <i className="fa-solid fa-bars fa-2xl menu"></i>
                </div>
                <div className="nav-links-mobile" data-mobile="hide">
                    <ul className="mobile-links">
                        <li className="link-item">
                            <a href="#intro-top">home</a>
                        </li>
                        <li className="link-item">
                            <a href="#about-title">about</a>
                        </li>
                        <li className="link-item">                
                            <a href="#project-title">projects</a>
                        </li>
                        <li className="link-item">
                            <a href="#contact-title">contact</a>
                        </li>
                    </ul>
                </div>
            </div> */}
        </nav>
    );
}

export default Navigation;