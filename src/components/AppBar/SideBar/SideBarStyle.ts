import styled from "styled-components";

export const SideBarStyle = styled.div`
  width: 15%;
  height: 100%;
  border-radius: 0 1rem 1rem 0;
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

export const SideBarItem = styled.div<{
  hoveR: string;
  colorItem: string;
  colorItemHover: string;
}>`
  display: flex;
  color: ${(props) => props.colorItem};
  flex-direction: column;
  align-items: center;
  font-family: "Roboto", sans-serif;
  justify-content: center;
  margin: 5rem 0 5rem 0;
  width: 100%;
  height: 10%;
  cursor: pointer;
  transition: 0.3s;
  &:hover {
    background: ${(props) => props.hoveR};
    color: ${(props) => props.colorItemHover};
  }
`;

export const SideBarLogo = styled.div`
  display: flex;
  background: url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLqOc7zbq8m4gR-BBpwXJs9HipA4Y8wz0uXteYR5w9ZQ&s");
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 15%;
  cursor: pointer;
  transition: 0.3s;
`;
