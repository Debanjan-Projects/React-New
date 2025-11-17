import { GoogleGenerativeAI } from "@google/generative-ai";
import dotenv from "dotenv";

// Load environment variables
dotenv.config();

const genAI = new GoogleGenerativeAI({
  apiKey: process.env.GEMINI_API_KEY,
});

async function main() {
  try {
    const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

    const prompt = "Explain how AI works in a few words";
    const result = await model.generateContent(prompt);

    console.log(result.response.text());
  } catch (error) {
    console.error("❌ AI Request Failed:", error);
  }
}

main();
