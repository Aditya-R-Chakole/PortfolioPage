import React from 'react';
import { FaEnvelope, FaPhoneAlt, FaDownload } from 'react-icons/fa';
import './CTA.css';

/**
 * Final call-to-action section inviting visitors to make contact.
 * Presents a motivating headline, a supporting statement and a
 * button that opens an email client. Adjust the email address to
 * your own to make the CTA functional.
 */
const CTA = () => {
  return (
    <section id="contact" className="cta-section">
      <h2 className="cta-title">
        Let's <span className="highlight">start a conversation</span>
      </h2>
      <p className="cta-subtitle">
        Whether it's shipping resilient infrastructure, scaling ML systems, or exploring new research ideas,
        I'm always glad to jam with ambitious teams.
      </p>

      <div className="cta-contact">
        <a href="mailto:aditya.r.chakole@gmail.com" className="cta-chip">
          <FaEnvelope />
          <span>aditya.r.chakole@gmail.com</span>
        </a>
        <a href="tel:8167521111" className="cta-chip">
          <FaPhoneAlt />
          <span>+91 81675 21111</span>
        </a>
      </div>

      <div className="cta-actions">
        <a
          href="Aditya_Chakole_Resume.pdf"
          className="cta-secondary"
          download
        >
          <FaDownload />
          <span>Download resume</span>
        </a>
      </div>
    </section>
  );
};

export default CTA;
