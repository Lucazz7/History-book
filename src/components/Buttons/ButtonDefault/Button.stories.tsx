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
    width: "25%",
  },
} as Meta;

export const ButtonPadrao = {};
