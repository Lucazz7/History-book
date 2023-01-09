/* eslint-disable react/jsx-props-no-spreading */
import { Meta, Story } from "@storybook/react";
import { Button, ContainerButtonProps } from "../buttonStyle";
import { bottomProps, ButtonDefault } from "./button";

export default {
  title: "Components/Buttons",
  component: ButtonDefault,
  args: {
    buttonName: "Button",
    widthButton: 15,
    variation: "primary",
  },
} as Meta;

export const ButtonPrimary: Story<bottomProps> = (args) => (
  <ButtonDefault {...args}>Basic Button </ButtonDefault>
);

export const ButtonSecondary: Story<bottomProps> = (args) => (
  <ButtonDefault {...args}>Basic Button </ButtonDefault>
);

ButtonSecondary.args = {
  variation: "secondary",
};

export const ButtonOutLine: Story<bottomProps> = (args) => (
  <ButtonDefault {...args}>Basic Button </ButtonDefault>
);

ButtonOutLine.args = {
  variation: "outline",
};
