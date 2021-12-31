import "./styles.css";
import { useState } from "react";

var flagDictionary = {
  "🏁": "Chequered",
  "🚩": "Triangular Red",
  "🎌": "Crossed",
  "🏴‍☠️": "Pirate",
  "🇮🇳": "India"
};

var flagArray = Object.keys(flagDictionary);

export default function App() {
  var [inputMeaning, setInputMeaning] = useState("");
  function inputHandler(event) {
    var inputText = event.target.value;
    var findInDictionary = flagDictionary[inputText];
    //console.log(event.target.value);
    if (findInDictionary === "undefined") {
      inputMeaning = "Name not available in database";
    } else {
      inputMeaning = findInDictionary;
    }
    setInputMeaning(inputMeaning);
  }

  function flagClickHandler(item) {
    //console.log(item);
    inputMeaning = flagDictionary[item];
    setInputMeaning(inputMeaning);
  }

  return (
    <div className="App">
      <h1>Flag Names</h1>
      <h2>Enter flag to find its name</h2>
      <textarea onChange={inputHandler}></textarea>
      <h3>Meaning: {inputMeaning}</h3>
      <h3> Flags:</h3>
      {flagArray.map((item) => {
        return (
          <span
            key={item}
            onClick={() => flagClickHandler(item)}
            style={{ fontSize: "2rem", padding: "1rem", cursor: "pointer" }}
          >
            {item}
          </span>
        );
      })}
    </div>
  );
}
