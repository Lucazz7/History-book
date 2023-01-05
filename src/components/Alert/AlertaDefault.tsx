import { useState } from "react";
import { ButtonDefault } from "../Buttons/ButtonDefault/button";
import { MdOutlineCancel } from "react-icons/md";
import { AlertaStyle } from "./AlertaStyle";

interface AlertaDefaultProps {
  click?: boolean;
  setClick: (click: any) => void;
  text?: string;
}

export const AlertaDefault: React.FC<AlertaDefaultProps> = ({
  setClick,
  text,
  click,
}) => {
  return (
    <div>
      {click ? (
        <AlertaStyle>
          <div>
            <p>{text}</p>
          </div>
          <ButtonDefault
            buttonName={<MdOutlineCancel />}
            click={click}
            setClick={setClick}
          />
        </AlertaStyle>
      ) : (
        <ButtonDefault
          buttonName={"Mostre o Alerta"}
          click={click}
          setClick={setClick}
        />
      )}
    </div>
  );
};
