import { Blog } from '../App';
import BlogCard from '../components/BlogCard';

type Props = {
  blogs: Blog[];
};

const Dashboard = ({ blogs }: Props) => {
  return (
    <div className="pt-24 px-4 min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-800 mb-12 text-center">
          Latest Stories
        </h1>
        <div className="grid gap-8">
          {blogs
            .sort((a, b) => b.date.getTime() - a.date.getTime())
            .map((blog) => (
              <BlogCard key={blog.id} blog={blog} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;