// Hero.js

import React from 'react';
import './styles/Hero.css';

function Hero() {
    return (
        <section id="hero" className="hero">
            <div className="hero-content">
                <div className="hero-text">
                    <h1>Hi, I am Timur Rakhimov</h1>
                    <h2><span className="highlight">Software Developer | Machine Learning Enthusiast</span></h2>
                    <p>
                        I'm a Computing Science graduate passionate about delivering innovative solutions 
                        in software development, machine learning, and beyond.
                    </p>
                    <div className="hero-links">
                        <a href="https://github.com/TimurRakhimov" target="_blank" rel="noopener noreferrer">
                            <img src="github.png" alt="GitHub" />
                        </a>
                        <a href="https://www.linkedin.com/in/timur-rakhimovv" target="_blank" rel="noopener noreferrer">
                            <img src="linkedin.png" alt="LinkedIn" />
                        </a>
                    </div>
                    <a href="Timur Rakhimov Resume.pdf" className="hero-button">Resume</a>
                </div>
                <div className="hero-image">
                    <img src="./me.png" alt="Timur Rakhimov" />
                </div>
            </div>
        </section>
    );
}

export default Hero;
