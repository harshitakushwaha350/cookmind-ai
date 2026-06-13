import "./Hero.css";

function Hero() {
  return (
    <section
      className="hero"
      id="hero"
    >


       <div className="floating-food food1">
    🍕
  </div>

  <div className="floating-food food2">
    🍓
  </div>

  <div className="floating-food food3">
    🍔
  </div>

  <div className="floating-food food4">
    🍜
  </div>

      <div className="hero-blur blur1"></div>
      <div className="hero-blur blur2"></div>

      <div className="container hero-container">

        {/* LEFT CONTENT */}

        <div className="hero-left">

          <span className="hero-tag">
            🍓 AI Powered Recipe Generator
          </span>

          <h1>
            Turn Your Leftover Ingredients Into
            <span> Delicious Meals</span>
          </h1>

          <p>
            Discover recipes instantly using ingredients
            available at your home with AI-powered smart cooking suggestions.
          </p>

         
          {/* STATS */}

          <div className="hero-stats">

            <div className="stat-card">
              <h3>10K+</h3>
              <p>Recipes</p>
            </div>

            <div className="stat-card">
              <h3>5K+</h3>
              <p>Users</p>
            </div>

            <div className="stat-card">
              <h3>4.9★</h3>
              <p>Ratings</p>
            </div>

          </div>

        </div>

        {/* RIGHT SIDE */}

        <div className="hero-right">

          {/* MAIN IMAGE */}

          <div className="main-food-card">

            <img
              src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=1200&auto=format&fit=crop"
              alt="food"
            />

          </div>

          {/* FLOATING CARDS */}

          <div className="floating-card card1">
            🍕 Pizza Ready
          </div>

          <div className="floating-card card2">
            🥗 Healthy Bowl
          </div>

          <div className="floating-card card3">
            🍜 Fast Cooking
          </div>

        </div>

      </div>

    </section>
  );
}

export default Hero;