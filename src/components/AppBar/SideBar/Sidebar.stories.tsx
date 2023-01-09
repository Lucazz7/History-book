import { Meta } from "@storybook/react";
import { SideBarPadrao } from "./SideBar";

export default {
  title: "Components/AppBar",
  component: SideBarPadrao,
  args: {
    children: ["Dashboard", "Usuários"],
    color: "rgba(249, 124, 52, 1)",
    hoverColor: "#ffff",
    click: true,
    colorFont: "#ffff",
    colorFontHover: "black",
  },
} as Meta;

export const SideBar = {};
