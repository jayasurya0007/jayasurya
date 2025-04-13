import { Blog } from '../App';

type Props = {
  blog: Blog;
};

const BlogPost = ({ blog }: Props) => {
  return (
    <div className="pt-24 px-4 min-h-screen bg-gray-50">
      <article className="max-w-3xl mx-auto prose prose-lg">
        <header className="mb-12">
          <h1 className="text-5xl font-bold text-gray-800 mb-4">{blog.title}</h1>
          <div className="flex items-center text-gray-500 space-x-4">
            <span>📅 {blog.date.toLocaleDateString('en-US', { dateStyle: 'long' })}</span>
          </div>
        </header>

        {blog.content.map((block, index) => (
          block.type === 'text' ? (
            <p key={index} className="mb-6 text-gray-700 leading-relaxed">
              {block.content}
            </p>
          ) : (
            <figure key={index} className="my-12">
              <img
                src={block.content}
                alt="Blog content"
                className="rounded-xl shadow-lg w-full object-cover"
              />
              <figcaption className="text-center text-sm text-gray-500 mt-2">
                Image description
              </figcaption>
            </figure>
          )
        ))}
      </article>
    </div>
  );
};

export default BlogPost;