import React from "react";
import { PROJECTS } from "../data/developerData";
import ProjectCard from "../components/ProjectCard";

export default function ProjectsSection() {
  return (
    <section id="projetos" className="portfolio-section projects-section">
      <h2 className="section-title">Projetos</h2>
      <p className="section-subtitle">Alguns dos meus trabalhos recentes</p>
      
      <div className="projects-grid">
        {PROJECTS.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}