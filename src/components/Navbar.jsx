import "./Navbar.css";
import { useNavigate } from "react-router-dom";

function Navbar() {

  const navigate = useNavigate();

  return (

    <nav className="navbar">

      {/* LEFT */}

      <div className="logo-box">

        <div className="logo-glow"></div>

        <div className="logo-icon">

          🍓

          <span className="floating-leaf">
            🍃
          </span>

        </div>

        <div className="logo-text">

          <h1>
            CookMind
            <span> AI</span>
          </h1>

          <p>
            Smart Food Intelligence
          </p>

        </div>

      </div>

      {/* CENTER */}

      <div className="nav-links">

        <a href="#hero">
          Home
        </a>

        <a href="#recipes">
          Recipes
        </a>

      

        <a href="#ai-chef">
          AI Search
        </a>

      </div>

      {/* EXPLORE BUTTON */}

      <button
        className="nav-btn"
        onClick={() => navigate("/explore")}
      >
        Explore Recipes ✨
      </button>

    </nav>
  );
}

export default Navbar;