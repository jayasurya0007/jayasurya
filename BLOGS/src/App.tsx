import { BrowserRouter as Router, Routes, Route, useParams } from 'react-router-dom';
import { useState } from 'react';
import Navbar from './components/Navbar';
import Dashboard from './pages/Dashboard';
import BlogPost from './components/BlogPost';
import Details from "../public/assets/details.json";

export type ContentBlock = {
  type: 'text' | 'image';
  content: string;
};

export type Blog = {
  id: string;
  title: string;
  date: Date;
  excerpt: string;
  featuredImage?: string;
  content: ContentBlock[];
};

const App = () => {
  const [blogs] = useState<Blog[]>(
    Details.map(blog => ({
      ...blog,
      date: new Date(blog.date),
      content: blog.content.map(c => ({
        ...c,
        type: c.type as 'text' | 'image', // 🔑 Assert the type
      })),
    }))
  );
  
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Dashboard blogs={blogs} />} />
        <Route path="/blog/:id" element={<BlogPostWrapper blogs={blogs} />} />
      </Routes>
    </Router>
  );
};

const BlogPostWrapper = ({ blogs }: { blogs: Blog[] }) => {
  const { id } = useParams();
  const blog = blogs.find(b => b.id === id);
  return blog ? <BlogPost blog={blog} /> : <div>Post not found</div>;
};

export default App;
