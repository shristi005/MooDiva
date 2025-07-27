import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useMood } from '../context/MoodContext';

export default function QuirkyAdvicePage() {
  const navigate = useNavigate();
  const { moodAnalysis, userMood } = useMood();

  return (
    <div className="quirky-advice-page">
      <h1 className="title">🌟 Quirky Advice 🌟</h1>
      <div className="advice-box">
        <p><strong>Mood:</strong> {userMood}</p>
        <p><strong>Vibe:</strong> {moodAnalysis?.vibe || "Stay chill, you're awesome!"}</p>
        <p><strong>Tip:</strong> {moodAnalysis?.tip || "Drink water and smile!"}</p>
        <p><strong>Emoji:</strong> {moodAnalysis?.emoji || "😄"}</p>
      </div>

      <div className="advice-buttons">
        <button onClick={() => navigate("/playlist")}>🎵 Playlist For You</button>
        <button onClick={() => navigate("/activities")}>🎯 Activities For You</button>
      </div>
    </div>
  );
}
