import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";
import Header from "../editor-components/editor-components/Header";

const Navbar = ({ darkMode, toggleDarkMode }) => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const links = [
    { title: "Home", link: "/" },
    { title: "SQL Editor", link: "/editor" },
    { title: "Contact Us", link: "/contact" },
    { title: "Login", link: "/login" },
    { title: "Github", link: "https://github.com/prasachin" },
  ];

  const handleScroll = () => {
    setScrolled(window.scrollY > 0);
  };

  const handleLogoClick = (e) => {
    e.preventDefault();
    navigate("/", { replace: true });
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div className="mini-header">
        <Header />
      </div>
      <div
        className={`nav-menu-icon ${menuOpen ? "active" : ""}`}
        id="nav-menu-icon"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span className="hb-line"></span>
        <span className="hb-line"></span>
        <span className="hb-line"></span>
      </div>
      <nav className={scrolled ? "scrolled" : ""}>
        <div className="nav-main">
          <span onClick={handleLogoClick} className="nav-brand">
            <span className="nav-brand-text">Dummy SQL Editor</span>
          </span>
          <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
            {links.map((link, index) => (
              <li key={index} className="nav-link-original">
                {link.link.startsWith("http") ? (
                  <a
                    href={link.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="nav-link-original"
                    onClick={() => setMenuOpen(false)}
                  >
                    {link.title}
                  </a>
                ) : (
                  <Link
                    to={link.link}
                    onClick={() => setMenuOpen(false)}
                    className="nav-link-original"
                  >
                    {link.title}
                  </Link>
                )}
                <div className="underline"></div>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
