import React from "react";

import { ResultContainer, Text, ResultText } from "./Result.styles";

const Result = ({ playerChoice, computerChoice, result }) => (
  <ResultContainer>
    {playerChoice && computerChoice && (
      <>
        <Text>You chose: {playerChoice}</Text>
        <Text>Computer chose: {computerChoice}</Text>
        <ResultText result={result}>{result}</ResultText>
      </>
    )}
  </ResultContainer>
);

export default Result;
