import { Blog } from '../App';
import BlogCard from '../components/BlogCard';
import '../styles/dashboard.css';

type Props = {
  blogs: Blog[];
};

const Dashboard = ({ blogs }: Props) => {
  return (
    <main className="dashboard" style={{ paddingTop: '8rem' }}>
      <div className="container">
        <h1 className="page-title">Latest Stories</h1>
        <div className="blog-list">
          {blogs
            .sort((a, b) => b.startDate.getTime() - a.startDate.getTime())
            .map((blog) => (
              <BlogCard key={blog.id} blog={blog} />
            ))}
        </div>
      </div>
    </main>
  );
};

export default Dashboard;