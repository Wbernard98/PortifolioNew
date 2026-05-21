import React from "react";
import { DEVELOPER } from "../data/developerData";
import codeSVG from "@/components/Icons/code.svg";
import ideaSvg from "@/components/Icons/idea.svg";
import rocketSvg from "@/components/Icons/rocket.svg";

export default function AboutSection() {
  const features = [
    {
      title: "Clean Code",
      desc: "Código limpo, legível e manutenível seguindo as melhores práticas de desenvolvimento.",
      classType: "feature-clean-code",
      iconSrc: codeSVG,
      themeColor: "#CC6699", 
    },
    {
      title: "Aprendizado Contínuo",
      desc: "Sempre explorando novas tecnologias e tendências do desenvolvimento web moderno.",
      classType: "feature-learning",
      iconSrc: ideaSvg,
      themeColor: "#6DB33F", 
    },
    {
      title: "Interfaces Modernas",
      desc: "Criação de experiências web responsivas e intuitivas que encantam usuários.",
      classType: "feature-interfaces",
      themeColor: "#06B6D4", 
      iconSrc: rocketSvg,
    },
  ];

  return (
    <section id="sobre" className="portfolio-section about-section">
      <h2 className="section-title">Sobre mim</h2>

      <div className="about-flex">
        <div className="about-text">
          <p className="about-p">{DEVELOPER.bio1}</p>
          <p className="about-p">{DEVELOPER.bio2}</p>
          <p className="about-p">{DEVELOPER.bio3}</p>
        </div>

        <div className="about-cards">
          {features.map((card) => (
            <div
              key={card.title}
              className={`about-feature-card ${card.classType}`}
              style={{ "--card-theme": card.themeColor }} 
            >
              <div className="feature-icon-wrapper">
                <img src={card.iconSrc} alt={card.title} className="feature-svg-icon" />
              </div>
              <div className="feature-content">
                <h3 className="feature-title">{card.title}</h3>
                <p className="feature-desc">{card.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}