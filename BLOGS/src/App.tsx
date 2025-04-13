import { BrowserRouter as Router, Route, Routes, Link, useParams } from 'react-router-dom';
import { useState } from 'react';

const blogs = [
  {
    id: '1',
    title: 'My First Blog',
    date: '2025-04-12',
    content: [
      'This is the introduction paragraph of my first blog.',
      { image: 'https://via.placeholder.com/600x300' },
      'This is the conclusion of my first blog.'
    ]
  },
  {
    id: '2',
    title: 'Profitable Blog Tips',
    date: '2025-04-11',
    content: [
      'Start by choosing a niche.',
      { image: 'https://via.placeholder.com/600x300' },
      'Monetize through ads and affiliate marketing.'
    ]
  }
];

const Navbar = () => (
  <nav className="bg-white shadow p-4 flex justify-between">
    <Link to="/" className="font-bold text-xl">MyBlog</Link>
    <Link to="/profitable" className="text-blue-500">Profitable</Link>
  </nav>
);

const Dashboard = () => {
  const sortedBlogs = [...blogs].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Recent Blogs</h2>
      <ul>
        {sortedBlogs.map(blog => (
          <li key={blog.id} className="mb-2">
            <Link to={`/blog/${blog.id}`} className="text-blue-600 hover:underline">{blog.title}</Link>
            <p className="text-sm text-gray-500">{blog.date}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

const BlogPage = () => {
  const { id } = useParams();
  const blog = blogs.find(b => b.id === id);
  if (!blog) return <p className="p-4">Blog not found.</p>;

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-4">{blog.title}</h1>
      {blog.content.map((block, index) => (
        typeof block === 'string' ? (
          <p key={index} className="mb-4">{block}</p>
        ) : (
          <img key={index} src={block.image} alt="Blog Visual" className="mb-4 w-full rounded" />
        )
      ))}
    </div>
  );
};

const ProfitablePage = () => (
  <div className="p-4">
    <h2 className="text-2xl font-bold mb-4">Profitable Blog Guide</h2>
    <p>Here you'll find tips on how to monetize your blog effectively.</p>
  </div>
);

const App = () => (
  <Router>
    <Navbar />
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/blog/:id" element={<BlogPage />} />
      <Route path="/profitable" element={<ProfitablePage />} />
    </Routes>
  </Router>
);

export default App;
