import styled from "styled-components";

export const SideBarStyle = styled.div`
  width: 10%;
  height: 100%;
  border-radius: 1rem 1rem;
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

export const SideBarItem = styled.div<{ hoveR: string }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: "Roboto", sans-serif;
  justify-content: center;
  width: 100%;
  height: 10%;
  cursor: pointer;
  transition: 0.3s;
  &:hover {
    background: ${(props) => props.hoveR};
  }
`;
