import { Meta } from "@storybook/react";
import { TabBarPadrao } from "./TabBar";

export default {
  title: "Components/TabBar",
  component: TabBarPadrao,
  args: {
    backgroundTab: "rgba(249, 124, 52, 1)",
    borderTab: "1rem",
    backgroundBotao: "white",
  },
} as Meta;

export const TabBar = {};
