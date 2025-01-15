import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import '../styles/App.css';

const Projects = () => {
    return (
        <div className="projects">
            <p className="section-title">Projects</p>
            <div className="projects-grid">
                <div className="project-item">
                    <div className="left-section">Left 1</div>
                    <div className="right-section">
                        <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                    </div>
                </div>
                <div className="project-item">
                    <div className="left-section">Left 2</div>
                    <div className="right-section">
                        <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                    </div>
                </div>
                <div className="project-item">
                    <div className="left-section">Left 3</div>
                    <div className="right-section">
                        <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                    </div>
                </div>
                <div className="project-item">
                    <div className="left-section">Left 4</div>
                    <div className="right-section">
                        <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                    </div>
                </div>
                <div className="project-item">
                    <div className="left-section">Left 5</div>
                    <div className="right-section">
                        <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                    </div>
                </div>
                <div className="project-item">
                    <div className="left-section">Left 6</div>
                    <div className="right-section">
                        <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;