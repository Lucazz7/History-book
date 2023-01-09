/* eslint-disable spaced-comment */
import styled from "styled-components";
import { darkTheme, lightTheme } from "../../styles/theme";

export interface ContainerButtonProps {
  bgColor: string;
  borderColor: string;
  color: string;
  hover: {
    bgColor: string;
    color: string;
  };
  width: 15 | 50 | 100;
  active: boolean;
}

export const variantToColor = {
  primary: {
    bgColor: lightTheme.primary,
    borderColor: lightTheme.border,
    color: lightTheme.text,
    hover: {
      bgColor: darkTheme.bg,
      color: darkTheme.text,
    },
  },
  secondary: {
    bgColor: darkTheme.bg3,
    borderColor: darkTheme.border,
    color: darkTheme.text,
    hover: {
      bgColor: lightTheme.bg,
      color: lightTheme.text,
    },
  },
  outline: {
    bgColor: darkTheme.bg2,
    borderColor: darkTheme.text,
    color: darkTheme.text,
    hover: {
      bgColor: lightTheme.text,
      color: lightTheme.text,
    },
  },
};

export const Button = styled.button<ContainerButtonProps>`
  color: #fff;
  cursor: pointer;
  background: ${(props) => props.bgColor};
  font-size: 1.2rem;
  width: ${(props) => props.width}%;
  border: none;
  border-radius: 5px;
  font-size: 1.4rem;
  font-weight: lighter;
  margin-bottom: 30px;
  padding: 10px;
  &:hover {
    background: ${(props) => (props.active ? "#ecf0f1" : "grey")};
    color: ${(props) => (props.active ? "black" : "")};
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
