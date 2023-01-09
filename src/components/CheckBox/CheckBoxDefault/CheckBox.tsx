import {
  CheckBoxInput,
  CheckBoxLabel,
  CheckBoxWrapper,
} from "../CheckBoxStyle";

interface CheckBoxProps {
  click?: boolean;
  setClick: (click: any) => void;
  backgroundChecked?: string;
  onChange: (value: boolean) => void;
  changeBoolean: boolean;
}

export const CheckBox: React.FC<CheckBoxProps> = ({
  click,
  setClick,
  backgroundChecked,
  onChange,
  changeBoolean,
}: CheckBoxProps) => {
  return (
    <div>
      <CheckBoxWrapper>
        <CheckBoxInput
          backgroundActive={`${backgroundChecked}`}
          id="checkbox"
          type="checkbox"
          onClick={() => setClick(!click)}
          onChange={() => onChange(!changeBoolean)}
        />
        <CheckBoxLabel htmlFor="checkbox" />
      </CheckBoxWrapper>
    </div>
  );
};
