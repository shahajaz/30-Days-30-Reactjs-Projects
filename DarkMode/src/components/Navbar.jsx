function Navbar({ darkMode, setDarkMode }) {
  return (
    <nav className="navbar">
      <div className="logo">Code <span>360</span></div>

      {/* Center - Menu */}
      <ul className="nav-links">
        <li>Home</li>
        <li>Projects</li>
        <li>Services</li>
        <li>About</li>
        <li>Contact</li>
      </ul>

      <div className="actions">
        <button className="toggle-btn" onClick={() => setDarkMode(!darkMode)}>

          {darkMode ? <i className="fa-solid fa-moon"></i> : <i className="fa-solid fa-sun"></i>}
        </button>

        <button className="login-btn">Login</button>
      </div>
    </nav>
  );
}

export default Navbar;
