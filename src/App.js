import React, { useState } from "react";
import "./styles.css";

var movieDictionary = {
  romantic: "1.purple hearts 2.YJHD",
  scifi: "1.The Terminator 2.Inception",
  comedy: "1.golmal3 2.The Jerk"
};

var watch = Object.keys(movieDictionary);

export default function App() {
  const [meaning, setMeaning] = useState("");

  function moviebasedongenre(genre) {
    var meaning = movieDictionary[genre];
    setMeaning(meaning);
  }

  return (
    <div className="App">
      <h1>MovieGasam</h1>
      {watch.map(function (genre) {
        return (
          <span
            className="chips"
            onClick={() => moviebasedongenre(genre)}
            style={{ fontSize: "2rem", padding: "0.5rem", cursor: "pointer" }}
            key={genre}
          >
            {genre}
          </span>
        );
      })}
      <hr />

      <h2> {meaning} </h2>
    </div>
  );
}
