import styled from "styled-components";

export const ComboBox = styled.select<{
  comboBoxWidth: string;
  comboBoxColor: string;
}>`
  width: ${(props) => props.comboBoxWidth};
  height: 40px;
  border-radius: 5px;
  background: ${(props) => props.comboBoxColor};
  border: 0px;
  padding: 0px 10px;
`;

export const ComboBoxOption = styled.option<{ width?: number }>`
  height: 40px;
  border-radius: 5px;
  border: 0px;
  padding: 0px 10px;
`;
