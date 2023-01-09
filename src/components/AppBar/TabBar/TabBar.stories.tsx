import { Meta } from "@storybook/react";
import { TabBarPadrao } from "./TabBar";

export default {
  title: "Components/AppBar",
  component: TabBarPadrao,
  args: {
    backgroundTab: "rgba(249, 124, 52, 1)",
    borderTab: "1rem",
    backgroundBotao: "white",
    tabWidth: "100%",
  },
} as Meta;

export const TabBar = {};
