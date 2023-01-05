import { Meta } from "@storybook/react";
import { AlertaDefault } from "./AlertaDefault";

export default {
  title: "Components/Alert",
  component: AlertaDefault,
  args: {
    text: "Alerta de teste",
    click: true,
  },
} as Meta;

export const AlertaPadrao = {};
