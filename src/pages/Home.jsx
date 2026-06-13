import Navbar from "../components/Navbar";

import Hero from "../components/Hero";

import IngredientSection from "../components/IngredientSection";

import RecipeSection from "../components/RecipeSection";



import AIChef from "../components/AIChef";

import Footer from "../components/Footer";

function Home() {

  return (

    <>

      <Navbar />

      <Hero />

      <IngredientSection />

      <RecipeSection />

     

      <AIChef />
       

       <Footer />
    </>
  );
}

export default Home;