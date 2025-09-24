import React from "react";
import "./SectionTitle.scss";

const SectionTitle: React.FC<{ title: string; subtitle?: string }> = ({ title, subtitle }) => (
  <div className="section-title">
    <h2 className="section-title__main">{title}</h2>
    {subtitle && <p className="section-title__sub">{subtitle}</p>}
  </div>
);

export default SectionTitle;
