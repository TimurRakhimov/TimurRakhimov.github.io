import React from 'react';
import './styles/Contact.css';

function Contact() {
    return (
        <section id="contact" className="contact-section">
            <h2 className="section-title">Contact</h2>
            <p className="contact-description">
                If you'd like to get in touch, feel free to reach out via email or connect with me on social platforms. 
                Here’s a little about me: I’m from Almaty, Kazakhstan, and have a deep passion for software development 
                and machine learning. In my free time, I enjoy playing football, exploring nature, and watching new films. 
                I’m also an avid reader, with a special interest in technology and personal development.
            </p>
            <div className="contact-info">
                <div className="contact-item">
                    <h3>Email</h3>
                    <p><a href="mailto:timur.rakhimov1@outlook.com">timur.rakhimov.1@outlook.com</a></p>
                </div>
                <div className="contact-item">
                    <h3>Social</h3>
                    <div className="contact-social-icons">
                        <a href="https://github.com/TimurRakhimov" target="_blank" rel="noopener noreferrer">
                            <img src="github.png" alt="GitHub" />
                        </a>
                        <a href="https://www.linkedin.com/in/timur-rakhimovv" target="_blank" rel="noopener noreferrer">
                            <img src="linkedin.png" alt="LinkedIn" />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Contact;
