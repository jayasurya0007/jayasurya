import '../styles/navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-content container">
        <a href="/" className="brand">MyBlog</a>
        <div className="nav-links">
          <a
            href="https://jayasuryar.xyz."
            className="nav-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            Portfolio
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;