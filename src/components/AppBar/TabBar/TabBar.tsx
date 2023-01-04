import { TabBarStyle } from "./TabBarStyled";
import { useState } from "react";
import { BsCircle } from "react-icons/bs";
import { ButtonRound } from "../../Buttons/ButtonCircle/buttonCircle";

export const TabBarPadrao = () => {
  const [open, setOpen] = useState(false);

  return (
    <TabBarStyle>
      <ButtonRound setClick={setOpen} click={open} buttonName={<BsCircle />} />
      <ButtonRound setClick={setOpen} click={open} buttonName={<BsCircle />} />
      <ButtonRound setClick={setOpen} click={open} buttonName={<BsCircle />} />
      <ButtonRound setClick={setOpen} click={open} buttonName={<BsCircle />} />
    </TabBarStyle>
  );
};
