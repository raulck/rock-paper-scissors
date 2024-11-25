import React from "react";

import { ScoreContainer, Title, ScoreText, Score } from "./Scoreboard.styles";

const Scoreboard = ({ score }) => (
  <ScoreContainer>
    <Title>Result</Title>
    <Score>
      <ScoreText>
        Player: <span>{score.player}</span>
      </ScoreText>
      <ScoreText>
        Computer: <span>{score.computer}</span>
      </ScoreText>
    </Score>
  </ScoreContainer>
);

export default Scoreboard;
