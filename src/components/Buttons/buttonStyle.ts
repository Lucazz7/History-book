import styled from "styled-components";

export const Button = styled.button<{
  backgroundColorButton: string;
  ColorFontStatic: string;
  ColorFontHover: string;
  widthButton: string;
}>`
  color: ${(props) => props.ColorFontStatic};
  cursor: pointer;
  width: ${(props) => props.widthButton};
  background: ${(props) => props.backgroundColorButton};
  font-size: 1.2rem;
  height: 45px;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  font-weight: lighter;
  padding: 10px;

  &:hover {
    background: #ecf0f1;
    color: ${(props) => props.ColorFontHover};
    border: 1px solid ${(props) => props.backgroundColorButton};
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
  &:hover {
    background: #ecf0f1;
    color: black;
    border: 1px solid #ff7f2f;
  }
`;
