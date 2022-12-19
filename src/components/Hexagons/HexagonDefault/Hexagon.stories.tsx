import { Meta } from "@storybook/react";
import { Hexagons } from "./hexagon";

export default {
  title: "Components/HexaVem",
  component: Hexagons,
  args: {
    blocks: [
      {
        blockId: "222S",
        name: "Exemple 1",
        abrv: "Ex1",
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
        name: "Exemple 2",
        abrv: "Ex2",
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
        name: "Exemple 3",
        abrv: "Ex3",
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
        name: "Exemple 4",
        abrv: "Ex4",
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
        name: "Exemple 5",
        abrv: "Ex5",
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
        name: "Exemple 6",
        abrv: "Ex6",
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
        name: "Exemple 7",
        abrv: "Ex7",
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
