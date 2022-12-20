import { Meta } from "@storybook/react";
import App from "../../../App";
import { ButtonDefault } from "./button";

export default {
  title: "Components/Buttons",
  component: ButtonDefault,
  args: {
    buttonName: "Button",
    widthButton: 15,
  },
} as Meta;

export const ButtonPadrao = {};
