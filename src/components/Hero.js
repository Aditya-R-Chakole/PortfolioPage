import React from 'react';
import './Hero.css';

/**
 * Hero section introduces the site visitor to the primary
 * proposition. It features a large headline with a highlighted
 * keyword, a supporting statement, three metrics to illustrate
 * experience, and call-to-action buttons.
 */
const Hero = () => {
  return (
    <section id="hero" className="hero-section">
      <div className="hero-content">
        <h1 className="hero-title">Building resilient, data-driven experiences.</h1>
        <p className="hero-description">
          I'm Aditya Chakole, a software engineer focused on dependable backend
          systems, intelligent automation, and measurable impact. I partner with
          product teams to ship performant services, refine data pipelines, and
          move ideas from prototype to production with intent.
        </p>
      </div>
    </section>
  );
};

export default Hero;
