import React from 'react';

function Project({projects}) {
    return (
        
        <section class="container-fluid projects">
            <h2 id="project-title">projects</h2>
            <div class="project-expand" data-projects="hide">
                <div class="row project-examples">
                    {projects.map((project) => {
                        return (
                            <div className="card col-md-5 project-card" id={project.name}>
                                <a
                                class="project-link"
                                href={project.deployment}
                                alt={project.alt}
                                >
                                <span>{project.name}</span>
                                </a>
                                <a class="project-link" href={project.git}>
                                <i class="fa-brands fa-github-alt fa-xl repo-icon"></i>
                                </a>
                            </div>

                        )
                    })}
                    
                    {/* <div class="card col-md-5 project-card" id="codeop">
                        <a
                        class="project-link"
                        href="https://codeop2.herokuapp.com/"
                        alt="codeop webpage"
                        >
                        <span>codeOp</span>
                        </a>
                        <a class="project-link" href="https://github.com/cpaschall/codeOp">
                        <i class="fa-brands fa-github-alt fa-xl repo-icon"></i>
                        </a>
                    </div>
                    <div class="card col-md-5 project-card" id="codequiz">
                        <a
                        class="project-link"
                        href="https://cpaschall.github.io/code-quiz/"
                        alt="code quiz webpage"
                        >
                        <span id="">code quiz</span>
                        </a>
                        <a
                        class="project-link"
                        href="https://github.com/cpaschall/code-quiz"
                        alt="code quiz repo"
                        >
                        <i class="fa-brands fa-github-alt fa-xl repo-icon"></i>
                        </a>
                    </div>
                    <div class="card col-md-5 project-card" id="weather-dash">
                        <a
                        class="project-link"
                        href="https://cpaschall.github.weather-dashboard/"
                        alt="weather dashboard gif"
                        >
                        <span id="">weather dashboard</span>
                        </a>
                        <a
                        class="project-link"
                        href="https://github.com/cpaschall/weather-dashboard"
                        alt="weather dash repo"
                        >
                        <i class="fa-brands fa-github-alt fa-xl repo-icon"></i>
                        </a>
                    </div>
                    <div class="card col-md-5 project-card" id="note-taker">
                        <a
                        class="project-link"
                        href="https://note-taker-expr-server.herokuapp.com/"
                        alt="note taker gif"
                        >
                        <span id="">note taker</span>
                        </a>
                        <a
                        class="project-link"
                        href="https://github.com/cpaschall/note-taker-expr"
                        alt="note taker repo"
                        >
                        <i class="fa-brands fa-github-alt fa-xl repo-icon"></i>
                        </a>
                    </div>
                    <div class="card col-md-5 project-card" id="scheduler">
                        <a
                        class="project-link"
                        href="https://cpaschall.github.io/workday-scheduler/"
                        alt="scheduler gif"
                        >
                        <span id="">scheduler</span>
                        </a>
                        <a
                        class="project-link"
                        href="https://github.com/cpaschall/workday-scheduler"
                        alt="scheduler repo"
                        >
                        <i class="fa-brands fa-github-alt fa-xl repo-icon"></i>
                        </a>
                    </div>
                    <div class="card col-md-5 project-card" id="pwgen">
                        <a
                        class="project-link"
                        href="https://cpaschall.github.io/password-generator/"
                        alt="pw gen png"
                        >
                        <span id="rotate-0">password generator</span>
                        </a>
                        <a
                        class="project-link"
                        href="https://github.com/cpaschall/password-generator"
                        alt="pw gen repo"
                        >
                        <i class="fa-brands fa-github-alt fa-xl repo-icon"></i>
                        </a>
                    </div> */}
                </div>
            </div>
        </section>
    )
}

export default Project;