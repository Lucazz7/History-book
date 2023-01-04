import { Meta } from "@storybook/react";
import { SideBar } from "./SideBar";

export default {
  title: "Components/SideBar",
  component: SideBar,
  args: {
    children: ["SideBar", "Sidebey"],
    color: "rgba(255, 94, 0, 0.989)",
    hoverColor: "#ffff",
  },
} as Meta;

export const SideBarPadrao = {};
