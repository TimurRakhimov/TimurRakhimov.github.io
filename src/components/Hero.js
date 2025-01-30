import React, { useState, useEffect } from 'react';
import './styles/Hero.css';

function Hero() {
    const roles = ["Software Developer", "Machine Learning Enthusiast"];
    const [currentText, setCurrentText] = useState("S"); // Start with the first letter
    const [isDeleting, setIsDeleting] = useState(false);
    const [roleIndex, setRoleIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(1); // Start after the first letter
    const [typingSpeed, setTypingSpeed] = useState(150); // Typing speed

    useEffect(() => {
        const handleTyping = () => {
            const currentRole = roles[roleIndex];

            if (!isDeleting) {
                // Typing text
                setCurrentText(currentRole.slice(0, charIndex + 1));
                setCharIndex((prev) => prev + 1);

                if (charIndex === currentRole.length) {
                    setIsDeleting(true);
                    setTypingSpeed(100); // Pause before deleting
                }
            } else {
                // Erasing text, keeping the first letter
                setCurrentText(currentRole[0] + currentRole.slice(1, charIndex - 1));
                setCharIndex((prev) => prev - 1);

                if (charIndex === 1) {
                    setIsDeleting(false);
                    setRoleIndex((prev) => (prev + 1) % roles.length); // Move to next role
                    setTypingSpeed(150); // Resume typing speed
                }
            }
        };

        const timer = setTimeout(handleTyping, isDeleting ? 50 : typingSpeed); // Faster erasing speed
        return () => clearTimeout(timer);
    }, [charIndex, isDeleting, roleIndex, roles, typingSpeed]);

    return (
        <section id="hero" className="hero">
            <div className="hero-content">
                <div className="hero-text">
                    <h1>Hi, I am Timur Rakhimov</h1>
                    <h2>
                        <span className="highlight">{currentText}</span>
                    </h2>
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
                </div>
                {/*<div className="hero-image">
                    <img src="./me.png" alt="Timur Rakhimov" />
                </div> */}
            </div>
        </section>
    );
}

export default Hero;
