import { useState } from "react";
import Play from "./Play";
import Popup from "./Popup";
const Game = () => {
  const [rulePopup, setRulePopup] = useState(false);
  const [togglePlayBtn, setTogglePlayBtn] = useState(false);
  const [myChoice, setMyChoice] = useState("");
  const [score, setScore] = useState(0);

  const setChoice = (id) => {
    setMyChoice(id);
    setTogglePlayBtn(true);
  };

  return (
    <>
      <div className="main_div">
        <div className="container">
          <div className="data_div">
            <h1>
              ROCK
              <br /> PAPER <br /> SCISSORS
            </h1>
          </div>
          <div className="right_div">
            <p className="first_child">Score</p>
            <p className="second_child">{score}</p>
          </div>
        </div>
        {togglePlayBtn ? (
          <Play
            choice={myChoice}
            setScr={setScore}
            toggle={setTogglePlayBtn}
            scr={score}
          />
        ) : (
          <div className="center_div">
            <button type="button" onClick={() => setChoice("rock")}>
              <img src="./images/rock.png" alt="ROCK" />
            </button>
            <button type="button" onClick={() => setChoice("scissor")}>
              <img src="./images/scissor.png" alt="SCISSORS" />
            </button>
            <button type="button" onClick={() => setChoice("paper")}>
              <img src="./images/paper.png" alt="PAPER" />
            </button>
          </div>
        )}
        <div className="end_div">
          <button type="button" onClick={() => setRulePopup(true)}>
            RULES
          </button>
          <Popup trigger={rulePopup} setTrigger={setRulePopup} />
        </div>
      </div>
    </>
  );
};

export default Game;
