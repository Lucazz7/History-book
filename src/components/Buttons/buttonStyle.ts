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
export const ButtonCircle = styled.button<{
  backgroundCor: string;
  corFontBotao: string;
}>`
  background: ${(props) => props.backgroundCor};
  padding: 20px;
  text-align: center;
  border: none;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  border-radius: 50%;
  color: ${(props) => props.corFontBotao};
  &:hover {
    background: #ecf0f1;
  }
`;
