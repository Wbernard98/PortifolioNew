import React from "react";

export default function ContactCard({ icon, title, sub, value, color, href }) {
  return (
    <a href={href} className="contact-card-link">
      <div className="contact-card-flex">
        <div className="contact-icon-box" style={{
          background: `${color}22`,
          border: `1px solid ${color}44`
        }}>{icon}</div>
        <div>
          <div className="contact-meta-title">{title}</div>
          <div className="contact-meta-sub">{sub}</div>
        </div>
      </div>
      <div className="contact-value" style={{ color }}>{value}</div>
    </a>
  );
}