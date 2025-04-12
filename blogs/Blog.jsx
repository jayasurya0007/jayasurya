import React from 'react';
import "./css/Blog.css";
const Blog = () => {
  return (
    <div className="blog">
      <h1>My Events & Participications</h1>
      <div className="blog-posts">
        {/* Add your blog posts here */}
        <div className="blog-post">
          <h2>Hackathon Victory 2023</h2>
          <p>Date: October 2023 | Location: Virtual</p>
          <p>Won first place in the annual coding challenge...</p>
        </div>
        
        <div className="blog-post">
          <h2>Tech Conference Speaker</h2>
          <p>Date: September 2023 | Location: San Francisco</p>
          <p>Spoke about modern web development trends...</p>
        </div>
      </div>
    </div>
  );
};

export default Blog;