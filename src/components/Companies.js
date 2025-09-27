import React from 'react';
import { FaBolt, FaCode, FaPencilRuler } from 'react-icons/fa';
import './Companies.css';

/**
 * Displays a row of placeholder client logos. The original template
 * lists companies that have trusted the designer. Here we use
 * representative icons with labels instead of actual trademarks.
 */
const companies = [
  { id: 1, name: 'Logoipsum', icon: <FaBolt /> },
  { id: 2, name: 'Logoipsum', icon: <FaCode /> },
  { id: 3, name: 'Logoipsum', icon: <FaPencilRuler /> }
];

const Companies = () => {
  return (
    <section className="companies-section">
      <p className="companies-title">
        Relied on by companies near, far, and worldwide
      </p>
      <div className="companies-list">
        {companies.map((company) => (
          <div key={company.id} className="company-item">
            {company.icon}
            <span>{company.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Companies;