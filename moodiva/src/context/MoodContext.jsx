import React, { createContext, useContext, useState } from "react";

const MoodContext = createContext();

export function MoodProvider({ children }) {
  const [userMood, setUserMood] = useState("");
  const [moodAnalysis, setMoodAnalysis] = useState(null);

  return (
    <MoodContext.Provider value={{ userMood, setUserMood, moodAnalysis, setMoodAnalysis }}>
      {children}
    </MoodContext.Provider>
  );
}

export function useMood() {
  return useContext(MoodContext);
}
