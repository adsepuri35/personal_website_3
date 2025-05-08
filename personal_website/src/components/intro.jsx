import React from 'react';
import '../styles/App.css';

const Intro = () => {
    return (
        <div className='intro'>
            <p>
                Hi! I'm a computer science student at <a href="https://www.cc.gatech.edu/" target = "_blank" rel="noopener noreferrer" className="gt-highlight">Georgia Tech</a> with concentrations in artificial intelligence and systems architecture.
                <br />
                <br />
                My current interests include high-performance computing, machine learning, and distributed systems. I also conduct research involving SAT solvers and advanced reinforcement models.
                <br />
                <br />
                For fun, I enjoy bouldering, rolling on jiujitsu mats, everything baseball, and spending time with my family and friends!
                <br />
                <br />
                Feel free to reach me at <a href="mailto:sepuri@gatech.edu" className="gt-highlight">sepuri@gatech.edu</a>.
            </p>
        </div>
    );
};

export default Intro;