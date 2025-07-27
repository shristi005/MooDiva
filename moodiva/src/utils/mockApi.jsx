export async function mockAnalyzeMood(mood) {
  await new Promise((res) => setTimeout(res, 500));
  const normalized = mood.toLowerCase();

  if (normalized.includes("sad") || normalized.includes("down")) {
    return {
      vibe: "You need a virtual hug 💙",
      tip: "Watch something silly and hydrate.",
      emoji: "🥺",
      playlist: {
        name: "Cheer Up, Buddy",
        songs: [
          { title: "Fix You", artist: "Coldplay", link: "https://open.spotify.com/track/7LVHVU3tWfcxj5aiPFEW4Q" },
          { title: "Let It Go", artist: "Idina Menzel", link: "https://open.spotify.com/track/0qcr5FMsEO85NAQjrlDRKo" },
        ],
      },
      activities: [
        { name: "Watch Friends", link: "https://www.netflix.com/title/70153404" },
        { name: "Bake cookies", link: "https://www.youtube.com/watch?v=LsnEE5ykwCs" },
      ],
    };
  } else if (normalized.includes("happy") || normalized.includes("joyful")) {
    return {
      vibe: "You're glowing 🌟",
      tip: "Share your joy, it's contagious!",
      emoji: "😄",
      playlist: {
        name: "Happy Vibes",
        songs: [
          { title: "Happy", artist: "Pharrell Williams", link: "https://open.spotify.com/track/60nZcImufyMA1MKQY3dcCH" },
          { title: "Walking on Sunshine", artist: "Katrina & The Waves", link: "https://open.spotify.com/track/11FRGMJUILT6wfq3a88iQ9" },
        ],
      },
      activities: [
        {
  name: "Dance Party",
  link: "https://www.youtube.com/watch?v=vJkvQO6jBfY"
},
{
  name: "Picnic Plan",
  link: "https://www.youtube.com/watch?v=roFmcu2IJF4"
},

      ],
    };
  } else if (normalized.includes("motivated")) {
    return {
      vibe: "Go, champ! 🚀",
      tip: "Channel your energy into something impactful.",
      emoji: "🔥",
      playlist: {
        name: "Hustle Mode",
        songs: [
          { title: "Eye of the Tiger", artist: "Survivor", link: "https://open.spotify.com/track/2KH16WveTQWT6KOG9Rg6e2" },
          { title: "Stronger", artist: "Kanye West", link: "https://open.spotify.com/track/6C7RJEIUDqKkJRZVWdkfkH" },
        ],
      },
      activities: [
       {
  name: "Plan & Crush Goals",
  link: "https://www.youtube.com/watch?v=61rnnKWO_do&t=1s&ab_channel=EveryDayBrute"
},
{
  name: "Workout Session",
  link: "https://www.youtube.com/watch?v=ZrNXcyoy8-w"
},

      ],
    };
  } else if (normalized.includes("demotivated") || normalized.includes("lazy")) {
    return {
      vibe: "Recharge mode 💤",
      tip: "Take a break. You’re allowed to rest.",
      emoji: "😪",
      playlist: {
        name: "Low Energy Days",
        songs: [
          { title: "Breathe Me", artist: "Sia", link: "https://open.spotify.com/track/7jqzZyJJLrpkRFYGpkqSK6" },
          { title: "The Night We Met", artist: "Lord Huron", link: "https://open.spotify.com/track/3hRV0jL3vUpRrcy398teAU" },
        ],
      },
      activities: [
        { name: "10-Min Relaxation", link: "https://www.youtube.com/watch?v=cmAbdJkGaHU" },
        { name: "Color Something", link: "https://www.youtube.com/watch?v=UW6H5dAPuhY" },
      ],
    };
  } else if (normalized.includes("anxious") || normalized.includes("nervous")) {
    return {
      vibe: "Deep breaths 💨",
      tip: "Ground yourself—look around, name 5 things you see.",
      emoji: "😬",
      playlist: {
        name: "Calm & Steady",
        songs: [
          { title: "Weightless", artist: "Marconi Union", link: "https://open.spotify.com/track/6kkwzB6hXLIONkEk9JciA6" },
          { title: "Someone Like You", artist: "Adele", link: "https://open.spotify.com/track/4kflIGfjdZJW4ot2ioixTB" },
        ],
      },
      activities: [
        { name: "Guided Meditation", link: "https://www.youtube.com/watch?v=inpok4MKVLM" },
        { name: "Journaling Prompt", link: "https://www.youtube.com/watch?v=V14--j2qjvM" },
      ],
    };
  } else if (normalized.includes("spiritual") || normalized.includes("religious")) {
    return {
      vibe: "You're deeply centered 🙏",
      tip: "Reflect or pray — align with your values.",
      emoji: "🕊️",
      playlist: {
        name: "Sacred Sounds",
        songs: [
          {
  title: "Shiv Tandav Stotram",
  artist: "Sung by Shankar Mahadevan",
  link: "https://open.spotify.com/track/0HBRjvAY0I7U7XEMfBrK33"
},
         {
  title: "River Flows in You",
  artist: "Yiruma",
  link: "https://open.spotify.com/track/7lvymt2nReENx4b2TSvL0D"
},
        ],
      },
      activities: [
        { name: "Chant & Breathe", link: "https://www.youtube.com/watch?v=QWlpZMdNuIg" },
  { name: "Light a Diya/Candle", link: "https://www.youtube.com/watch?v=40c7dfGiD6s" },
      ],
    };
  } else if (normalized.includes("loved") || normalized.includes("affection")) {
    return {
      vibe: "Love is in the air 💞",
      tip: "Let the people you love know!",
      emoji: "❤️",
      playlist: {
        name: "Feel the Love",
        songs: [
          { title: "Perfect", artist: "Ed Sheeran", link: "https://open.spotify.com/track/0tgVpDi06FyKpA1z0VMD4v" },
          { title: "All of Me", artist: "John Legend", link: "https://open.spotify.com/track/3U4isOIWM3VvDubwSI3y7a" },
        ],
      },
      activities: [
         {
    name: "Write a Note",
    link: "https://www.youtube.com/watch?v=V14--j2qjvM"
  },
  {
    name: "Call Your Friend",
    link: "https://www.youtube.com/watch?v=E2Eq-Ygjw1A"
  }
      ],
    };
  } else if (normalized.includes("angry") || normalized.includes("mad")) {
    return {
      vibe: "Hot-headed! 🔥",
      tip: "Step away. Breathe. Yell into a pillow if needed.",
      emoji: "😠",
      playlist: {
        name: "Let It Out",
        songs: [
          { title: "Numb", artist: "Linkin Park", link: "https://open.spotify.com/track/2nLtzopw4rPReszdYBJU6h" },
          { title: "Break Stuff", artist: "Limp Bizkit", link: "https://open.spotify.com/artist/165ZgPlLkK7bf5bDoFc6Sb" },
        ],
      },
      activities: [
        {
  name: "Punch a Pillow",
  link: "https://www.youtube.com/watch?v=tc22rbvvk5g"
},
{
  name: "Kickboxing (Beginner Cardio)",
  link: "https://www.youtube.com/watch?v=rMyauCn-pvE"
},
      ],
    };
  } else if (normalized.includes("bored")) {
    return {
      vibe: "Let's shake things up 🔄",
      tip: "Do something random and silly right now.",
      emoji: "😐",
      playlist: {
        name: "Anti-Boredom Beats",
        songs: [
          { title: "Uptown Funk", artist: "Bruno Mars", link: "https://open.spotify.com/track/32OlwWuMpZ6b0aN2RZOeMS" },
          { title: "Can't Stop", artist: "Red Hot Chili Peppers", link: "https://open.spotify.com/track/3ZOEytgrvLwQaqXreDs2Jx" },
        ],
      },
      activities: [
        { name: "Try Origami", link: "https://www.youtube.com/watch?v=sDYgTmT0wWU&ab_channel=Yasmin%27sHandiwork" },
        { name: "Fun Fact Game", link: "https://www.youtube.com/watch?v=08I_autHhJQ&t=2s&ab_channel=WatchItPlayed" },
      ],
    };
  }

  // Default fallback
  return {
    vibe: "You're uniquely you 🧡",
    tip: "Take 5 deep breaths. Hydrate. You've got this.",
    emoji: "✨",
    playlist: {
      name: "MoodMix",
      songs: [
        { title: "Just the Way You Are", artist: "Bruno Mars", link: "https://open.spotify.com/track/7BqBn9nzAq8spo5e7cZ0dJ" },
        { title: "Stronger", artist: "Kelly Clarkson", link: "https://open.spotify.com/track/0EaReuy2x6Mvz4mM4wZkbf" },
      ],
    },
    activities: [
      {
    name: "5‑Minute Journal",
    link: "https://www.youtube.com/watch?v=V14--j2qjvM"
  },
  {
    name: "Nature Walk",
    link: "https://www.youtube.com/watch?v=PmVaQBwy8Yk"
  },
    ],
  };
}
