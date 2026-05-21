import React, { useState } from "react";

export default function SkillCard({ skill }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: hovered ? "rgba(124,58,237,0.12)" : "rgba(255,255,255,0.03)",
        border: `1px solid ${hovered ? "rgba(124,58,237,0.5)" : "rgba(255,255,255,0.07)"}`,
        borderRadius: 12,
        padding: "2rem 1rem",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "0.75rem",
        cursor: "default",
        transition: "all 0.25s ease",
        transform: hovered ? "translateY(-4px)" : "none",
        boxShadow: hovered ? `0 12px 30px -8px rgba(124,58,237,0.3)` : "none",
      }}
    >
      <div style={{ 
        display: "flex", 
        alignItems: "center", 
        justifyContent: "center", 
        width: 40, 
        height: 40 
      }}>
        {skill.icon}
      </div>

      <span style={{
        fontFamily: "'Inter', sans-serif",
        fontSize: "0.9rem",
        fontWeight: 500,
        color: hovered ? "#fff" : "rgba(255,255,255,0.7)",
        transition: "color 0.2s",
      }}>{skill.name}</span>
    </div>
  );
}