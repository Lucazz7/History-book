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
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  border-radius: 4px;
  font-size: 14px;
  font-weight: 600;
  color: #fff;
  font-size: 14px;
  padding: 10px 12px;
  background-color: #ff7f2f;
  box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.25);
`;
