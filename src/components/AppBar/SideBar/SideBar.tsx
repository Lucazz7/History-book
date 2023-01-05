import { useState } from "react";
import { SideBarComponents, SideBarItem, SideBarStyle } from "./SideBarStyle";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { ButtonDefault } from "../../Buttons/ButtonDefault/button";

interface SideBarComponent {
  children: string[];
  color?: string;
  hoverColor?: string;
  click?: boolean;
  setClick: (click: any) => void;
}

export const SideBar: React.FC<SideBarComponent> = ({
  children,
  color,
  hoverColor,
  click,
  setClick,
}) => {
  return (
    <>
      <ButtonDefault
        setClick={setClick}
        click={click}
        buttonName={<AiOutlineArrowRight />}
      />

      {click ? (
        <SideBarStyle style={{ background: `${color}` }}>
          <ButtonDefault
            setClick={setClick}
            click={click}
            buttonName={<AiOutlineArrowLeft />}
          />

          <SideBarComponents>
            {children &&
              children.map((item) => (
                <SideBarItem key={item} hoveR={`${hoverColor}`}>
                  {item}
                </SideBarItem>
              ))}
          </SideBarComponents>
        </SideBarStyle>
      ) : (
        ""
      )}
    </>
  );
};
