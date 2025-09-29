import React from 'react';
import './Projects.css';

import marketfeed_logo from '../data/marketfeed_logo.jpeg';
import cogoport_logo from '../data/cogoport_logo.png';
import inscriptaai_logo from '../data/inscriptaai_logo.jpeg';
import analytics_vidhya_logo from '../data/analytics_vidhya_logo.png';
import github_logo from '../data/github_logo.png';

/**
 * Array of recent projects. Each project includes an image stored in
 * the public folder, a title and a subtitle. Feel free to add
 * additional entries to showcase more work.
 */
const experiences = [
  {
    id: 1,
    title: 'Software Engineer @Marketfeed',
    startDate: 'PRESENT',
    subtitle: [
      {
        text: 'Co-designed and developed a {GPU-accelerated backtesting engine} from scratch with CUDA framework in Python, {cutting backtesting time by 93% and cost by 77%}, accelerating quantitative research workflows.'
      },
      {
        text: 'Optimized low-level software architecture for GPU backtesting engine, {reducing 50% of GPU memory usage}.'
      },
      {
        text: 'Built a {Technical Indicator module}, achieving 100% accuracy in realtime computations with {20ms latency}.'
      },
      {
        text: 'Revamped historical data preparation pipeline for processing daily futures and options (FnO) market data, enhancing performance, reducing costs, and {cutting Google Cloud Storage usage by 50%}.'
      },
      {
        text: 'Programmed {RESTful FastAPI Service} for signal-validation, backtesting, and trading strategy evaluation.'
      },
      {
        text: 'Integrated continuous integration via GitHub Actions for unit testing, build automation, and seamless releases.'
      },
      {
        text: 'Participated in code reviews and followed Agile methodologies, improving development efficiency.'
      }
    ],
    image: marketfeed_logo
  },
  {
    id: 2,
    title: 'Software Developer Engineer @Cogoport',
    startDate: 'AUG 2023',
    subtitle: [
      {
        text: 'Developed invoice-consolidation system for FTL shipments, using RubyOnRails, {reducing 30% of billing time}.'
      },
      {
        text: 'Implemented incremental updates and maintained the Full-Truckload (FTL) shipments page using ReactJS.'
      }
    ],
    image: cogoport_logo

  },
  {
    id: 3,
    title: 'Machine Learning Intern @Inscripta AI',
    startDate: 'Jun 2021',
    subtitle: [
      {
        text: 'Time Series Analysis: {Analysis of parking station-related data across cities of San Diego and Los Angeles}.'
      },
      {
        text: 'Analyzed time series predictability using ARIMA, Exponential Smoothing, and Graph-based LSTM models.'
      },
      {
        text: 'Deployed a Streamlit web-app to analyze and forecast the time series leveraging KNN-based XGBoost model'
      }
    ],
    image: inscriptaai_logo
  },
  {
    id: 4,
    title: 'Software Engineer Intern @Analytics Vidhya',
    startDate: 'Mar 2020',
    subtitle: [
      {
        text: "Implemented bookmark functionality for Analytics Vidhya's job portal using the Django framework."
      },
      {
        text: 'Developed APIs to verify enrollments, sending automated course updates using {Django REST Framework}.'
      }
    ],
    image: analytics_vidhya_logo
  }
];

const showcaseProjects = [
  {
    id: 'project-4',
    title: 'M.Tech Thesis - Pavement Condition Detection',
    startDate: 'Nov 2023',
    subtitle: [
      {
        text: 'Automated {pavement surface condition detection} with a computer vision pipeline built around deep learning algorithms.'
      },
      {
        text: 'Fine-tuned a {UNet segmentation model}, cutting loss below {24%} across crack and pothole identification.'
      },
      {
        text: 'Delivered a {Streamlit web application} that surfaced distress types and severity, enabling quick reviews for civil maintenance teams.'
      }
    ],
    image: github_logo
  }
];

const Projects = () => {
  const formatSubtitle = (subtitle) => {
    const content = typeof subtitle === 'string' ? subtitle : subtitle.text;

    if (!content.includes('{')) {
      return content;
    }

    return content.split(/(\{[^}]+\})/g).map((segment, index) => {
      if (!segment) {
        return null;
      }

      const isHighlight = segment.startsWith('{') && segment.endsWith('}');

      if (isHighlight) {
        const highlight = segment.slice(1, -1).trim();

        return (
          <span key={`highlight-${index}`} className="project-subtitle-highlight">
            {highlight}
          </span>
        );
      }

      return (
        <React.Fragment key={`text-${index}`}>
          {segment}
        </React.Fragment>
      );
    });
  };

  return (
    <>
      <section id="experience" className="projects-section">
        <h2 className="section-title">Experience</h2>
        <div className="projects-container timeline-list">
          {experiences.map((project) => {
            const [role = '', company] = project.title.split('@');
            const startDate = project.startDate || '—';

            return (
              <div key={project.id} className="project-card">
                <div className="project-card-header">
                  <div className="image-wrapper">
                    <img src={project.image} alt={project.title} />
                  </div>
                  <div className="project-card-heading">
                    <h3>
                      <span className="project-role">{role.trim()}</span>
                      {company && (
                        <span className="project-company">{company.trim()}</span>
                      )}
                    </h3>
                  </div>
                  <span className="project-start-date">{startDate}</span>
                </div>

                <div className="project-info">
                  {Array.isArray(project.subtitle) ? (
                    <ul className="project-subtitle">
                      {project.subtitle.map((item, index) => (
                        <li key={index}>
                          <span className="project-subtitle-text">
                            {formatSubtitle(item)}
                          </span>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="project-subtitle project-subtitle-text">
                      {formatSubtitle(project.subtitle)}
                    </p>
                  )}
                </div>
              </div>
            );
          })}
        </div>
        <div className="projects-divider" aria-hidden="true" />
      </section>

      <section id="projects" className="projects-section">
        <h2 className="section-title section-title--secondary">Projects</h2>
        <div className="projects-container projects-container--showcase timeline-list">
          {showcaseProjects.map((project) => {
            const [role = '', company] = project.title.split('@');
            const startDate = project.startDate || '—';

            return (
              <div key={project.id} className="project-card">
                <div className="project-card-header">
                  <div className="image-wrapper">
                    <img src={project.image} alt={project.title} />
                  </div>
                  <div className="project-card-heading">
                    <h3>
                      <span className="project-role">{role.trim()}</span>
                      {company && (
                        <span className="project-company">{company.trim()}</span>
                      )}
                    </h3>
                  </div>
                  <span className="project-start-date">{startDate}</span>
                </div>

                <div className="project-info">
                  <ul className="project-subtitle">
                    {project.subtitle.map((item, index) => (
                      <li key={index}>
                        <span className="project-subtitle-text">
                          {formatSubtitle(item)}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Projects;
