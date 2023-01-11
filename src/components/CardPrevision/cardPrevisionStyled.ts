import styled, { css, keyframes } from "styled-components";

export const CardsTemp = styled.div`
  display: flex;
  width: 100%;
  min-height: 90%;
  max-height: 90%;
  align-items: center;
  text-align: center;
  overflow-x: auto;
  overflow-y: hidden;
  justify-content: center;

  @media screen and (max-width: 1500px) {
    display: flex;
    justify-content: flex-start;
  }

  &::-webkit-scrollbar {
    box-shadow: inset 0 0 4px grey;
    border-radius: 10px;
    height: 10px;
  }
`;

export const DivIconsTemp = styled.div<{ indexPrevision?: string }>`
  display: flex;

  align-items: center;
  margin-left: ${(props) =>
    props.indexPrevision === "present" ? "2rem" : "3.5rem"};
  justify-content: center;
  color: ${({ theme }) => theme.text};
  position: relative;
  background-position: 0 0;
  animation: bgLinear_move 15s infinite;
`;

export const DayBox = styled.div`
  width: 100%;
  position: relative;
  cursor: pointer;
  color: ${({ theme }) => theme.text};
  padding: 10px;
`;

export const Context = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  border: solid 1px ${({ theme }) => theme.text};
  border-radius: 14px;
`;

export const Left = styled.div`
  display: flex;
  color: ${({ theme }) => theme.text};
  border-radius: 10px;
  animation: bgLinear_move 15s infinite;
  //margin-bottom: 14px; bordar em volta do name
  .topTime {
    left: 0;
  }
  background-color: ${({ theme }) => theme.bg3};
`;

export const Info = styled.div`
  p {
    text-align: center;
    font-size: 0.9rem;
    margin-bottom: 5px;
    line-height: 1.5;
    letter-spacing: 1px;
  }
`;

export const Temp = styled.div`
  p {
    font-size: 1.2rem;
    text-align: center;
    margin: 0;
    font-weight: bold;
  }
`;

export const TopTime = styled.div<{ indexPrevision?: string }>`
  left: 0;
  width: ${(props) =>
    props.indexPrevision === "present" ? "13rem" : "11.5rem"};
  height: 19vh;
  justify-content: center;
  align-items: center;
  display: flex;
  border-radius: 10px;
`;

export const TempInner = styled.div`
  position: relative;
  border-radius: 14px;
  z-index: 0;
  justify-content: center;
`;

const cloud_move = keyframes`
    0% {
        transform: translatey(-4px);
    }

    50% {
        transform: translatey(0px);
    }

    100% {
        transform: translatey(-4px);
    }
`;

export const WeatherNow = styled.div`
  animation: ${cloud_move} 3s infinite;
  justify-content: center;
  align-items: center;

  .morning_show {
    display: block;
  }

  .night_show {
    display: none;
    opacity: 0;
  }
`;

export const PStyled = styled.p`
  font-style: normal;
  font-weight: 700;
  font-size: 15px;
  margin: 0;
  padding: 0;
  color: ${({ theme }) => theme.text};
  letter-spacing: 1px;
`;

export const DateInfoCard = styled.p`
  font-style: normal;
  font-size: 15px;
  margin: 0;
  padding: 0;
  color: ${({ theme }) => theme.text};
  letter-spacing: 1px;
`;

export const RightCard = styled.div<{ active: boolean }>`
  width: 180px;
  display: column;
  align-items: center;
  justify-content: space-around;
  text-align: center;
  max-height: 16vh;
  min-height: 16vh;
  overflow: auto;
  background-color: transparent;
  transition-delay: 0s;
  &::-webkit-scrollbar {
    box-shadow: inset 0 0 12px grey;
    border-radius: 10px;
    height: 10px;
  }
  .weatherList {
    opacity: 1;
    left: 0;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    text-align: center;
    padding: 4px;

    border-bottom: 1px solid #aaaaaa;
    transition-delay: 0.5s;

    &:nth-child(1) {
      transition-delay: 0.5s;
    }

    &:nth-child(2) {
      transition-delay: 0.6s;
    }

    &:nth-child(3) {
      transition-delay: 0.7s;
    }

    &:nth-child(4) {
      transition-delay: 0.8s;
    }

    &:nth-child(5) {
      transition-delay: 0.9s;
    }

    &:nth-child(6) {
      transition-delay: 1s;
    }

    &:nth-child(7) {
      transition-delay: 1.1s;
    }
  }
`;

export const IconTemp = styled.img`
  max-width: 6rem;
  min-width: 6rem;
  justify-context: center;
  align-items: center;
`;
