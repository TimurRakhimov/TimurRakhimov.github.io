import React from 'react';
import './styles/Skills.css';

function Skills() {
    const skills = [
        {
            category: "Programming Languages",
            description: "Proficient in writing efficient and maintainable code across various platforms",
            items: ["Java", "C++", "Python"]
        },
        {
            category: "Web Development",
            description: "Building responsive and dynamic websites with modern technologies",
            items: ["HTML", "CSS", "JavaScript", "Django", "AJAX", "PHP"]
        },
        {
            category: "Machine Learning & AI",
            description: "Developing data-driven models and systems for innovative solutions",
            items: ["YOLOv8", "Scikit-learn", "Matplotlib"]
        },
        {
            category: "Databases",
            description: "Designing and managing structured and unstructured databases",
            items: ["PostgreSQL", "MongoDB"]
        },
        {
            category: "Tools & Frameworks",
            description: "Efficient in using tools and frameworks to streamline development",
            items: ["Git", "React", "Flutter"]
        }
    ];

    return (
        <section id="skills" className="skills">
            <div className="section-header">
                <h2>Skills & Expertise</h2>
                <p>Here are some of the technical skills and tools I excel in</p>
            </div>
            <div className="skills-list">
                {skills.map((skill, index) => (
                    <div className="skills-card" key={index}>
                        <h3>{skill.category}</h3>
                        <p>{skill.description}</p>
                        <div className="skill-items">
                            {skill.items.map((item, idx) => (
                                <span key={idx} className="skill-item">{item}</span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Skills;