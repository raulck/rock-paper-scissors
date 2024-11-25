import React from "react";

import { Button } from "./ChoiceButton.styles";

const ChoiceButton = ({ choice, onClick }) => (
  <Button onClick={onClick}>{choice}</Button>
);

export default ChoiceButton;
