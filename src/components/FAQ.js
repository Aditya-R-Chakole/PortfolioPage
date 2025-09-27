import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import './FAQ.css';

/**
 * Frequently asked questions component. Each question can be toggled
 * to reveal its answer. Only one question is open at any time to
 * keep the interface uncluttered.
 */
const faqs = [
  {
    question: 'What is your design process?',
    answer:
      'My design process is user-centered and starts with research and discovery. I move on to wireframes, prototypes, and then iterate based on feedback before finalizing the design.'
  },
  {
    question: 'How do you handle project timelines?',
    answer:
      'I work closely with clients to establish realistic timelines, maintain transparent communication, and ensure milestones are met through efficient project management.'
  },
  {
    question: 'Can you work with existing teams?',
    answer:
      'Yes, I enjoy collaborating with cross-functional teams and can integrate seamlessly into existing workflows to deliver cohesive products.'
  },
  {
    question: 'What tools do you use?',
    answer:
      'I use a variety of tools including Figma, Sketch, Adobe XD for design, and React, Node.js for development.'
  }
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggle = (idx) => {
    setActiveIndex(activeIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="faq-section">
      <h2 className="section-title">Frequently Asked Questions</h2>
      <div className="faq-list">
        {faqs.map((item, index) => (
          <div key={index} className="faq-item">
            <button
              className="faq-question"
              onClick={() => toggle(index)}
              aria-expanded={activeIndex === index}
            >
              <span>{item.question}</span>
              {activeIndex === index ? <FaChevronUp /> : <FaChevronDown />}
            </button>
            {activeIndex === index && (
              <p className="faq-answer">{item.answer}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;