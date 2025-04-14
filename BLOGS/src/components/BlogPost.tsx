import { Blog } from '../App';
import '../styles/blogpost.css';

type Props = {
  blog: Blog;
};

const BlogPost = ({ blog }: Props) => {
  return (
    <main className="blog-post">
      <div className="container">
        <header className="post-header">
          <h1 className="post-title">{blog.title}</h1>
          <div className="post-date">
            📅 {new Date(blog.startDate).toLocaleDateString('en-US', { dateStyle: 'long' })} - 
            {new Date(blog.endDate).toLocaleDateString('en-US', { dateStyle: 'long' })}
          </div>
        </header>

        {blog.content.map((block, index) => (
          block.type === 'text' ? (
            <p key={index} className="text-content">
              {block.content}
            </p>
          ) : (
            <figure key={index} className="content-block">
              <img
                src={block.content}
                alt="Blog content"
                className="post-image"
              />
            </figure>
          )
        ))}

        {/* Author section */}
        <div className="author-info">
          — {blog.author.name} <br/> {blog.author.designation}
        </div>
      </div>
    </main>
  );
};

export default BlogPost;
