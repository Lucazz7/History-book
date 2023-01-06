import styled from "styled-components";

export const AlertaStyle = styled.div<{
  backgroundAlert: string;
  fontColorAlert: string;
  widthAlert: string;
}>`
  background-color: ${(props) => props.backgroundAlert};
  color: ${(props) => props.fontColorAlert};
  padding: 10px;
  border-radius: 5px;
  margin-bottom: 10px;
  width: ${(props) => props.widthAlert};
  font-size: 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  opacity: 0.9;
`;
