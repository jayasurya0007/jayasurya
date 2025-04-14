import { BrowserRouter as Router, Routes, Route, useParams } from 'react-router-dom';
import { useState } from 'react';
import Navbar from './components/Navbar';
import Dashboard from './pages/Dashboard';
import BlogPost from './components/BlogPost';
import Details from "./assets/details.json";

export type ContentBlock = {
  type: 'text' | 'image';
  content: string;
};
export type Author = {
  name: string;
  designation: string;
};


export type Blog = {
  id: string;
  title: string;
  startDate: Date;
  endDate:Date;
  excerpt: string;
  featuredImage?: string;
  content: ContentBlock[];
  author:Author;
};

const App = () => {
  const [blogs] = useState<Blog[]>(
    Details.map(blog => ({
      ...blog,
      startDate: new Date(blog.startDate),
      endDate: new Date(blog.endDate),
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
