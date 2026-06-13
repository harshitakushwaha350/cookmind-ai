import "./Footer.css";

import {
  FaInstagram,
  FaGithub,
  FaLinkedin,
  FaHeart
} from "react-icons/fa";

function Footer() {

  return (

    <footer className="footer">

      {/* BLURS */}

      <div className="footer-blur footer-blur1"></div>

      <div className="footer-blur footer-blur2"></div>

      {/* TOP */}

      <div className="footer-top">

        {/* LEFT */}

        <div className="footer-brand">

          <h1>
            CookMind AI 🍓
          </h1>

          <p>
            Smart AI powered food discovery
            platform for food lovers 😭🔥
          </p>

          {/* SOCIALS */}

          <div className="footer-socials">

            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </a>

            <a
              href="https://github.com/harshitakushwaha350"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/harshita-kushwaha-28063a333"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin />
            </a>

          </div>

        </div>

        {/* LINKS */}

        <div className="footer-links">

          <div className="footer-column">

            <h3>
              Explore
            </h3>

            <a href="/">
              Recipes
            </a>

            <a href="/">
              Trending
            </a>

            <a href="/">
              AI Search
            </a>

          </div>

          <div className="footer-column">

            <h3>
              Company
            </h3>

            <a href="/">
              About
            </a>

            <a href="/">
              Features
            </a>

            <a href="/">
              Contact
            </a>

          </div>

        </div>

        {/* NEWSLETTER */}

        <div className="footer-newsletter">

          <h2>
            Join Food Newsletter ✨
          </h2>

          <p>
            Get delicious AI recipe updates weekly.
          </p>

          <div className="newsletter-box">

            <input
              type="email"
              placeholder="Enter your email"
            />

            <button>
              Subscribe
            </button>

          </div>

        </div>

      </div>

      {/* BOTTOM */}

      <div className="footer-bottom">

        <p>

          Made with

          <FaHeart className="heart" />

          by CookMind AI 😭🔥

        </p>

      </div>

    </footer>
  );
}

export default Footer;