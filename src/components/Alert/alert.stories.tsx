import { Meta } from "@storybook/react";
import { AlertaDefault } from "./AlertaDefault";

export default {
  title: "Components/Alert",
  component: AlertaDefault,
  args: {
    text: "Alerta de teste",
    click: true,
    alertBackground: "rgb(75,181,67)",
    alertFontColor: "black",
    alertWidth: "20%",
  },
} as Meta;

export const AlertaPadrao = {};
