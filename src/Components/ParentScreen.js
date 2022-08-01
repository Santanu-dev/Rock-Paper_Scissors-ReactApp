import React, { useEffect, useState } from "react";
import MainGameSection from "./MainGameSection";
import ScoreHeader from "./ScoreHeader";
import SelectionScreen from "./SelectionScreen";
import Rules from "./Rules";
import "../stylesheets/Parent.css";

function ParentScreen() {
  const [score, setScore] = useState(0);
  const [userSelection, setUserSelection] = useState("");
  const [houseSelect, setHouseSelect] = useState("");
  const [draw, setDraw] = useState(false);
  const [winner, setWinner] = useState(false);
  const [playAgain, setPlayAgain] = useState(false);
  const [showRules, setShowRules] = useState(false);

  useEffect(() => {
    // var sessionScore = sessionStorage.getItem('score') != null ? sessionStorage.getItem('score') : 0
    // setScore(sessionScore)
  }, []);

  //declare Winner
  useEffect(() => {
    console.log(winner, draw);

    switch (userSelection) {
      case "rock":
        if (houseSelect === "scissors") {
          setWinner(true);
          setTimeout(() => setScore(score + 1), 1000);
          sessionStorage.setItem("score", score);
        } else if (houseSelect === userSelection) {
          setDraw(true);
        }
        break;
      case "paper":
        if (houseSelect === "rock") {
          setWinner(true);
          setTimeout(() => setScore(score + 1), 1000);
          sessionStorage.setItem("score", score);
        } else if (houseSelect === userSelection) {
          setDraw(true);
        }
        break;
      case "scissors":
        if (houseSelect === "paper") {
          setWinner(true);
          setTimeout(() => setScore(score + 1), 1000);
          sessionStorage.setItem("score", score);
        } else if (houseSelect === userSelection) {
          setDraw(true);
        }
        break;
      default:
        break;
    }
  }, [userSelection, houseSelect]);

  //random computer selection

  function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  const houseSelection = () => {
    var no = getRndInteger(1, 3);
    no === 1
      ? setHouseSelect("rock")
      : no === 2
      ? setHouseSelect("paper")
      : setHouseSelect("scissors");
  };

  const handleClickRock = () => {
    houseSelection();
    setPlayAgain(false);
    setUserSelection("rock");
  };
  const handleClickPaper = () => {
    houseSelection();
    setPlayAgain(false);
    setUserSelection("paper");
    // console.log(userSelection)
  };
  const handleClickScissor = () => {
    houseSelection();
    setPlayAgain(false);
    setUserSelection("scissors");
    // console.log(userSelection)
  };

  const onPlayAgainClick = () => {
    setPlayAgain(true);
    setHouseSelect("");
    setUserSelection("");
    setDraw(false);
    setWinner(false);
  };

  const onShowRulesClick = () => {
    setShowRules(true)
  };

  const onCloseRulesClick = () => {
    setShowRules(false)
  };

  return (
    <div>
      {!showRules ? (
        <div>
          <ScoreHeader score={score} />
          {userSelection === "" || playAgain ? (
            <MainGameSection
              onShowRulesClick={onShowRulesClick}
              handleClickRock={handleClickRock}
              handleClickPaper={handleClickPaper}
              handleClickScissor={handleClickScissor}
            />
          ) : (
            <SelectionScreen
              onShowRulesClick={onShowRulesClick}
              onPlayAgainClick={onPlayAgainClick}
              userSelection={userSelection}
              houseSelection={houseSelect}
              winner={winner}
              draw={draw}
            />
          )}
        </div>
      ) : (
        <Rules onCloseRulesClick={onCloseRulesClick} />
      )}
    </div>
  );
}

export default ParentScreen;
