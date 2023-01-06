import { Meta } from "@storybook/react";
import { Hexag } from "./hexagon";

export default {
  title: "Components/HexaVem",
  component: Hexag,
  args: {
    corBlocosAtuais: "#FF7F2F",
    corBlocosRestantes: "#B5B5B5",
  },
} as Meta;

export const HexaBox = {};
