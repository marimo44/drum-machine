import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [displayText, setDisplayText] = useState("");

  const drumSounds = [
    {
      name: "Heater 1",
      key: "Q",
      src: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-1.mp3",
    },
    {
      name: "Heater 2",
      key: "W",
      src: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-2.mp3",
    },
    {
      name: "Heater 3",
      key: "E",
      src: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-3.mp3",
    },
    {
      name: "Heater 4",
      key: "A",
      src: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-4_1.mp3",
    },
    {
      name: "Clap",
      key: "S",
      src: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-6.mp3",
    },
    {
      name: "Open-HH",
      key: "D",
      src: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Dsc_Oh.mp3",
    },
    {
      name: "Kick-n'-Hat",
      key: "Z",
      src: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Kick_n_Hat.mp3",
    },
    {
      name: "Kick",
      key: "X",
      src: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/RP4_KICK_1.mp3",
    },
    {
      name: "Closed-HH",
      key: "C",
      src: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Cev_H2.mp3",
    },
  ];

  useEffect(() => {
    const handleKeyPress = (event) => {
      const sound = drumSounds.find(
        (sound) => sound.key === event.key.toUpperCase()
      );
      if (sound) {
        const drumPad = document.getElementById(`drum-${sound.key}`);
        const audioElement = drumPad.querySelector(".clip");
        audioElement.play();
        setDisplayText(sound.name);
      }
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, []);

  return (
    <>
      <div
        id="drum-machine"
        className="container p-5 my-5 bg-dark text-white shadow-lg"
      >
        <h2 id="title">Drum Machine</h2>
        <div id="display-container">
          <div
            id="display"
            className="container p-1 my-4 text-bg-light rounded-2"
          >
            {displayText}
          </div>
        </div>
        <div id="drum-pad-container" className="container">
          <div className="row g-2">
            {drumSounds.map((item) => (
              <div key={item.key} className="col-4">
                <button
                  key={item.key}
                  id={`drum-${item.key}`}
                  className="drum-pad btn btn-outline-secondary w-100 rounded-pill"
                  onClick={(e) => {
                    const audioElement = e.currentTarget.querySelector(".clip");
                    audioElement.play();
                    setDisplayText(item.name);
                  }}
                >
                  {item.key}
                  <audio id={item.key} className="clip" src={item.src}></audio>
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
