import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function SelectFeature() {
  const navigate = useNavigate();

  return (
    <div className="select-feature-page">
      <h1 className="title">Mood Captured!</h1>
      <p className="subtitle">Ready to experience your vibe?</p>

      <div className="feature-buttons">
        <button onClick={() => navigate("/quirky-advice")}>💡 Quirky Advice</button>
        <button onClick={() => navigate("/playlist")}>🎵 Mood Playlist</button>
        <button onClick={() => navigate("/activities")}>🎯 Fun Activities</button>
      </div>
    </div>
  );
}
