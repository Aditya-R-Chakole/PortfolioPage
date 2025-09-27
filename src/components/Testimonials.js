import React, { useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import './Testimonials.css';

/**
 * A simple testimonials slider. Clicking the navigation arrows
 * cycles through an array of testimonials. The currently active
 * testimonial is displayed in a styled card.
 */
const testimonials = [
  {
    quote:
      'John expertly blends design with functionality, transforming our product into a sleek, user-friendly experience that our customers love!',
    name: 'William M.'
  },
  {
    quote:
      'Working with Aabraham was a pleasure. His creativity and attention to detail brought our vision to life.',
    name: 'Sarah P.'
  },
  {
    quote:
      'Exceptional design skills and great communication. Our website has never looked better.',
    name: 'David K.'
  }
];

const Testimonials = () => {
  const [index, setIndex] = useState(0);

  const prev = () => {
    setIndex((index - 1 + testimonials.length) % testimonials.length);
  };

  const next = () => {
    setIndex((index + 1) % testimonials.length);
  };

  const testimonial = testimonials[index];

  return (
    <section id="testimonials" className="testimonials-section">
      <h2 className="section-title">What Clients Say About My Work</h2>
      <div className="testimonial-card">
        <p className="quote">"{testimonial.quote}"</p>
        <p className="name">— {testimonial.name}</p>
      </div>
      <div className="testimonial-nav">
        <button onClick={prev} aria-label="Previous testimonial">
          <FaChevronLeft />
        </button>
        <button onClick={next} aria-label="Next testimonial">
          <FaChevronRight />
        </button>
      </div>
    </section>
  );
};

export default Testimonials;