import styled from "styled-components";

export const Input = styled.input<{
  corInput: string;
  widthInput: string;
  fontColorInput: string;
}>`
  width: ${(props) => props.widthInput};
  height: 45px;
  border: none;
  border-radius: 5px;
  color: ${(props) => props.fontColorInput};
  font-size: 1.5rem;
  font-weight: lighter;
  margin-bottom: 30px;
  background: ${(props) => props.corInput};
  padding: 12px;
`;

export const FileInput = styled.input`
  width: 0px;
`;

export const FileLabel = styled.label`
  z-index: 1;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  table-layout: fixed;
  border: 1px dashed #a4a4a4;
  border-radius: 3px;
  text-align: center;
  overflow: hidden;
  cursor: pointer;
  padding: 1.5rem;
`;

export const FileBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid #a4a4a4;
  border-radius: 3px;
  overflow: hidden;
  padding: 5rem;
`;

export const BoxFile = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid #a4a4a4;
  border-radius: 3px;
  overflow: hidden;
`;
