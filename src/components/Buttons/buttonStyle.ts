import styled from "styled-components";

export const Button = styled.button`
  color: #fff;
  cursor: pointer;
  background: #ff7f2f;
  font-size: 1.2rem;
  height: 45px;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  font-weight: lighter;
  margin-bottom: 30px;
  padding: 10px;

  &:hover {
    background: #ecf0f1;
    color: black;
    border: 1px solid #ff7f2f;
  }
`;

//TODO: Button Circle
export const ButtonCircle = styled.button`
  color: #fff;
  cursor: pointer;
  background: #ff7f2f;
  font-size: 1.2rem;
  border: none;
  border-radius: 50%;
  font-size: 1rem;
  font-weight: lighter;
  padding: 2%;
`;
