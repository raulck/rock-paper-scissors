import styled from "styled-components";

export const Button = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  border: 2px solid #444;
  border-radius: 5px;
  background-color: #f5f5f5;
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    background-color: #eee;
    transform: scale(1.15);
  }
`;
