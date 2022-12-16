import styled from "styled-components";

export const HexagonDivDad = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0;
  padding: 0;
  overflow: auto;
  ::-webkit-scrollbar {
    box-shadow: inset 0 0 4px grey;
    border-radius: 10px;
    width: 0px;
  }
`;
