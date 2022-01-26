import "./styles.css";
import { useState } from "react";

var bookRecs = {
  "feel fool": ["Fooled by Randomness", "Sapiens", "Beginning of Infinity"],
  "to think": ["Naval Almanack", "Psychology of Money"],
  "immersive imagination": ["Harry Potter", "LOTR"]
};

var bookRatings = {
  "Fooled by Randomness": "4/5",
  Sapiens: "4.5/5",
  "Naval Almanack": "4/5",
  "Psychology of Money": "4/5",
  "Harry Potter": "4/5",
  LOTR: "4/5",
  "Beginning of Infinity": "NA"
};

var genreArr = Object.keys(bookRecs);

export default function App() {
  var [bookNames, setBookNames] = useState("");
  var [bookRank, setBookRank] = useState("");
  function genreClickHandler(event) {
    //console.log(event);
    var brc = bookRecs[event];
    bookNames = brc;
    setBookNames(bookNames);
    bookRank = bookRatings[event];
    setBookRank(bookRank);
    //console.log(bookNames, brc);
  }

  var bNArray = [];
  for (var i = 0; i < bookNames.length; i++) {
    bNArray.push(bookNames[i]);
  }

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
      <div>
        {genreArr.map((item) => (
          <span id="genres" key={item} onClick={() => genreClickHandler(item)}>
            {" "}
            {item}
          </span>
        ))}
      </div>
      <hr></hr>
      {bNArray.map((book) => (
        <ul className="books">
          <span key={book}>
            <li>
              <span className="bookName">{book}</span>
              <br />
              <span className="bookRating">{bookRatings[book]}</span>
            </li>
          </span>
        </ul>
      ))}
    </div>
  );
}
