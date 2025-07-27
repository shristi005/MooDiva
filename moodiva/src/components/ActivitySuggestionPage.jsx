import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useMood } from '../context/MoodContext';

export default function ActivitySuggestionPage() {
  const navigate = useNavigate();
  const { moodAnalysis } = useMood();

  const activities = moodAnalysis?.activities || [
    { name: "Watch Mean Girls", link: "https://www.netflix.com/title/60034529" },
    { name: "Cooking with Chef Claude", link: "https://youtube.com/watch?v=chefClaudeDemo" },
  ];

  return (
    <div className="activity-page">
      <h2 className="activity-title">🧠 Activities & Resources</h2>

      <ul className="activity-list">
        {activities.map((act, i) => (
          <li key={i} className="activity-item">
            <span>{act.name}</span>
            <a
              href={act.link}
              target="_blank"
              rel="noopener noreferrer"
              className="activity-link"
            >
              Explore 🌐
            </a>
          </li>
        ))}
      </ul>

      <div className="activity-buttons">
        <button onClick={() => navigate("/playlist")}>🎵 Back to Playlist</button>
        <button onClick={() => navigate("/")}>🏠 Go to Home</button>
      </div>
    </div>
  );
}
