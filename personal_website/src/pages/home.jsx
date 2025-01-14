import React from "react";
import { useState } from "react";
import '../styles/App.css';
import Title from '../components/title.jsx';
import Intro from '../components/intro.jsx';

function Home() {
    return (
        <div class="home">
            <Title />
            <Intro />
        </div>
    );
}

export default Home;