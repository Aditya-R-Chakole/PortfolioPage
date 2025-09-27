import React from 'react';
import './Blog.css';

/**
 * A collection of blog posts with thumbnail images. In a real
 * application these would likely be pulled from a CMS or API. For
 * this demo we use fixed data and remote images hosted on Pexels.
 */
const posts = [
  {
    id: 1,
    date: 'Apr 8, 2022',
    title: 'Starting and Growing a Career in Web Design',
    image:
      'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: 2,
    date: 'Mar 15, 2022',
    title: 'Create a Landing Page That Performs Great',
    image:
      'https://images.pexels.com/photos/6476589/pexels-photo-6476589.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: 3,
    date: 'Feb 28, 2022',
    title: 'How Can Designers Prepare for the Future?',
    image:
      'https://images.pexels.com/photos/3153201/pexels-photo-3153201.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: 4,
    date: 'Jan 12, 2022',
    title: 'How to Create an Effective Design Portfolio',
    image:
      'https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&cs=tinysrgb&w=800'
  }
];

const Blog = () => {
  return (
    <section id="blog" className="blog-section">
      <h2 className="section-title">Design Thoughts and Perspectives</h2>
      <div className="blog-grid">
        {posts.map((post) => (
          <div key={post.id} className="blog-card">
            <div className="image-wrapper">
              <img src={post.image} alt={post.title} />
            </div>
            <div className="blog-info">
              <span className="date">{post.date}</span>
              <h3 className="post-title">{post.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Blog;