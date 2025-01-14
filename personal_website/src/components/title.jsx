import React from 'react';
import { FaLinkedin, FaGithub} from 'react-icons/fa';
import '../styles/App.css';

const Title = () => {
    return (
        <div className="title-container">
            <div className='name'>Advait Sepuri</div>
            <div className="icons">
                <FaLinkedin />
                <FaGithub />
            </div>
        </div>
    );
};

export default Title;