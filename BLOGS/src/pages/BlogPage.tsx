import { useParams } from 'react-router-dom';
import BlogContent from '../components/BlogContent';

const blogs = [
  {
    id: '1',
    title: 'My First Blog',
    content: [
      'This is the introduction paragraph of my first blog.',
      { image: 'https://via.placeholder.com/600x300' },
      'This is the conclusion of my first blog.',
    ],
  },
  {
    id: '2',
    title: 'Profitable Blog Tips',
    content: [
      'Start by choosing a niche.',
      { image: 'https://via.placeholder.com/600x300' },
      'Monetize through ads and affiliate marketing.',
    ],
  },
];

const BlogPage = () => {
  const { id } = useParams();
  const blog = blogs.find((b) => b.id === id);

  if (!blog) return <p>Blog not found.</p>;

  return <BlogContent title={blog.title} content={blog.content} />;
};

export default BlogPage;
