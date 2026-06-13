import "./AIChef.css";
import { useState } from "react";
import { askGemini } from "../services/gemini";

function AIChef() {
  const [question, setQuestion] = useState("");

  const [answer, setAnswer] = useState(
    "👨‍🍳 Welcome to AI Chef. Ask me recipes, nutrition tips, meal ideas or cooking hacks."
  );

  const [loading, setLoading] = useState(false);

  const handleAskAI = async () => {
    if (!question.trim()) return;

    setLoading(true);

    try {
      const result = await askGemini(question);
      setAnswer(result);
    } catch (err) {
      setAnswer("❌ Something went wrong. Please try again.");
    }

    setLoading(false);
  };

  const startVoice = () => {
    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;

    if (!SpeechRecognition) {
      alert("Voice Recognition is not supported in this browser.");
      return;
    }

    const recognition = new SpeechRecognition();
    recognition.lang = "en-US";
    recognition.start();

    recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript;
      setQuestion(transcript);
    };
  };

  const setPrompt = (text) => {
    setQuestion(text);
  };

  return (
    <section className="ai-chef-section" id="ai-chef">

   <div className="floating-foods">
  <span className="food f1">🍔</span>
  <span className="food f2">🍕</span>
  <span className="food f3">🌮</span>
  <span className="food f4">🍜</span>
  <span className="food f5">🍟</span>
</div>

      <div className="ai-chef-container">

        {/* LEFT SIDE */}
        <div className="ai-chef-left">
          <div className="chef-card animate-chef">
            <img
              src="https://cdn-icons-png.flaticon.com/512/4712/4712109.png"
              alt="AI Chef"
              className="chef-image"
            />
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="ai-chef-right animate-content">

          <div className="ai-header">

            <span className="chef-badge">
              🤖 AI FOOD EXPERT
            </span>

            <h1>
              Meet Your Smart<br />
              AI Chef Assistant
            </h1>

            <p>
              Ask anything about recipes, nutrition, meal plans and cooking hacks.
            </p>

          </div>

          {/* PROMPTS */}
          <div className="quick-prompts">
            <button onClick={() => setPrompt("How to make Maggi?")}>🍜 Maggi</button>
            <button onClick={() => setPrompt("Healthy breakfast ideas")}>🥗 Healthy</button>
            <button onClick={() => setPrompt("Paneer recipe")}>🧀 Paneer</button>
            <button onClick={() => setPrompt("High protein meal")}>💪 Protein</button>
          </div>

          {/* INPUT */}
          <div className="input-box">

            <input
              type="text"
              className="chef-input"
              placeholder="Ask anything about food..."
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleAskAI()}
            />

            <div className="chef-buttons">
              <button onClick={handleAskAI}>Ask AI Chef ✨</button>
              <button className="voice-btn" onClick={startVoice}>
                🎤 Voice AI
              </button>
            </div>

          </div>

          {/* CHAT */}
          <div className="chat-ui">

            <div className="user-chat">
              {question || "🍳 Ask your food question"}
            </div>

            <div className="ai-chat">

              {loading ? (
                <div>🤖 AI Chef is cooking...</div>
              ) : (
                <pre className="ai-response">{answer}</pre>
              )}

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default AIChef;