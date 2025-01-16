import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import '../styles/App.css';

const Projects = () => {
    return (
        <div className="projects">
            <p className="section-title" id="projects-title">Projects</p>
            <div className="projects-grid">
                <a href="https://github.com/adsepuri35/bLOCK" target="_blank" rel="noopener noreferrer" className="project-link">
                    <div className="project-item">
                        <div className="left-section">
                            <div className="project-name">bLOCK</div>
                            <div className="project-desc">Blockchain-enabled patent documentation system</div>
                        </div>
                        <div className="right-section">
                            <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="externalIcon"/>
                        </div>
                    </div>
                </a>
                <a href="https://github.com/adsepuri35/Prometheus_Exporter_for_ZeroMQ" target="_blank" rel="noopener noreferrer" className="project-link">
                    <div className="project-item">
                        <div className="left-section">
                            <div className="project-name">ScopeZMQ</div>
                            <div className="project-desc">C++ Prometheus exporter for ZeroMQ applications</div>
                        </div>
                        <div className="right-section">
                            <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="externalIcon"/>
                        </div>
                    </div>
                </a>
                <a href="https://github.com/adsepuri35/Partitioned_Memory_Peripheral" target="_blank" rel="noopener noreferrer" className="project-link">
                    <div className="project-item">
                        <div className="left-section">
                            <div className="project-name">VHDL Memory Peripheral</div>
                            <div className="project-desc">External RAM with kernel memory partitioning</div>
                        </div>
                        <div className="right-section">
                            <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="externalIcon"/>
                        </div>
                    </div>
                </a>
                <a href="https://github.com/adsepuri35/adaptive_options_trading_simulator" target="_blank" rel="noopener noreferrer" className="project-link">
                    <div className="project-item">
                        <div className="left-section">
                            <div className="project-name">Options Trading Simulator</div>
                            <div className="project-desc">Simulate options trading for variable-volatility markets</div>
                        </div>
                        <div className="right-section">
                            <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="externalIcon"/>
                        </div>
                    </div>
                </a>
                <a href="https://github.com/adsepuri35/ShakeSense" target="_blank" rel="noopener noreferrer" className="project-link">
                    <div className="project-item">
                        <div className="left-section">
                            <div className="project-name">ShakeSense</div>
                            <div className="project-desc">Wearable sensor to diagnose Parkinsonian tremors</div>
                        </div>
                        <div className="right-section">
                            <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="externalIcon"/>
                        </div>
                    </div>
                </a>
                <a href="https://github.com/adsepuri35/personal_website_3" target="_blank" rel="noopener noreferrer" className="project-link">
                    <div className="project-item">
                        <div className="left-section">
                            <div className="project-name">Personal Website v3.0</div>
                            <div className="project-desc">Portfolio detailing my experience and projects</div>
                        </div>
                        <div className="right-section">
                            <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="externalIcon"/>
                        </div>
                    </div>
                </a>
            </div>
        </div>
    );
};

export default Projects;