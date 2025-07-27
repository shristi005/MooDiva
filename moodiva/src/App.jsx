import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { MoodProvider } from "./context/MoodContext";

import HomePage from "./components/HomePage";
import SelectFeature from "./components/SelectFeature";
import QuirkyAdvicePage from "./components/QuirkyAdvicePage";
import PlaylistPage from "./components/PlaylistPage";
import ActivitySuggestionPage from "./components/ActivitySuggestionPage";

export default function App() {
  return (
    <MoodProvider>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/select-feature" element={<SelectFeature />} />
          <Route path="/quirky-advice" element={<QuirkyAdvicePage />} />
          <Route path="/playlist" element={<PlaylistPage />} />
          <Route path="/activities" element={<ActivitySuggestionPage />} />
        </Routes>
      </Router>
    </MoodProvider>
  );
}
