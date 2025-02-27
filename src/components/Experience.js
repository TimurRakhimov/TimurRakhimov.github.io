import React from 'react';
import './styles/Experience.css';

function Experience() {
    const experiences = [
        {
            role: "Project Manager",
            company: "Aparti.kz, Almaty, Kazakhstan",
            duration: "Oct 2023 - Feb 2025",
            logo: "aparti.png",
            responsibilities: [
                "Analyzed market trends and user needs to design a mobile app, resulting in a 25% increase in user engagement post-launch.",
                "Collaborated with stakeholders to gather business requirements and translated them into actionable technical specifications.",
                "Led a team of 7 developers and designers, achieving 100% on-time project delivery and staying within a $25,000 budget.",
                "Spearheaded the integration of 3 third-party services, reducing manual operational efforts by 45%.",
                "Conducted competitive analysis of three market leaders to inform product design, ensuring alignment with industry standards."
            ],
        },
        {
            role: 'Business Analyst Intern',
            company: 'Custom Ai Power, Vancouver, CA',
            duration: 'Jul 2023 - Sept 2023',
            logo: 'caip.png',
            responsibilities: [
                'Spearheaded the requirement gathering and documentation process for a lead generation solution, ensuring alignment with client needs and technical capabilities.',
                'Collaborated on the development of an email verification and bouncer tool by analyzing industry pain points, defining product features, and recommending enhancements.'
            ]
        }
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