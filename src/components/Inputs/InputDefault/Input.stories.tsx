import { Meta } from "@storybook/react";
import App from "../../../App";
import { input } from "./Input";

export default {
  title: "Components/Inputs",
  component: input,
  args: {
    placeholder: "Input",
    widthInput: "100%",
    colorInput: "black",
    colorFontInput: "white",
  },
} as Meta;

export const InputDefault = {};
