import "./styles.css";
import { useState } from "react";

var bookRecs = {
  "feel fool": ["Fooled by Randomness", "LOTR"],
  shiva: ["fllor"]
};

var bookRat = {
  "Fooled by Randomness": "4/5"
};

var genreObj = Object.keys(bookRecs);
var bookObj = Object.values(bookRecs);

export default function App() {
  return (
    <div className="App">
      <h1>
        {" "}
        <span role="img" aria-label="Book emoji">
          📚
        </span>{" "}
        My Book Recommendations
      </h1>
      <p>Checkout my favorite books. Select a genre to get started</p>
      {genreObj}
      <br />
      {genreObj[0]}
      <br />
      {bookRecs[genreObj[0]][0]}
      <br />
      {bookRat[bookRecs[genreObj[0]][0]]}
    </div>
  );
}
