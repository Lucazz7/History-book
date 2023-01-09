/* eslint-disable import/no-extraneous-dependencies */
import { Meta } from "@storybook/react";
import { input } from "./Input";

export default {
  title: "Components/Inputs/InputDefaults",
  component: input,
  args: {
    placeholder: "Input",
    widthInput: "100%",
    colorInput: "black",
    colorFontInput: "white",
  },
} as Meta;

export const InputDefault = {};
