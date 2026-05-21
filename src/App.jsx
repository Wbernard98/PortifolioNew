import React, { useState, useEffect } from "react";
import "./styles/global.css"; 
import { NAV_LINKS } from "./data/developerData";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import HeroSection from "./sections/HeroSection";
import AboutSection from "./sections/AboutSection";
import SkillsSection from "./sections/SkillsSection";
import ProjectsSection from "./sections/ProjectsSection";
import ContactSection from "./sections/ContactSection";

export default function Portfolio() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("inicio");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
      
      for (const id of [...NAV_LINKS].reverse()) {
        const element = document.getElementById(id);
        if (element && element.getBoundingClientRect().top <= 100) {
          setActive(id);
          break;
        }
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="portfolio-layout">
      
      <div className="bg-blobs-container">
        <div className="blob-primary" />
        <div className="blob-secondary" />
      </div>

      <Navbar scrolled={scrolled} active={active} />

      <main className="main-content">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
}