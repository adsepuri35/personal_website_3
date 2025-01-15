import React from 'react';
import '../styles/App.css';

const Intro = () => {
    return (
        <div className='intro'>
            <p>
                I'm a computer science student at <a href="https://www.cc.gatech.edu/" target = "_blank" rel="noopener noreferrer" className="gt-highlight">Georgia Tech</a> with concentrations in artificial intelligence and systems architecture.
                <br />
                <br />
                test
                <br />
                <br />
                Feel free to reach me at <a href="mailto:asepuri3@gatech.edu" className="gt-highlight">asepuri3@gatech.edu</a>
            </p>
        </div>
    );
};

export default Intro;