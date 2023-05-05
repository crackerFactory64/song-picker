import React from "react";
import Song from "./Song";
import data from "./data.json";
import "./style.css";

const SONGS = data.songs;

function App() {
  const [showContent, setShowContent] = React.useState(true);
  const [currentSong, setCurrentSong] = React.useState(generateSong);

  function generateMessage() {
    const MESSAGES = [
      "How about...",
      "What do you reckon to this?",
      "This one?",
      "Fancy it?",
      "You know you want to...",
      "No worries if not...",
      "Go on...",
      "Thoughts?",
    ];
    return MESSAGES[Math.floor(Math.random() * MESSAGES.length)];
  }

  function generateSong() {
    const randomIndex = Math.floor(Math.random() * SONGS.length);
    return (
      <Song
        artist={SONGS[randomIndex].artist}
        showContent={showContent}
        song={SONGS[randomIndex].song}
      />
    );
  }

  function handleClick() {
    setShowContent(false);
    setCurrentSong(generateSong());
    setTimeout(() => setShowContent(true), 50);
  }

  return (
    <div className="container">
      <div className="app">
        <h1 className="hidden">Song Picker</h1>
        <p className={showContent ? "app__message show" : "app__message"}>
          {generateMessage()}
        </p>
        <div className={showContent ? "app__song show" : "app__song"}>
          {currentSong}
        </div>
        <button onClick={handleClick}>Another?</button>
      </div>
    </div>
  );
}

export default App;
