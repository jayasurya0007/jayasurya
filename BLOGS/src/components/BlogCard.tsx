import { Link } from 'react-router-dom';
import { Blog } from '../App';
import '../styles/blogcard.css';

type Props = {
  blog: Blog;
};

const BlogCard = ({ blog }: Props) => {
  return (
    <article className="blog-card">
      <div className="featured-image">
        {blog.featuredImage && <img src={blog.featuredImage} alt={blog.title} />}
      </div>
      <div className="card-content">
        <div className="post-date">
          <span>📅</span>
          {blog.startDate.toLocaleDateString('en-US', { dateStyle: 'long' })}-
          {blog.endDate.toLocaleDateString('en-US', { dateStyle: 'long' })}
        </div>
        <Link to={`/blog/${blog.id}`} className="post-title">
          {blog.title}
        </Link>
        <p className="post-excerpt">{blog.excerpt}</p>
        <Link to={`/blog/${blog.id}`} className="read-more">
          Read more
          <svg className="arrow" viewBox="0 0 24 24" width="16" height="16">
            <path fill="currentColor" d="M9 5l7 7-7 7"/>
          </svg>
        </Link>
      </div>
    </article>
  );
};

export default BlogCard;