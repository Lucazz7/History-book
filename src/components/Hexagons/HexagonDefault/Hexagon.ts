import styled from "styled-components";

export const HexagonDivDad = styled.div<{
  corBlocosRestantes: string;
  corBlocosAtuais: string;
}>`
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

  svg g {
    fill: transparent;
    fill-opacity: 0.6;
  }

  svg g:hover {
    fill-opacity: 1;
  }

  svg g:hover text {
    fill-opacity: 1;
  }

  svg .game g {
    stroke-opacity: 0.3;
    fill-opacity: 0.3;
    stroke-width: 0.5;
    transition: fill-opacity 0.5s;

    polygon {
      stroke: #b5b5b5;
    }

    .rrr {
      font-size: 3px;
    }

    text {
      width: 100%;
      font-size: 0.15em;
      fill-opacity: 0.2;
      font-weight: bold;
      transition: fill-opacity 0.2s;
    }
  }

  svg .blockSelect g {
    transition: fill-opacity 0.5s;

    stroke-width: 0.5;

    polygon {
      stroke: #ff7f2f;
    }

    .rrr {
      font-size: 3px;
    }
  }

  svg .hexaOpened g {
    polygon {
      stroke: #b5b5b5;
    }

    stroke-width: 0.5;
    transition: fill-opacity 0.5s;
    font-size: 1rem;

    .rrr {
      font-size: 3px;
    }
  }

  svg .hexaOpened:hover g {
    .iconsInfo {
      opacity: 1;
    }

    .textInfo {
      opacity: 1;
    }
  }

  svg .hexaOpenedMoreBlocs g {
    fill: transparent;
    stroke-width: 0.5;
    transition: fill-opacity 0.5s;

    polygon {
      stroke: #b5b5b5;
    }
  }

  .iconsInfo {
    font-size: 2.5px;
    opacity: 0;
  }

  .textInfo {
    font-size: 1.5px;
    margin: 0;
    opacity: 0;
    letter-spacing: 0.02px;
  }

  svg .hexagonNormal g {
    polygon {
      stroke: #b5b5b5;
    }

    stroke-width: 0.5;
    transition: fill-opacity 0.5s;

    .rrr {
      font-size: 3px;
    }
  }

  svg .hexagonNormal:hover g {
    .iconsInfo {
      opacity: 1;
    }

    .textInfo {
      opacity: 1;
    }
  }

  svg .hexaCreatedAndSpand g {
    polygon {
      stroke: #ff7f2f;
    }

    transition: fill-opacity 0.5s;
    stroke-width: 0.5;

    .rrr {
      font-size: 3px;
    }
  }

  svg .moreItens g {
    polygon {
      stroke: #ff7f2f;
    }

    transition: fill-opacity 0.5s;
    stroke-width: 0.5;
  }

  svg .hexaCreatedAndSpand:hover g {
    .iconsInfo {
      opacity: 1;
    }

    .textInfo {
      opacity: 1;
    }
  }

  svg .hexaCreatedAndSpand g .hexagonViewMore {
    width: 100%;
    font-size: 0.12em;
    stroke-width: 0.5;
    fill: #ff7f2f;
    fill-opacity: 0.9;
    transition: fill-opacity 0.2s;
  }

  svg .hexaCreatedAndSpand g .hexagonViewMoreIcon {
    width: 100%;
    font-size: 0.22em;
    stroke-width: 0.5;
    fill: #ff7f2f;
    fill-opacity: 0.9;
    transition: fill-opacity 0.2s;
  }

  svg .moreItens g .hexagonViewMoreIcon {
    width: 100%;
    font-size: 0.22em;
    stroke-width: 0.5;
    fill: #ff7f2f;
    fill-opacity: 0.9;
    transition: fill-opacity 0.2s;
  }

  svg g text {
    font-size: 0.15em;
    fill-opacity: 0.9;
    margin: 0;
    font-weight: bold;
    transition: fill-opacity 0.2s;
  }

  .test {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0;
    padding: 0;
    overflow: auto;
  }

  .test::-webkit-scrollbar {
    box-shadow: inset 0 0 4px grey;
    border-radius: 10px;
    width: 0px;
  }
`;
