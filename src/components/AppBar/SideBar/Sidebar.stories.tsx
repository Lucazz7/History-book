import { Meta } from "@storybook/react";
import { SideBar } from "./SideBar";

export default {
  title: "Components/SideBar",
  component: SideBar,
  args: {
    children: ["SideBar", "Sidebey"],
  },
} as Meta;

export const SideBarPadrao = {};
