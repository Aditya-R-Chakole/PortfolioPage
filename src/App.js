import React from 'react';
import Navbar from './components/Navbar';
import LeftCard from './components/LeftCard';
import Hero from './components/Hero';
import Companies from './components/Companies';
import Projects from './components/Projects';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import Blog from './components/Blog';
import FAQ from './components/FAQ';
import CTA from './components/CTA';

/**
 * The App component composes the page layout. It includes a fixed
 * navigation bar, a sticky profile card on the left, and the
 * scrollable main content on the right. Each section is built
 * using a dedicated React component.
 */
function App() {
  return (
    <>
      <Navbar />
      <div className="layout">
        <LeftCard />
        <main className="main-content">
          <Hero />
          {/* <Companies /> */}
          <Projects />
          <CTA />
        </main>
      </div>
    </>
  );
}

export default App;