import "./ExploreRecipes.css";
import { useNavigate } from "react-router-dom";
import earthImg from "../assets/earth-removebg-preview.png";

function ExploreRecipes() {
  const navigate = useNavigate();

  const countries = [
    {
      name: "India",
      flag: "🇮🇳",
      cuisine: "Biryani • Dosa • Butter Chicken",
      image:
        "https://images.unsplash.com/photo-1585937421612-70a008356fbe?q=80&w=1200&auto=format&fit=crop",
    },
    {
      name: "Italy",
      flag: "🇮🇹",
      cuisine: "Pizza • Pasta • Lasagna",
      image:
        "https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=1200&auto=format&fit=crop",
    },
    {
      name: "Japan",
      flag: "🇯🇵",
      cuisine: "Sushi • Ramen • Tempura",
      image:
        "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?q=80&w=1200&auto=format&fit=crop",
    },
    {
      name: "China",
      flag: "🇨🇳",
      cuisine: "Noodles • Dumplings • Fried Rice",
      image:
        "https://images.unsplash.com/photo-1563245372-f21724e3856d?q=80&w=1200&auto=format&fit=crop",
    },
    {
      name: "France",
      flag: "🇫🇷",
      cuisine: "Croissant • Macaron • Soufflé",
      image:
        "https://images.unsplash.com/photo-1555507036-ab1f4038808a?q=80&w=1200&auto=format&fit=crop",
    },
    {
      name: "USA",
      flag: "🇺🇸",
      cuisine: "Burger • BBQ • Hotdog",
      image:
        "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=1200&auto=format&fit=crop",
    },
    {
      name: "Mexico",
      flag: "🇲🇽",
      cuisine: "Tacos • Nachos • Burrito",
      image:
        "https://images.unsplash.com/photo-1552332386-f8dd00dc2f85?q=80&w=1200&auto=format&fit=crop",
    },
    {
      name: "Thailand",
      flag: "🇹🇭",
      cuisine: "Pad Thai • Curry • Soup",
      image:
        "https://images.unsplash.com/photo-1559314809-0d155014e29e?q=80&w=1200&auto=format&fit=crop",
    },
    {
      name: "Korea",
      flag: "🇰🇷",
      cuisine: "Kimchi • Bibimbap • Bulgogi",
      image:
        "https://images.unsplash.com/photo-1498654896293-37aacf113fd9?q=80&w=1200&auto=format&fit=crop",
    },
    {
      name: "Spain",
      flag: "🇪🇸",
      cuisine: "Paella • Tapas • Churros",
      image:
        "https://images.unsplash.com/photo-1515443961218-a51367888e4b?q=80&w=1200&auto=format&fit=crop",
    },
  ];

  return (
    <section className="explore-wrapper">

      <div className="explore-hero">

        <div className="hero-left">


        <button
  className="back-home-btn"
  onClick={() => navigate("/")}
>
  ← 
</button>
          <div className="passport-badge">
            🌍 FOOD PASSPORT
          </div>

          <h1 className="hero-title">
            Taste The
            <span> World</span>
          </h1>


          <div className="stats-row">
            <div className="stat-box">
              <h3>🍳</h3>
              <h2>1000+</h2>
              <p>Recipes</p>
            </div>

            <div className="stat-box">
              <h3>🌎</h3>
              <h2>10</h2>
              <p>Countries</p>
            </div>

            <div className="stat-box">
              <h3>✨</h3>
              <h2>AI</h2>
              <p>Powered</p>
            </div>
          </div>
        </div>

        <div className="hero-right">

          <div className="orbit orbit1">🍕</div>
          <div className="orbit orbit2">🍜</div>
          <div className="orbit orbit3">🍔</div>
          <div className="orbit orbit4">🧁</div>
          <div className="orbit orbit5">🌮</div>

          <div className="globe-container">
  <img
    src={earthImg}
    alt="Earth"
  />
</div>

        </div>

      </div>

      <div className="section-heading">
        <h2>Explore Countries</h2>
      </div>

      <div className="country-grid">
        {countries.map((country) => (
          <div
            key={country.name}
            className="country-card"
            onClick={() =>
              navigate(`/country/${country.name}`)
            }
          >
            <img
              src={country.image}
              alt={country.name}
            />

            <div className="country-overlay">

              <div className="country-flag">
                {country.flag}
              </div>

              <div className="country-info">
                <h3>{country.name}</h3>
                <p>{country.cuisine}</p>
              </div>

              <button className="arrow-btn">
                →
              </button>

            </div>
          </div>
        ))}
      </div>

    </section>
  );
}

export default ExploreRecipes;