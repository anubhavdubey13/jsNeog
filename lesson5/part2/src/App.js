import "./styles.css";
import { useState } from "react";

var emojiDictionary = {
  "🤩": "Star-stuck",
  "😉": "Winking face",
  "😀": "Grinning face",
  "🤑": "Money-mouth face",
  "🤔": "Thinking face"
};

var emojiArr = Object.keys(emojiDictionary);

export default function App() {
  var [outputMeaning, setOutputMeaning] = useState("");
  function inputChangeHandler(event) {
    var emoji = event.target.value;
    if (emoji in emojiDictionary) {
      outputMeaning = emojiDictionary[emoji];
    } else {
      outputMeaning = "Meaning not found";
    }
    setOutputMeaning(outputMeaning);
  }

  function emojiClickHandler(item) {
    //console.log("clicked", item);
    outputMeaning = emojiDictionary[item];
    setOutputMeaning(outputMeaning);
  }

  return (
    <div className="App">
      <h1>Emoji Meaning</h1>
      <textarea onChange={inputChangeHandler}></textarea>
      <h2>Meaning:</h2>
      <output>{outputMeaning}</output>
      <h3>Emojis we know:</h3>
      {emojiArr.map((item) => {
        return (
          <span
            key={item}
            onClick={() => emojiClickHandler(item)}
            style={{ padding: "1rem", fontSize: "2rem" }}
          >
            {item}
          </span>
        );
      })}
    </div>
  );
}
