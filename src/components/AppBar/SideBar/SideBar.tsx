import { useState } from "react";
import { SideBarComponents, SideBarItem, SideBarStyle } from "./SideBarStyle";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { ButtonDefault } from "../../Buttons/ButtonDefault/button";

interface SideBarComponent {
  children: string[];
  color?: string;
  hoverColor?: string;
}

export const SideBar: React.FC<SideBarComponent> = ({
  children,
  color,
  hoverColor,
}) => {
  const [open, setOpen] = useState(false);
  console.log(open);
  return (
    <>
      <ButtonDefault
        setClick={setOpen}
        click={open}
        buttonName={<AiOutlineArrowRight />}
      />

      {open ? (
        <SideBarStyle style={{ background: `${color}` }}>
          <ButtonDefault
            setClick={setOpen}
            click={open}
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
