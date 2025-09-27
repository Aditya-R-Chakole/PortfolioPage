import React from 'react';
import {
  FaCreditCard,
  FaRobot,
  FaStickyNote,
  FaCode
} from 'react-icons/fa';
import './Services.css';

/**
 * List of service offerings. Each entry includes a name,
 * description and a representative icon. These could easily
 * correspond to products, tools or areas of expertise.
 */
const services = [
  {
    id: 1,
    name: 'Payment Provider',
    description: 'Seamless payment solutions',
    icon: <FaCreditCard />
  },
  {
    id: 2,
    name: 'AI Assistant',
    description: 'Intelligent automation',
    icon: <FaRobot />
  },
  {
    id: 3,
    name: 'NoteSpace',
    description: 'Productivity Tool',
    icon: <FaStickyNote />
  },
  {
    id: 4,
    name: 'WebCraft',
    description: 'React framework',
    icon: <FaCode />
  }
];

const Services = () => {
  return (
    <section id="services" className="services-section">
      <h2 className="section-title">Services &amp; Tools</h2>
      <div className="services-grid">
        {services.map((service) => (
          <div key={service.id} className="service-card">
            <div className="service-icon">{service.icon}</div>
            <div className="service-details">
              <h3>{service.name}</h3>
              <p>{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;