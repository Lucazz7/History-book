import styled from "styled-components";

export const TimelineDad = styled.div`
  font-family: $font-sans;
  display: flex;
  background-color: #808080;
  justify-content: center;
  overflow: scroll;
  align-items: center;
  justify-content: space-around;
  position: relative;
`;

export const TimelineDaughter = styled.div`
  scroll-snap-align: center;
  min-width: 300px;
  max-width: 100px;
  margin: auto;
  @media screen and (max-width: 1690px) {
    transform: scale(0.8);
    max-height: 30rem;
    min-height: 2rem;
  }
  @media screen and (max-width: 1384px) {
    transform: scale(0.6);
    max-height: 37rem;
    min-height: 2rem;
  }
  @media screen and (max-width: 1082px) {
    transform: scale(0.5);
    max-height: 30rem;
    min-height: 2rem;
  }
`;

export const TimelineCenter = styled.div`
  left: 50%;
  border-image-slice: 1;
  border-width: 3px;
  margin: 0;
  width: 60%;
  padding: 40px;
  height: 10rem;
  text-align: center;
  position: relative;
  animation: bg-spin 3s linear infinite;
  border-left: 5px solid #ff7f2f;
`;

export const TimelineRight = styled.div`
  font-size: 1em;
  border-right: 5px solid;
  left: 50%;
  border-image-slice: 1;
  border-width: 5px;
  width: 60%;
  height: 10rem;
  margin: 0;
  padding: 40px;
  position: relative;
  padding-right: 0;
  margin-top: -0.2rem;
`;

export const TimelineLeft = styled.div`
  border-left: 5px solid;
  border-image-slice: 1;
  border-width: 5px;
  width: 50%;
  height: 10rem;
  margin: 0;
  padding: 40px;
  position: relative;
  padding-left: 0;
  margin-top: -0.5rem;
  margin-bottom: -0.5rem;
`;

export const TimelineInfo = styled.div`
  display: inline-block;
  align-items: center;
`;

export const TimelineDate = styled.div`
  position: absolute;
  top: 4rem;
  right: 20.9rem;
`;

export const TimelineDateLeft = styled.div`
  position: absolute;
  top: 4rem;
  right: 3.7rem;
`;

export const TimelineInfoRight = styled.div`
  margin-left: 2.5rem;
`;

export const TimelineInfoLeft = styled.div`
  position: absolute;
  left: -10rem;
  margin-top: -1.5rem;
  justify-content: center;
  align-items: center;
  display: flex;
`;
