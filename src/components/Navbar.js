import React, { useEffect, useState } from 'react';
import { FaHome, FaBriefcase, FaRocket, FaEnvelope } from 'react-icons/fa';
import './Navbar.css';

/**
 * A simple navigation bar fixed at the top of the screen. Clicking
 * on any nav item scrolls the page to the corresponding section. On
 * mobile screens the labels are hidden to save space.
 */
const navItems = [
  { id: 'top', icon: <FaHome />, label: 'Home' },
  { id: 'experience', icon: <FaBriefcase />, label: 'Experience' },
  { id: 'projects', icon: <FaRocket />, label: 'Projects' },
  { id: 'contact', icon: <FaEnvelope />, label: 'Contact' }
];

const Navbar = () => {
  const [activeId, setActiveId] = useState('top');

  /**
   * Scroll to the section with the given id.
   * @param {string} id The id of the section to scroll to
   */
  const handleClick = (id) => {
    if (id === 'top') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      setActiveId('top');
      return;
    }

    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setActiveId(id);
    }
  };

  useEffect(() => {
    const observedIds = navItems
      .filter((item) => item.id !== 'top')
      .map((item) => item.id);

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visibleEntry?.target?.id) {
          setActiveId(visibleEntry.target.id);
        }
      },
      {
        root: null,
        rootMargin: '-45% 0px -45% 0px',
        threshold: [0.1, 0.3, 0.6]
      }
    );

    observedIds.forEach((sectionId) => {
      const element = document.getElementById(sectionId);
      if (element) {
        observer.observe(element);
      }
    });

    const syncTopState = () => {
      if (window.scrollY < 120) {
        setActiveId('top');
      }
    };

    window.addEventListener('scroll', syncTopState, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', syncTopState);
    };
  }, []);

  return (
    <nav className="navbar">
      {navItems.map((item) => (
        <button
          key={item.id}
          className={`nav-item${activeId === item.id ? ' is-active' : ''}`}
          onClick={() => handleClick(item.id)}
          aria-label={item.label}
        >
          <div className="icon">{item.icon}</div>
          <span className="label">{item.label}</span>
        </button>
      ))}
    </nav>
  );
};

export default Navbar;
