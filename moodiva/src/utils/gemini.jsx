import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY);

export async function getMoodAnalysisFromGemini(userMood) {
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-pro" });

  const prompt = `
You are a quirky emotional assistant. A user just told you they are feeling: "${userMood}".
Based on this, give a fun mood analysis in JSON format with the following fields:

{
  "vibe": "short and fun mood-based suggestion",
  "tip": "a silly but helpful coping tip",
  "emoji": "a matching emoji",
  "playlist": {
    "name": "playlist title",
    "songs": [
      {
        "title": "song name",
        "artist": "artist name",
        "link": "spotify or youtube link"
      },
      ...
    ]
  },
  "activities": [
    {
      "name": "Activity name",
      "link": "resource link (Netflix, YouTube, etc.)"
    },
    ...
  ]
}
Only return valid JSON.
`;

  try {
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();

    return JSON.parse(text); // parse the returned JSON
  } catch (err) {
    console.error("Error in Gemini API:", err);
    throw err;
  }
}
