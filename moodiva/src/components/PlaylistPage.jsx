import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useMood } from '../context/MoodContext';

export default function PlaylistPage() {
  const navigate = useNavigate();
  const { moodAnalysis } = useMood();

  const playlist = moodAnalysis?.playlist || {
    name: "Feel Good Mix",
    songs: [
      { title: "Happy", artist: "Pharrell Williams", link: "https://open.spotify.com/track/1" },
      { title: "Blinding Lights", artist: "The Weeknd", link: "https://open.spotify.com/track/2" },
    ],
  };

  return (
    <div className="playlist-page">
      <h1 className="title">Your Vibe Playlist 🎶</h1>
      <h2 className="playlist-name">🎵 {playlist.name}</h2>

      <ul className="song-list">
        {playlist.songs.map((song, index) => (
          <li key={index} className="song-item">
            <span>
              <strong>{song.title}</strong> by {song.artist}
            </span>
            <a
              href={song.link}
              target="_blank"
              rel="noopener noreferrer"
              className="listen-button"
            >
              Listen ▶
            </a>
          </li>
        ))}
      </ul>

      <div className="playlist-buttons">
        <button onClick={() => navigate("/quirky-advice")}>🔙 Back to Advice</button>
        <button onClick={() => navigate("/activities")}>🎯 Go to Activities</button>
      </div>
    </div>
  );
}
