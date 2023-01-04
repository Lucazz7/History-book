import { AiOutlineArrowRight } from "react-icons/ai";
import { ButtonDefault } from "../../Buttons/ButtonDefault/button";
import { TabBarItem, TabBarStyle } from "./TabBarStyled";
import { useState } from "react";
import { BsCircle } from "react-icons/bs";

export const TabBarPadrao = () => {
  const [open, setOpen] = useState(false);

  return (
    <TabBarStyle>
      <ButtonDefault
        setClick={setOpen}
        click={open}
        buttonName={<BsCircle />}
      />
      <ButtonDefault
        setClick={setOpen}
        click={open}
        buttonName={<BsCircle />}
      />
      <ButtonDefault
        setClick={setOpen}
        click={open}
        buttonName={<BsCircle />}
      />
      <ButtonDefault
        setClick={setOpen}
        click={open}
        buttonName={<BsCircle />}
      />
    </TabBarStyle>
  );
};
