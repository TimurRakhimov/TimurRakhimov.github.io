import React from 'react';
import './styles/Experience.css';

function Experience() {
    const experiences = [
        {
            role: "Project Manager",
            company: "Aparti.kz, Almaty, Kazakhstan",
            duration: "October 2023 - Present",
            logo: "aparti.png",
            responsibilities: [
                "Managed a team of developers and designers, ensuring timely delivery within budget.",
                "Integrated third-party services like payment solutions, Yandex Maps, and document verification.",
                "Developed app wireframes and handled app store submissions.",
            ],
        },
    ];

    return (
        <section id="experience" className="experience">
            <div className="section-header">
                <h2>Experience</h2>
                <p>Roles and responsibilities I have taken on</p>
            </div>
            <div className="experience-list">
                {experiences.map((exp, index) => (
                    <div className="experience-card" key={index}>
                        <div className="experience-header">
                            <img src={exp.logo} alt={`${exp.company} logo`} className="company-logo" />
                            <div>
                                <h3>{exp.role}</h3>
                                <p className="company">
                                    {exp.company} <span className="duration">({exp.duration})</span>
                                </p>
                            </div>
                        </div>
                        <ul>
                            {exp.responsibilities.map((item, idx) => (
                                <li key={idx}>{item}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Experience;