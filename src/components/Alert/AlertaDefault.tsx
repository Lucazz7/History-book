/* eslint-disable import/order */
/* eslint-disable react/jsx-curly-brace-presence */
/* eslint-disable react/prop-types */
import { useState } from "react";
import { AlertaStyle } from "./AlertaStyle";
import { ButtonDefault } from "../Buttons/ButtonDefault/button";
import { MdOutlineCancel } from "react-icons/md";

interface AlertaDefaultProps {
  click?: boolean;
  setClick: (click: any) => void;
  text?: string;
  alertBackground?: string;
  alertFontColor?: string;
  alertWidth?: string;
}

export const AlertaDefault: React.FC<AlertaDefaultProps> = ({
  setClick,
  text,
  click,
  alertBackground,
  alertFontColor,
  alertWidth,
}) => {
  return (
    <div>
      {click ? (
        <AlertaStyle
          widthAlert={`${alertWidth}`}
          backgroundAlert={`${alertBackground}`}
          fontColorAlert={`${alertFontColor}`}
        >
          <div>
            <p>{text}</p>
          </div>
          <ButtonDefault
            variation="primary"
            buttonName={<MdOutlineCancel />}
            click={click}
            setClick={setClick}
          />
        </AlertaStyle>
      ) : (
        <ButtonDefault
          variation="primary"
          buttonName={"Mostre o Alerta"}
          click={click}
          setClick={setClick}
        />
      )}
    </div>
  );
};
