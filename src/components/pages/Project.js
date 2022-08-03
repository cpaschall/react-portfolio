import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

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
                            <div className="card col-md-5 project-card" id={project.name}>
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
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

export default Project;