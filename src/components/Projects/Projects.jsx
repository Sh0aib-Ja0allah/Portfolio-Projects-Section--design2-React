import React from 'react';
import '../Projects/Projects.css';
import {ProjectsData} from "./ProjectsData";

function Projects() {
    return (
    <div className="Projects" id='projects'>
        <div className="ProjectsChild">
            <h1 className="ProjectsTitle">Portfolio</h1>
        </div>
        <div className="ProjectsChild">
            <div className="ProjectsList">
                {ProjectsData.map((project, item) => (
                                    <div className="project">
                                    <img className="projectImage" src={project.image} alt={project.alt} />
                                    <div className="ProjectDetails">
                                        <div className="name">
                                            <h2 className="projectName">
                                                {project.title}
                                            </h2>
                                        </div>
                                        <div className="projectDescription">
                                            {project.description}
                                        </div>
                                        <div className="LinkDate">
                                            <div className="ProjectDate">
                                                {project.date}
                                            </div>
                                            <a href={project.button1Source} className="link">
                                            {project.button1Text}
                                            </a>
                                            <a href={project.button2Source} className="link">
                                            {project.button2Text}
                                            </a>
                                        </div>
                                    </div>
                                </div>
                ))}
            </div>
        </div>
    </div>
    )
}

export default Projects
