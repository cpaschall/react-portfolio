import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { OverlayTrigger, Tooltip, Popover, Collapse } from 'react-bootstrap';
import cn from "classnames";

function Project({projects}) {
    return (
        
        <section className="container-fluid projects" id="projects">
            <div>
            <h2 id="project-title">projects</h2>
            </div>
            <div className="project-expand" data-projects="hide">
                <div className="row project-examples">
                    {projects.map((project) => {
                        return (
                            <div className="flip-card-outer col-md-5">
                                <div className={cn("flip-card-inner", { "hover-trigger": project.variant === "hover"})}>
                                    <div className="card front">
                                        <div className="card-body" id={project.id}>
                                            <p className="front-text">{project.name}</p>
                                        </div>
                                    </div>
                                    <div className="card back">
                                        <div className="card-title">
                                            <a
                                                className="project-link"
                                                href={project.deployment}
                                                alt={project.alt}
                                                > 
                                                <span>{project.name}</span>
                                                </a>
                                                <a className="project-link" href={project.git}>
                                                <FontAwesomeIcon icon={['fab', 'github-alt']}className="repo-icon"/>
                                            </a>

                                        </div>
                                        <div id="project-desc">
                                            {project.desc}
                                        </div>
                                        <div id="project-tech">
                                            <h5>Technologies Used</h5>
                                            <div>{project.tech}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

export default Project;