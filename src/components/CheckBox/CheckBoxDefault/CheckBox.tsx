import { useState } from "react";
import { ButtonDefault } from "../../Buttons/ButtonDefault/button";
import { CheckBox, CheckBoxLabel, CheckBoxWrapper } from "../CheckBox";

export const checkBox = () => {
  return (
    <div>
      <CheckBoxWrapper>
        <CheckBox id="checkbox" type="checkbox" />
        <CheckBoxLabel htmlFor="checkbox" />
      </CheckBoxWrapper>
    </div>
  );
};
