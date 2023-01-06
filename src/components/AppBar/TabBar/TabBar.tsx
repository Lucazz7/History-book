import { TabBarStyle } from "./TabBarStyled";
import { useState } from "react";
import { BsCircle } from "react-icons/bs";
import { ButtonRound } from "../../Buttons/ButtonCircle/buttonCircle";

interface TabBarProps {
  backgroundTab?: string;
  borderTab?: string;
  backgroundBotao?: string;
  corFontBotao?: string;
}

export const TabBarPadrao: React.FC<TabBarProps> = ({
  backgroundTab,
  borderTab,
  backgroundBotao,
  corFontBotao,
}) => {
  const [open, setOpen] = useState(false);

  return (
    <TabBarStyle backgroundTab={`${backgroundTab}`} borderTab={`${borderTab}`}>
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
