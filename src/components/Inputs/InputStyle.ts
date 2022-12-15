import styled from "styled-components";

export const Input = styled.input`
  width: 60%;
  height: 45px;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  font-weight: lighter;
  margin-bottom: 30px;
  background: #ecf0f1;
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
