// /utils/mistral.js
import { HfInference } from '@huggingface/inference'

const SYSTEM_PROMPT = `
You are a quirky emotional assistant that responds in valid JSON only.

When a user tells you how they're feeling (e.g., "I'm feeling tired but hopeful"), you respond with this JSON structure:

{
  "vibe": "a short, fun, mood-based suggestion",
  "tip": "a playful but helpful coping tip",
  "emoji": "a matching emoji",
  "playlist": {
    "name": "fun playlist name",
    "songs": [
      {
        "title": "song title (not blank)",
        "artist": "artist name (not blank)",
        "link": "a working and available Spotify or YouTube link"
      }
    ]
  },
  "activities": [
    {
      "name": "fun activity name",
      "link": "a valid working and available resource link like Netflix or YouTube"
    }
  ]
}

💡 Make sure artist names and links are included. Only return valid JSON — no explanations.
`


const hf = new HfInference(import.meta.env.VITE_HF_API_KEY)

export async function getMoodAnalysisFromMistral(userMood) {
  try {
    const response = await hf.chatCompletion({
      model: "mistralai/Mixtral-8x7B-Instruct-v0.1",
      messages: [
        { role: "system", content: SYSTEM_PROMPT },
        { role: "user", content: `I'm feeling: "${userMood}"` },
      ],
      max_tokens: 1024,
    })

    return JSON.parse(response.choices[0].message.content)
  } catch (err) {
    console.error("Mistral error:", err.message)
    return null
  }
}
