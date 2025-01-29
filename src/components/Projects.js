import React, { useState } from 'react';
import './styles/Projects.css';

function Projects() {
    const projects = [
        {
            title: "Foreign Object Detection in Mining",
            description: "Developed a YOLOv8 model to detect foreign objects in mining environments with a 92% True Positive Rate.",
            image: "yolo.png",
            link: "",
            category: "Computer Vision",
        },
        {
            title: "Laptop Pricing Prediction",
            description: "Implemented a machine learning model to predict laptop prices based on specifications and market trends.",
            image: "ml.png",
            link: "https://github.com/TimurRakhimov/LaptopPricing",
            category: "Machine Learning",
        },
        {
            title: "Personal Portfolio Website",
            description: "Designed and developed a responsive portfolio website to showcase my projects and skills using React.",
            image: "portfolio.png",
            link: "https://github.com/TimurRakhimov/TimurRakhimov.github.io",
            category: "Web",
        },
        {
            title: "Course Selection Website",
            description: "A dynamic web application enabling user registration, login, and personalized course management using MongoDB, Express, Angular, and Node.js.",
            image: "course.png",
            link: "https://github.com/TimurRakhimov/CourseSelector",
            category: "Web",
        },
        {
            title: "To-Do List App",
            description: "A task management application built using Django, featuring user authentication, task categorization, and CRUD functionality.",
            image: "django.png",
            link: "https://github.com/TimurRakhimov/DjangoToDoApp",
            category: "Web",
        },
        {
            title: "Football Stats Web App",
            description: "Designed and developed a responsive web app using React, Redux, and Axios to display football team statistics.",
            image: "rm.png",
            link: "https://github.com/TimurRakhimov/FotballStats",
            category: "Web",
        },
        {
            title: 'Biodiversity Analysis',
            description: 'Conducted an in-depth analysis of species conservation statuses and biodiversity across parks using Python, identifying critical ecological trends and hotspots.',
            image: 'bio.png',
            link: 'https://github.com/TimurRakhimov/Biodiversity',
            category: 'Data Analysis'
        },
        {
            title: 'Deadly Volcanoes Analysis',
            description: 'Conducted a comprehensive analysis of 836 historical volcanic eruptions using Tableau. Visualized critical trends, including fatalities, economic damages, and eruption types, to identify the deadliest volcanoes and their global impacts.',
            image: 'volcano.png',
            link: 'https://public.tableau.com/app/profile/timur.rakhimov/viz/Volcanoes_17379347686560/Dashboard1',
            category: 'Data Analysis'
        },
        {
            title: 'Trees and Income in Metro NYC',
            description: 'Merged and analyzed three datasets (totaling over 683,000 records) using Tableau to explore the relationship between tree health, density, and income distribution across NYC boroughs. Generated visualizations to highlight disparities in tree health and concentration between affluent and underprivileged areas.',
            image: 'tree.png',
            link: 'https://public.tableau.com/app/profile/timur.rakhimov/viz/NYCTreeCensus_17378457227140/Dashboard1',
            category: 'Data Analysis'
        },
        {
            title: 'Airplane-Wildlife Collisions 2001-2015',
            description: 'Analyzed data on airplane-wildlife collisions across U.S. airports using Tableau, focusing on economic losses and collision frequencies. Created visualizations to highlight the financial impact and distribution of collisions by species and airport rank.',
            image: 'airport.png',
            link: 'https://public.tableau.com/app/profile/timur.rakhimov/viz/Collisions_17381265680190/Dashboard1',
            category: 'Data Analysis'
        }
    ];

    const [selectedCategory, setSelectedCategory] = useState("All");

    const categories = ["All", "Machine Learning", "Computer Vision", "Web", "Data Analysis"];

    const filteredProjects = selectedCategory === "All"
        ? projects
        : projects.filter(project => project.category === selectedCategory);

    return (
        <section id="projects" className="projects">
            <div className="section-header">
                <h2>What I Built</h2>
            </div>
            <div className="categories">
                {categories.map((category, index) => (
                    <button
                        key={index}
                        className={`category-button ${selectedCategory === category ? "active" : ""}`}
                        onClick={() => setSelectedCategory(category)}
                    >
                        <span>{category}</span>
                    </button>
                ))}
            </div>
            <div className="project-list">
                {filteredProjects.map((project, index) => (
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
