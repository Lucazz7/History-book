import { Meta } from "@storybook/react";
import { SideBar } from "./SideBar";

export default {
  title: "Components/SideBar",
  component: SideBar,
  args: {
    children: ["Dashboard", "Usuários"],
    color: "rgba(249, 124, 52, 1)",
    hoverColor: "#ffff",
    click: true,
    colorFont: "#ffff",
    colorFontHover: "black",
  },
} as Meta;

export const SideBarPadrao = {};
