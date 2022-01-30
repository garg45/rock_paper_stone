import React from "react";
import { useState, useEffect } from "react";

const Play = ({ choice, setScr, toggle, scr }) => {
  const [playerWin, setPlayerWin] = useState("");
  const [yourChoice, setYourChoice] = useState("");

  useEffect(() => {
    Result();
  }, []);
  const Result = async () => {
    const choices = ["rock", "scissor", "paper"];
    const ch = choices[Math.floor(Math.random() * 3)];
    if (choice === "rock" && ch === "scissor") {
      setPlayerWin("YOU WON");
      setScr(scr + 1);
    } else if (choice === "rock" && ch === "paper") {
      setPlayerWin("YOU LOSE");
      setScr(scr - 1);
    } else if (choice === "scissor" && ch === "paper") {
      setPlayerWin("YOU WON");
      setScr(scr + 1);
    } else if (choice === "scissor" && ch === "rock") {
      setPlayerWin("YOU LOSE");
      setScr(scr - 1);
    } else if (choice === "paper" && ch === "rock") {
      setPlayerWin("YOU WON");
      setScr(scr + 1);
    } else if (choice === "paper" && ch === "scissor") {
      setPlayerWin("YOU LOSE");
      setScr(scr - 1);
    } else {
      setPlayerWin("IT IS DRAW");
    }
    setYourChoice(ch);
  };
  return (
    <>
      <div className="center_div">
        <button type="button" className="btn">
          <p className="resultName">YOU</p>
          <img src={`./images/${choice}.png`} alt={choice} />
        </button>
        <button type="button">
          <p className="resultName">OPPONENT</p>
          <img src={`./images/${yourChoice}.png`} alt={yourChoice} />
        </button>
        <div className="result">
          <p className="para">{playerWin}</p>
          <button
            className="result_button"
            type="button"
            onClick={() => toggle(false)}
          >
            PLAY AGAIN
          </button>
        </div>
      </div>
    </>
  );
};

export default Play;
