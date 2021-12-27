import "./styles.css";
import { useState } from "react";

// ex04-05
var helloTo = "world";
var colorHelloTo = "blue";

// ex11
var emojiDictionary = {
  "😀": "Grinning face",
  "😉": "Winking face",
  "😏": "Smirking face"
};

export default function App() {
  // Ex06-07
  var likeCounter = 0;
  function likeHandler() {
    likeCounter += 1;
    console.log("Liked", likeCounter);
  }
  // Ex08
  var [likeOnScreen, setLikeOnScreen] = useState(0);
  function likeOnScreenHandler() {
    likeOnScreen += 1;
    setLikeOnScreen(likeOnScreen);
  }

  // Ex10
  var [inputChange, setInputChange] = useState("");
  function inputChangeHandler(event) {
    inputChange = event.target.value;
    setInputChange(inputChange);
  }

  // Ex11
  var [emojiMeaning, setEmojiMeaning] = useState("");
  function emojiMeaningScreen(event) {
    var inputEmoji = event.target.value;
    if (inputEmoji in emojiDictionary) {
      emojiMeaning = emojiDictionary[inputEmoji];
    } else {
      emojiMeaning = "Meaning not found";
    }
    setEmojiMeaning(emojiMeaning);
  }

  return (
    <div className="App">
      <h1>
        Welcome,
        <span style={{ backgroundColor: colorHelloTo }}>{helloTo}</span>!
      </h1>
      <button onClick={likeHandler}>Like-Share-Subscribe</button>
      <br></br>
      <br></br>
      <button onClick={likeOnScreenHandler}>Like</button> {likeOnScreen}
      <br></br>
      <br></br>
      <h2>Msg from Creator:</h2>
      <h3>{inputChange}</h3>
      <textarea
        placeholder="Creator Zone"
        onChange={inputChangeHandler}
      ></textarea>
      <br></br>
      <h2>Emoji from {helloTo}:</h2>
      <textarea placeholder="Reaction" onChange={emojiMeaningScreen}></textarea>
      <h3>{emojiMeaning}</h3>
    </div>
  );
}
