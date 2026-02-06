function Navbar({ darkMode, setDarkMode }) {
  return (
    <nav className="navbar">
      {/* Left - Logo */}
      <div className="logo">TechGuy360</div>

      {/* Center - Menu */}
      <ul className="nav-links">
        <li>Home</li>
        <li>Projects</li>
        <li>Services</li>
        <li>About</li>
        <li>Contact</li>
      </ul>

      {/* Right - Actions */}
      <div className="actions">
        <button
          className="toggle-btn"
          onClick={() => setDarkMode(!darkMode)}
        >
          {darkMode ? "☀ Light" : "🌙 Dark"}
        </button>

        <button className="login-btn">Login</button>
      </div>
    </nav>
  );
}

export default Navbar;
