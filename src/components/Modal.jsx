import "./Modal.css";

import { useEffect, useRef } from "react";

import gsap from "gsap";

function Modal({

  selectedRecipe,

  closeModal

}) {

  const modalRef = useRef();

  /* GSAP */

  useEffect(() => {

    gsap.fromTo(

      modalRef.current,

      {

        y:80,

        opacity:0,

        scale:0.8

      },

      {

        y:0,

        opacity:1,

        scale:1,

        duration:0.8,

        ease:"power4.out"

      }
    );

  }, []);

  return (

    <div className="recipe-modal-overlay">

      <div
        className="recipe-modal"
        ref={modalRef}
      >

        {/* CLOSE */}

        <button
          className="recipe-close-btn"
          onClick={closeModal}
        >

          ✖

        </button>

        {/* IMAGE */}

        <div className="recipe-modal-image-box">

          <img
            src={selectedRecipe.image}
            alt={selectedRecipe.title}
            className="recipe-modal-image"
          />

          {/* FLOAT BADGE */}

          <div className="recipe-badge">

            🍜 AI Recommended

          </div>

        </div>

        {/* CONTENT */}

        <div className="recipe-modal-content">

          {/* TITLE */}

          <h2 className="recipe-modal-title">

            {selectedRecipe.title}

          </h2>

          {/* DESCRIPTION */}

          <p className="recipe-modal-text">

            {selectedRecipe.description}

          </p>

          {/* INFO CARDS */}

          <div className="recipe-info-grid">

            <div className="recipe-info-card">

              <h4>⏰ Time</h4>

              <p>
                {selectedRecipe.time}
              </p>

            </div>

            <div className="recipe-info-card">

              <h4>🔥 Calories</h4>

              <p>
                {selectedRecipe.calories}
              </p>

            </div>

            <div className="recipe-info-card">

              <h4>👨‍🍳 Chef</h4>

              <p>
                AI Kitchen
              </p>

            </div>

          </div>

          {/* INGREDIENTS */}

          <div className="recipe-modal-section">

            <h3>
              Ingredients 🍓
            </h3>

            <div className="ingredients-grid">

              {

                selectedRecipe.ingredients.map(

                  (item,index)=>(

                    <span
                      className="ingredient-chip"
                      key={index}
                    >

                      {item}

                    </span>
                  )
                )
              }

            </div>

          </div>

          {/* STEPS */}

          <div className="recipe-modal-section">

            <h3>
              Cooking Steps 👨‍🍳
            </h3>

            <div className="steps-box">

              {

                selectedRecipe.steps.map(

                  (step,index)=>(

                    <div
                      className="step-card"
                      key={index}
                    >

                      <div className="step-number">

                        {index + 1}

                      </div>

                      <p>
                        {step}
                      </p>

                    </div>
                  )
                )
              }

            </div>

          </div>

          {/* BUTTONS */}

          <div className="recipe-modal-buttons">

            <a
              href={selectedRecipe.youtubeLink}
              target="_blank"
            >

              Watch Video 🎥

            </a>

            <a
              href={selectedRecipe.recipeLink}
              target="_blank"
            >

              Full Recipe 🍜

            </a>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Modal;