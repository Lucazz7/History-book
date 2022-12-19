import { Meta } from "@storybook/react";
import { Hexagons } from "./hexagon";

export default {
  title: "Components/HexaVem",
  component: Hexagons,
  args: {
    blocks: [
      {
        blockId: "222S",
        name: "Select",
        abrv: "Slc",
        blockParent: "dsd",
        leafParent: false,
        date: "2012",
        data: {
          windSpeed: 2,
          solarIrradiation: 22,
          temperature: 22,
          rain: 12,
          relativeHumidity: 13,
        },
      },
      {
        blockId: "222ss",
        name: "Default",
        abrv: "Def",
        blockParent: "dsd",
        leafParent: false,
        date: "2012",
        data: {
          windSpeed: 2,
          solarIrradiation: 22,
          temperature: 22,
          rain: 12,
          relativeHumidity: 13,
        },
      },
      {
        blockId: "222s2s",
        name: "Default",
        abrv: "Def",
        blockParent: "dsd",
        leafParent: false,
        date: "2012",
        data: {
          windSpeed: 2,
          solarIrradiation: 22,
          temperature: 22,
          rain: 0,
          relativeHumidity: 13,
        },
      },
      {
        blockId: "222sFs",
        name: "Default",
        abrv: "Def",
        blockParent: "dsd",
        leafParent: false,
        date: "2012",
        data: {
          windSpeed: 2,
          solarIrradiation: 22,
          temperature: 22,
          rain: 12,
          relativeHumidity: 13,
        },
      },
      {
        blockId: "222sAs",
        name: "Default",
        abrv: "Def",
        blockParent: "dsd",
        leafParent: false,
        date: "2012",
        data: {
          windSpeed: 2,
          solarIrradiation: 22,
          temperature: 22,
          rain: 12,
          relativeHumidity: 13,
        },
      },
      {
        blockId: "22Fss",
        name: "Default",
        abrv: "Def",
        blockParent: "dsd",
        leafParent: false,
        date: "2012",
        data: {
          windSpeed: 2,
          solarIrradiation: 22,
          temperature: 22,
          rain: 12,
          relativeHumidity: 13,
        },
      },
      {
        blockId: "2sAs",
        name: "Default",
        abrv: "Def",
        blockParent: "dsd",
        leafParent: false,
        date: "2012",
        data: {
          windSpeed: 2,
          solarIrradiation: 22,
          temperature: 12,
          rain: 0,
          relativeHumidity: 13,
        },
      },
      {
        blockId: "2ssG",
        name: "Default",
        abrv: "Def",
        blockParent: "dsd",
        leafParent: false,
        date: "2012",
        data: {
          windSpeed: 2,
          solarIrradiation: 22,
          temperature: 12,
          rain: 0,
          relativeHumidity: 13,
        },
      },
    ]
  }
} as Meta;

export const HexaBox = {};
