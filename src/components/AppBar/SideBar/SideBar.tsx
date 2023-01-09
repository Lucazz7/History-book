/* eslint-disable react/prop-types */
import { useState } from "react";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import {
  SideBarComponents,
  SideBarItem,
  SideBarLogo,
  SideBarStyle,
} from "./SideBarStyle";
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

export const SideBarPadrao: React.FC<SideBarComponent> = ({
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
        variation="primary"
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
              variation="primary"
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
