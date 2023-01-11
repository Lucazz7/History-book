import { ColorPalette, ColorItem } from "@storybook/addon-docs";
import { Meta } from "@storybook/react";
import {
  ErrorColors,
  InfoColors,
  Neutral,
  PrimaryColors,
  SecondaryColors,
  SecondaryVariantColors,
  SuccessColors,
  TertiaryColors,
  VariantNeutral,
  WarningColors,
} from "./colors";

export default {
  title: "Color Palette",
  component: ColorPalette,
  parameters: {
    canvas: {
      description: {
        component: "Paleta de cores utilizadas no projeto",
      },
    },
  },
  argTypes: {
    color: {
      control: {
        type: "select",
        options: [
          "theme.color.neutral",
          "theme.color.variant-neutral",
          "theme.color.primary",
          "theme.color.secondary",
          "theme.color.secondary",
          "theme.color.tertiary",
          "theme.color.status",
          "theme.color.success",
          "theme.color.warning",
          "theme.color.status-variant",
        ],
      },
    },
  },
} as Meta<typeof ColorPalette>;

export const ColorPaletteStory = () => {
  return (
    <ColorPalette>
      <ColorItem
        title="theme.color.neutral"
        subtitle="Neutras"
        colors={Neutral}
      />
      <ColorItem
        title="theme.color.variant-neutral"
        subtitle="Neutras Alternativas "
        colors={VariantNeutral}
      />
      <ColorItem
        title="theme.color.primary"
        subtitle="Cores Primárias"
        colors={PrimaryColors}
      />
      <ColorItem
        title="theme.color.secondary"
        subtitle="Cores Secundárias"
        colors={SecondaryColors}
      />
      <ColorItem
        title="theme.color.secondary"
        subtitle="Cores Variantes Secundárias"
        colors={SecondaryVariantColors}
      />
      <ColorItem
        title="theme.color.tertiary"
        subtitle="Cores Terciárias"
        colors={TertiaryColors}
      />
      <ColorItem
        title="theme.color.status"
        subtitle="Cores para Status"
        colors={ErrorColors}
      />
      <ColorItem
        title="theme.color.success"
        subtitle="Cores para Status Sucesso"
        colors={SuccessColors}
      />
      <ColorItem
        title="theme.color.warning"
        subtitle="Cores para Aviso"
        colors={WarningColors}
      />
      <ColorItem
        title="theme.color.status-variant"
        subtitle="Cores para Status Alternativas"
        colors={InfoColors}
      />
    </ColorPalette>
  );
};
