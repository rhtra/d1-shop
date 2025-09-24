import React from "react";
import "../../styles/globals.scss";

const CTAButton: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <button className="cta-button">{children}</button>
);

export default CTAButton;
