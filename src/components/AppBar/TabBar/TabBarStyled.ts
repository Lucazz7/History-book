import styled from "styled-components";

export const TabBarStyle = styled.div<{
  backgroundTab: string;
  borderTab: string;
}>`
  background: ${(props) => props.backgroundTab};
  display: flex;
  border-radius: ${(props) => props.borderTab};
  flex-direction: center;
  align-items: center;
  justify-content: space-around;
  height: 8rem;
  width: 100%;
`;

export const TabBarItem = styled.div`
  display: flex;
  flex-direction: center;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  margin: 10px 10px;
  background: #00ffff;
`;
