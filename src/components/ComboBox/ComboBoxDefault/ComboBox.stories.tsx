import { Meta } from "@storybook/react";
import App from "../../../App";
import { ComboBoxDefault } from "./ComboBox";

export default {
  title: "Components/ComboBoxS",
  component: ComboBoxDefault,
  args: {
    messageComboBox: "ComboBox",
    widthComboBox: "100%",
    colorComboBox: "grey",
    colorFontInput: "black",
    option: ["Example1", "Example2", "Example3", "Example4", "Example5"],
  },
} as Meta;

export const ComboBox = {};
