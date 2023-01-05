import { CheckBox, CheckBoxLabel, CheckBoxWrapper } from "../CheckBox";

interface checkBoxProps {
  click?: boolean;
  setClick: (click: any) => void;
  backgroundChecked?: string;
}

export const checkBox: React.FC<checkBoxProps> = ({
  click,
  setClick,
  backgroundChecked,
}: checkBoxProps) => {
  return (
    <div>
      <CheckBoxWrapper>
        <CheckBox
          backgroundActive={`${backgroundChecked}`}
          id="checkbox"
          type="checkbox"
          onClick={() => setClick(!click)}
        />
        <CheckBoxLabel htmlFor="checkbox" />
      </CheckBoxWrapper>
    </div>
  );
};
