import styled from "styled-components";

export const SideBarStyle = styled.div`
  width: 10%;
  height: 100%;
  background: rgba(255, 94, 0, 0.989);
  backdrop-filter: blur(6px);
  position: fixed;
  display: block;
  top: 0;
  left: 0;
`;

export const SideBarComponents = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  width: 100%;
`;

export const SideBarItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 10%;
  cursor: pointer;
  transition: 0.3s;
  &:hover {
    background: #ffff;
  }
`;
