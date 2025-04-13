import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gradient-to-r from-blue-600 to-purple-600 shadow-lg fixed w-full z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link 
            to="/" 
            className="text-2xl font-bold text-white hover:text-gray-200 transition-colors"
          >
            MyBlog
          </Link>
          <div className="flex space-x-8">
            <Link
              to="/portfolio"
              className="text-white hover:text-gray-200 px-3 py-2 rounded-md text-sm font-medium transition-colors"
            >
              Portfolio
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;