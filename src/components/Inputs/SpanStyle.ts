import styled from "styled-components";

export const SpanStyle = styled.span<{ corBorda: string }>`
  font-family: "Raleway", "Open Sans", sans-serif;
  margin: 0;
  line-height: 1;
  border-bottom: 3px solid ${(props) => props.corBorda};
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
