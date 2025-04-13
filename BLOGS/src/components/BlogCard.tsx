import { Link } from 'react-router-dom';
import { Blog } from '../App';

type Props = {
  blog: Blog;
};

const BlogCard = ({ blog }: Props) => {
  return (
    <div className="group relative mb-8 overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
      <div className="h-48 bg-gray-200 overflow-hidden">
        {blog.featuredImage && (
          <img 
            src={blog.featuredImage} 
            alt={blog.title}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        )}
      </div>
      <div className="p-6">
        <div className="flex items-center text-sm text-gray-500 mb-2">
          <span className="mr-2">📅</span>
          <time>{blog.date.toLocaleDateString('en-US', { dateStyle: 'long' })}</time>
        </div>
        <Link to={`/blog/${blog.id}`} className="block">
          <h2 className="text-2xl font-bold text-gray-800 mb-3 hover:text-blue-600 transition-colors">
            {blog.title}
          </h2>
        </Link>
        <p className="text-gray-600 mb-4">{blog.excerpt}</p>
        <div className="flex items-center text-blue-600 font-medium hover:text-blue-700 transition-colors">
          <Link to={`/blog/${blog.id}`} className="flex items-center">
            Read more
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;