import React from "react";
import { DEVELOPER } from "../data/developerData";

export default function CodeCard() {
  return (
    <div className="code-card">
      <div className="code-dots">
        <div className="dot dot-red" />
        <div className="dot dot-yellow" />
        <div className="dot dot-green" />
      </div>
      <pre className="code-content">
        <span style={{ color: "#79C0FF" }}>const</span>
        <span style={{ color: "#CDD9E5" }}> developer </span>
        <span style={{ color: "#FF7B72" }}>=</span>
        <span style={{ color: "#CDD9E5" }}> {"{"}</span>{"\n"}
        {"  "}<span style={{ color: "#CDD9E5" }}>name: </span>
        <span style={{ color: "#A5D6FF" }}>'{DEVELOPER.name}'</span><span style={{ color: "#CDD9E5" }}>,</span>{"\n"}
        {"  "}<span style={{ color: "#CDD9E5" }}>role: </span>
        <span style={{ color: "#A5D6FF" }}>'Front-End Developer'</span><span style={{ color: "#CDD9E5" }}>,</span>{"\n"}
        {"  "}<span style={{ color: "#CDD9E5" }}>skills: [</span>{"\n"}
        {"    "}<span style={{ color: "#A5D6FF" }}>'React'</span><span style={{ color: "#CDD9E5" }}>,</span>{"\n"}
        {"    "}<span style={{ color: "#A5D6FF" }}>'Java'</span><span style={{ color: "#CDD9E5" }}>,</span>{"\n"}
        {"    "}<span style={{ color: "#A5D6FF" }}>'JavaScript'</span>{"\n"}
        {"  "}<span style={{ color: "#CDD9E5" }}>]</span>{"\n"}
        <span style={{ color: "#CDD9E5" }}>{"}"}</span>
      </pre>
    </div>
  );
}