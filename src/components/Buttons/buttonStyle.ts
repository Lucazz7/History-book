import styled from "styled-components";

export const Button = styled.button<{ width: number, height?: number, active: boolean }>`
  color: #fff;
  cursor: pointer;
  background: ${props => props.active ? '#ff7f2f' : 'grey'};
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
    background: ${props => props.active ? '#ecf0f1' : 'grey'}; 
    color: ${props => props.active ? 'black' : ''}; ;
  }
`;
