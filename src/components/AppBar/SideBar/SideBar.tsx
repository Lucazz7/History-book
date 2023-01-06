import { useState } from "react";
import {
  SideBarComponents,
  SideBarItem,
  SideBarLogo,
  SideBarStyle,
} from "./SideBarStyle";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { ButtonDefault } from "../../Buttons/ButtonDefault/button";

interface SideBarComponent {
  children: string[];
  color?: string;
  hoverColor?: string;
  click?: boolean;
  setClick: (click: any) => void;
  colorFont?: string;
  colorFontHover?: string;
}

export const SideBar: React.FC<SideBarComponent> = ({
  children,
  color,
  hoverColor,
  click,
  setClick,
  colorFont,
  colorFontHover,
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
          <SideBarLogo />
          <SideBarComponents>
            {children &&
              children.map((item) => (
                <SideBarItem
                  key={item}
                  hoveR={`${hoverColor}`}
                  colorItem={`${colorFont}`}
                  colorItemHover={`${colorFontHover}`}
                >
                  {item}
                </SideBarItem>
              ))}
            <ButtonDefault
              setClick={setClick}
              click={click}
              buttonName={<AiOutlineArrowLeft />}
            />
          </SideBarComponents>
        </SideBarStyle>
      ) : (
        ""
      )}
    </>
  );
};
