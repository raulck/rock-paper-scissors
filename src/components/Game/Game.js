import React, { useState } from "react";
import Header from "../Header/Header";
import ChoiceButton from "../ChoiceButton/ChoiceButton";
import Result from "../Result/Result";
import Scoreboard from "../Scoreboard/Scoreboard";
import { GameContainer, ButtonGroup } from "./Game.styles";

import { Button } from "../ChoiceButton/ChoiceButton.styles";

const choices = ["Rock", "Paper", "Scissors"];

const Game = () => {
  const [playerChoice, setPlayerChoice] = useState(null);
  const [computerChoice, setComputerChoice] = useState(null);
  const [result, setResult] = useState("");
  const [score, setScore] = useState({ player: 0, computer: 0 });

  const playGame = (choice) => {
    const computer = choices[Math.floor(Math.random() * choices.length)];
    setPlayerChoice(choice);
    setComputerChoice(computer);

    determineWinner(choice, computer);
  };

  //   const determineWinner = (player, computer) => {
  //     if (player === computer) {
  //       setResult("It's a draw!");
  //     } else if (
  //       (player === "Rock" && computer === "Scissors") ||
  //       (player === "Paper" && computer === "Rock") ||
  //       (player === "Scissors" && computer === "Paper")
  //     ) {
  //       setResult("You win!");
  //       setScore((prev) => ({ ...prev, player: prev.player + 1 }));
  //     } else {
  //       setResult("You lose!");
  //       setScore((prev) => ({ ...prev, computer: prev.computer + 1 }));
  //     }
  //   };

  const determineWinner = (player, computer) => {
    const winningConditions = {
      Rock: "Scissors",
      Paper: "Rock",
      Scissors: "Paper",
    };

    if (player === computer) {
      setResult("It's a draw!");
    } else if (winningConditions[player] === computer) {
      setResult("You win!");
      setScore((prev) => ({ ...prev, player: prev.player + 1 }));
    } else {
      setResult("You lose!");
      setScore((prev) => ({ ...prev, computer: prev.computer + 1 }));
    }
  };

  const handleResetGame = () => {
    setPlayerChoice(null);
    setComputerChoice(null);
    setResult("");
    setScore({ player: 0, computer: 0 });
  };

  return (
    <GameContainer>
      <Header />
      <Scoreboard score={score} />
      <ButtonGroup>
        {choices.map((choice) => (
          <ChoiceButton
            key={choice}
            choice={choice}
            onClick={() => playGame(choice)}
          />
        ))}
      </ButtonGroup>
      <Result
        playerChoice={playerChoice}
        computerChoice={computerChoice}
        result={result}
      />
      {playerChoice && <Button onClick={handleResetGame}>Reset game</Button>}
    </GameContainer>
  );
};

export default Game;
