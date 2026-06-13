import { GoogleGenerativeAI } from "@google/generative-ai";

const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;

console.log("API KEY =", API_KEY);

const genAI = new GoogleGenerativeAI(API_KEY);

const model = genAI.getGenerativeModel({
  model: "gemini-2.5-flash",
});

const sleep = (ms) =>
  new Promise((resolve) => setTimeout(resolve, ms));

export const askGemini = async (prompt) => {
  try {
    if (!API_KEY) {
      return "❌ Gemini API Key not found.";
    }

    let retries = 3;

    while (retries > 0) {
      try {
        const result = await model.generateContent(`
You are a professional cooking assistant.

Give answers in this format:

🍽 Recipe Name

🧾 Ingredients:
- item 1
- item 2

👨‍🍳 Steps:
1. Step one
2. Step two

💡 Tips:
- Tip 1
- Tip 2

Question:
${prompt}
        `);

        return result.response.text();
      } catch (error) {
        console.error("Gemini Retry Error:", error);

        const is503 =
          String(error).includes("503") ||
          String(error).includes("high demand");

        if (is503 && retries > 1) {
          retries--;
          await sleep(2000);
          continue;
        }

        throw error;
      }
    }
  } catch (error) {
    console.error("Gemini Error:", error);

    if (
      String(error).includes("503") ||
      String(error).includes("high demand")
    ) {
      return "⚠️ AI Chef is receiving too many requests right now. Please try again in a few seconds.";
    }

    if (
      String(error).includes("API key") ||
      String(error).includes("API_KEY")
    ) {
      return "❌ Invalid Gemini API Key.";
    }

    return "❌ AI Chef is currently unavailable. Please try again.";
  }
};