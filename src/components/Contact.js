import React from 'react';
import './styles/Contact.css';

function Contact() {
    return (
        <section id="contact" className="contact">
            <div className="contact-header">
                <h2>Contact</h2>
                <p>
                    Connect with me. If you want to know more about my work or would like to say hello, send me a message. 
                    I'd love to hear from you.
                </p>
            </div>
            <div className="contact-content">
                <form className="contact-form">
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" placeholder="Enter your name" />
                    
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" placeholder="Enter your email" />
                    
                    <label htmlFor="message">Message</label>
                    <textarea id="message" placeholder="Enter your message"></textarea>
                    
                    <button type="submit">Submit</button>
                </form>
                <div className="contact-details">
                    <div className="detail-item">
                        <h3>Email</h3>
                        <p><a href="mailto:timur.rakhimov.1@outlook.com">timur.rakhimov.1@outlook.com</a></p>
                    </div>
                    <div className="detail-item">
                        <h3>Address</h3>
                        <p>Kamloops, BC</p>
                    </div>
                    <div className="detail-item">
                        <h3>Social</h3>
                        <div className="social-icons">
                            <a href="https://github.com/TimurRakhimov" target="_blank" rel="noopener noreferrer">
                                <img src="github.png" alt="GitHub" />
                            </a>
                            <a href="https://www.linkedin.com/in/timur-rakhimovv" target="_blank" rel="noopener noreferrer">
                                <img src="linkedin.png" alt="LinkedIn" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Contact;
