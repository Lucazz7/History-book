import { useState } from "react";
import { ButtonDefault } from "../../Buttons/ButtonDefault/button";
import { CheckBox, CheckBoxLabel, CheckBoxWrapper } from "../CheckBox";

interface CheckBoxProps {
  onChange: (value: boolean) => void;
  changeBoolean: boolean;
}

export const CheckBoxDefault: React.FC<CheckBoxProps> = ({
  onChange,
  changeBoolean
}) => {

  return (
    <div>
      <CheckBoxWrapper>
        <CheckBox onChange={() => onChange(!changeBoolean)} id="checkbox" type="checkbox" />
        <CheckBoxLabel htmlFor="checkbox" />
      </CheckBoxWrapper>
    </div>
  );
};
