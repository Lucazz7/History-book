import { TabBarStyle } from "./TabBarStyled";
import { useState } from "react";
import { ButtonRound } from "../../Buttons/ButtonCircle/buttonCircle";

interface TabBarProps {
  backgroundTab?: string;
  borderTab?: string;
  backgroundBotao?: string;
  corFontBotao?: string;
  tabWidth?: string;
}

export const TabBarPadrao: React.FC<TabBarProps> = ({
  backgroundTab,
  borderTab,
  backgroundBotao,
  tabWidth,
}) => {
  const [open, setOpen] = useState(false);

  return (
    <TabBarStyle
      widthTab={`${tabWidth}`}
      backgroundTab={`${backgroundTab}`}
      borderTab={`${borderTab}`}
    >
      <ButtonRound
        backgroundCor={`${backgroundBotao}`}
        setClick={setOpen}
        click={open}
        buttonName={"Z"}
      />
      <ButtonRound
        backgroundCor={`${backgroundBotao}`}
        setClick={setOpen}
        click={open}
        buttonName={"E"}
      />
      <ButtonRound
        backgroundCor={`${backgroundBotao}`}
        setClick={setOpen}
        click={open}
        buttonName={"U"}
      />
      <ButtonRound
        setClick={setOpen}
        backgroundCor={`${backgroundBotao}`}
        click={open}
        buttonName={"S"}
      />
    </TabBarStyle>
  );
};
