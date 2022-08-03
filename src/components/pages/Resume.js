import React from "react";
import pdf from "../../assets/other/TechResume.pdf"

function Resume (currentPage) {

    return (
        <section className="container-fluid resume" id="resume">
        <h2 id="resume-title">resume</h2>
            <div className="row resume-row" data-about="hide">
                <div className="resume-summary">
                    <p id="email-addr">
                        email me @ <span>cpaschall0105@gmail.com</span>
                    </p>
                    <p>Download my full resume <a id="resume-link" href={pdf}>HERE</a></p>
                    <p id="resume-intro">
                        Full Stack Web Developer with a background in health care. Trained at the University of Pennsylvania Coding Bootcamp and earned a Certificate in Full Stack Web Development. Innovative problem-solver passionate about creating applications designed for optimal UX; focused on mobile-first design and development. Strengths in creativity, teamwork, leadership and building projects from conception to execution. Eager to apply skills within a dedicated and creative team with the goal of creating a quality user experience.
                    </p>
                    <div id="tech-skills">
                        <h2>Technical Skills</h2>
                        <div id="skill-fs">
                            <div className="skills">
                                <h4>Frontend</h4>
                                <ul>
                                    <li>
                                        Javascript
                                    </li>
                                    <li>
                                        React
                                    </li>
                                    <li>
                                        Bootstrap
                                    </li>
                                    <li>
                                        HTML5
                                    </li>
                                    <li>
                                        CSS
                                    </li>
                                    <li>
                                        JQuery
                                    </li>
                                    <li>
                                        AJAX
                                    </li>
                                    <li>
                                        Python
                                    </li>
                                </ul>
                            </div>
                            <div className="skills">
                                <h4>Backend</h4>
                                <ul>
                                    <li>
                                        Express
                                    </li>
                                    <li>
                                        Node
                                    </li>
                                    <li>
                                        MySql
                                    </li>
                                    <li>
                                        MongoDB
                                    </li>
                                    <li>
                                        Sequelize
                                    </li>
                                    <li>
                                        Flask
                                    </li>
                                </ul>
                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Resume;