import { Meta } from "@storybook/react";
import { ButtonDefault } from "./button";

export default {
  title: "Components/Buttons",
  component: ButtonDefault,
  args: {
    buttonName: "Button",
    backgroundColorButton: "#ff7f2f",
    ColorFontStatic: "white",
    ColorFontHover: "black",
  },
} as Meta;

export const ButtonPadrao = {};
