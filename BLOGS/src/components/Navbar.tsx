import '../styles/navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-content container">
        <a href="/" className="brand">JVerse</a>
        <div className="nav-links">
          <a
            href="https://jayasuryar.xyz/#contact"
            className="nav-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            Get Connected
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;