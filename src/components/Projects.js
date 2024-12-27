import React from 'react';
import './styles/Projects.css';

function Projects() {
    const projects = [
        {
            title: "Foreign Object Detection in Mining",
            description: "Developed a YOLOv8 model to detect foreign objects in mining environments with a 92% True Positive Rate.",
            image: "yolo.png",
            link: "https://drive.google.com/file/d/1JcOPsMcyBvVGWUHoy7ofv1dCEXk0HECd/view?usp=sharing",
        },
        {
            title: "Laptop Pricing Prediction",
            description: "Implemented a machine learning model to predict laptop prices based on specifications and market trends.",
            image: "ml.png",
            link: "https://github.com/TimurRakhimov/LaptopPricing",
        },
        {
            title: "Personal Portfolio Website",
            description: "Designed and developed a responsive portfolio website to showcase my projects and skills using React.",
            image: "portfolio.png",
            link: "https://github.com/TimurRakhimov/TimurRakhimov.github.io",
        },
        {
            title: "Course Selection Website",
            description: "A dynamic web application enabling user registration, login, and personalized course management using MongoDB, Express, Angular, and Node.js.",
            image: "course.png",
            link: "https://github.com/TimurRakhimov/CourseSelector",
        },
        {
            title: "To-Do List App",
            description: "A task management application built using Django, featuring user authentication, task categorization, and CRUD functionality.",
            image: "django.png",
            link: "https://github.com/TimurRakhimov/DjangoToDoApp",
        }
    ];

    return (
        <section id="projects" className="projects">
            <div className="section-header">
                <h2>What I Built</h2>
            </div>
            <div className="project-list">
                {projects.map((project, index) => (
                    <div className="project-card" key={index}>
                        <img src={project.image} alt={project.title} className="project-image" />
                        <div className="project-content">
                            <h3>{project.title}</h3>
                            <p>{project.description}</p>
                            <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
                                Read more →
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Projects;