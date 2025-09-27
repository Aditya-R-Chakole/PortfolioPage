import React from 'react';
import { FaLinkedinIn, FaGithub, FaEnvelope } from 'react-icons/fa';
import './LeftCard.css';
import profilePicture from '../assets/profilepicture.png';

/**
 * A profile card that remains visible as you scroll the page on larger
 * screens. Displays a photo, name, title, location, social links and
 * a primary action button.
 */
const LeftCard = () => {
  return (
    <aside className="left-card">
      <div className="photo-wrapper">
        {/*
          The image is served from the public folder. Using
          process.env.PUBLIC_URL allows the asset to be referenced
          correctly in a CRA build. */}
        <img
          src={profilePicture}
          alt="Profile"
        />
      </div>
      <h2 className="profile-name">
        Aditya <span className="profile-name-highlight">Chakole</span>
      </h2>

      <div className="hero-marquee" aria-hidden="true">
        <div className="hero-marquee-track">
          {Array.from({ length: 6 }).map((_, index) => (
            <span key={index}>Software Engineer • Quant Systems • ML Enthusiast • </span>
          ))}
        </div>
      </div>

      <div className="degree">
        <p className="degree-label">IIT Kharagpur</p>
      </div>

      <div className="card-divider" aria-hidden="true" />

      <div className="socials">
        <a
          href="https://www.linkedin.com/in/aditya-r-chakole/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <FaLinkedinIn />
        </a>
        <a
          href="https://github.com/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <FaGithub />
        </a>
        <a
          href="mailto:aditya.r.chakole@gmail.com"
          aria-label="Email"
        >
          <FaEnvelope />
        </a>
      </div>
    </aside>
  );
};

export default LeftCard;
