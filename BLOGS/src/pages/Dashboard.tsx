import BlogCard from '../components/BlogCard';

const blogs = [
  {
    id: '1',
    title: 'My First Blog',
    date: '2025-04-12',
  },
  {
    id: '2',
    title: 'Profitable Blog Tips',
    date: '2025-04-11',
  },
];

const Dashboard = () => {
  const sortedBlogs = [...blogs].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <div className="dashboard">
      <h2>Recent Blogs</h2>
      {sortedBlogs.map((blog) => (
        <BlogCard key={blog.id} {...blog} />
      ))}
    </div>
  );
};

export default Dashboard;
