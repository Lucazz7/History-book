import styled from "styled-components";

export const Button = styled.button<{ width: number, height?: number}>`
  color: #fff;
  cursor: pointer;
  background: #ff7f2f;
  font-size: 1.2rem;
  height: ${props => props.height}%;
  width: ${props => props.width}%;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  font-weight: lighter;
  margin-bottom: 30px;
  padding: 10px;

  &:hover {
    background: #ecf0f1;
    color: black;
  }
`;
