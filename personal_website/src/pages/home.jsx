import React from "react";
import { useState } from "react";
import '../styles/App.css';
import Title from '../components/title.jsx';
import Intro from '../components/intro.jsx';
import Experience from '../components/experience.jsx';


function Home() {
    return (
        <div class="home">
            <Title />
            <Intro />
            <Experience />
        </div>
    );
}

export default Home;