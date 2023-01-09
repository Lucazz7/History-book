import styled from "styled-components";

export const ContainerHexaHistory = styled.div`
  text-align: center;
  position: relative;
  display: flex;
  align-items: center;
  max-width: 98%;
  min-width: 98%;
  overflow: auto;
  overflow-y: hidden;
`;
export const SpaceIcon = styled.div`
  padding: 0.7rem;

  @media screen and (max-width: 400px) {
    padding: 0.3rem;
  }

  @media screen and (max-width: 600px) {
    padding: 0.3rem;
  }

  @media screen and (max-width: 800px) {
    padding: 0.1rem;
  }

  @media screen and (max-width: 300px) {
    padding: 0;
  }
`;

export const HexHistory = styled.div`
  margin-left: 5px;
  overflow: hidden;

  a {
    float: left;
    text-decoration: none;
    color: white;
    display: flex;
    justify-content: center;
    font-size: 0.8em;
    position: relative;

    @media screen and (max-width: 400px) {
      width: 3em;
      height: 5.5em;
    }

    @media screen and (max-width: 600px) {
      width: 3.5em;
      height: 5.5em;
    }

    @media screen and (max-width: 300px) {
      width: 100%;
      height: 5.5em;
    }

    width: 100%;
    height: 5.5em;

    svg {
      stroke-width: 1rem;
      stroke-opacity: 01;
      width: 5.5em;
      height: 5.5em;
      fill: #ff7f2f;
      transition: all 0.1s ease-in-out;
    }

    span {
      position: absolute;
      display: flex;
      justify-content: center;
      text-align: center;
      align-items: center;
      width: 100%;
      height: 100%;
    }
  }
`;
