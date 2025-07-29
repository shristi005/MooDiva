import React, { useState,useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useMood } from '../context/MoodContext';
import { mockAnalyzeMood } from '../utils/mockApi'; // add this line
import { getMoodAnalysisFromMistral } from "../utils/mistral";



import logo from '../assets/MooDivaLogo.png'; // Assuming you have a logo image





export default function HomePage() {
  const navigate = useNavigate();
  const [inputMood, setInputMood] = useState("");
  const { setUserMood, setMoodAnalysis } = useMood();

  const apiKey = import.meta.env.VITE_HF_API_KEY; // ✅

  /* useEffect(() => {
  (async () => {
    const response = await getMoodAnalysisFromGemini("I feel sad but hopeful");
    console.log("Test Gemini response:", response);
  })();
}, []); */





/* const handleSubmit = async (e) => {
  e.preventDefault();
  setUserMood(inputMood);

  try {
    const result = await getMoodAnalysisFromGemini(inputMood);
    setMoodAnalysis(result);
    navigate("/select-feature");
  } catch (err) {
    console.error("Gemini error:", err);
    alert("Something went wrong. Try again later.");
    const response = await mockAnalyzeMood(inputMood);
setMoodAnalysis(response);
navigate("/select-feature");

  } */

/* useEffect(() => {
    (async () => {
      try {
        const response = await getMoodAnalysisFromGemini("I feel sad but hopeful");
        console.log("Test Gemini response:", response);
      } catch (err) {
        console.warn("Test Gemini call failed (may be due to quota):", err.message);
      }
    })();
  }, []); */

/*   const handleSubmit = async (e) => {
    e.preventDefault();
    setUserMood(inputMood);

    try {
      const result = await getMoodAnalysisFromGemini(inputMood);
      setMoodAnalysis(result);
    } catch (err) {
      console.error("Gemini error:", err.message);
      alert("Gemini quota exceeded or error occurred. Using backup analysis.");

      // Use mock fallback if Gemini fails
      const fallback = await mockAnalyzeMood(inputMood);
      setMoodAnalysis(fallback);
    }

    navigate("/select-feature");
  }; */
  const handleSubmit = async (e) => {
  e.preventDefault();
  setUserMood(inputMood);

  try {
    const result = await getMoodAnalysisFromMistral(inputMood);
    setMoodAnalysis(result);
  } catch (err) {
    console.error("Mistral error:", err.message);
    alert("Something went wrong. Using backup mood data.");
    const fallback = await mockAnalyzeMood(inputMood);
    setMoodAnalysis(fallback);
  }

  navigate("/select-feature");
};






  //   }

  return (
    <div className="App">
      <h1 className="title">MooDiva</h1>
      
      <h3 className='subtitle'><b>Tell me how you're feeling today ? ...</b></h3>
      <form className="mood-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="mood"
          value={inputMood}
          onChange={(e) => setInputMood(e.target.value)}
        />
        <button type="submit">😊 Get My Mood</button>
      </form>
    </div>
  );
}
