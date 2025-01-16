import React from 'react';
import { FaLinkedin, FaGithub} from 'react-icons/fa';
import '../styles/App.css';

const Title = () => {
    return (
        <div className="title-container">
            <div className='name'>Advait Sepuri</div>
            <div className="icons">
                <a href="https://www.linkedin.com/in/advait-sepuri/" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin />
                </a>
                <a href="https://github.com/adsepuri35" target="_blank" rel="noopener noreferrer">
                    <FaGithub />
                </a>
            </div>
        </div>
    );
};

export default Title;