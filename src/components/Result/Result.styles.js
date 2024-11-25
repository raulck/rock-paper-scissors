import styled from "styled-components";

export const ResultContainer = styled.div`
  text-align: center;
  margin-top: 20px;
`;

export const Text = styled.p`
  font-size: 18px;
  color: #555;
`;

export const ResultText = styled.h2`
  font-size: 24px;
  margin-top: 10px;
  color: ${(props) => (props?.result === "You win!" ? "green" : "red")};
`;
