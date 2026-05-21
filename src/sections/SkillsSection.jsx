import React from "react";
import { SKILLS } from "../data/developerData";
import SkillCard from "../components/SkillCard";

export default function SkillsSection() {
  return (
    <section id="habilidades" className="portfolio-section skills-section">
      <h2 className="section-title">Habilidades</h2>
      <p className="section-subtitle">Tecnologias que utilizo no dia a dia</p>
      
      <div className="skills-grid">
        {SKILLS.map((skill) => (
          <SkillCard key={skill.name} skill={skill} />
        ))}
      </div>
    </section>
  );
}