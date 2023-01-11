import { ComboBox, ComboBoxOption } from "../ComboBox";

interface ComboBoxProps {
  option: string[];
  widthComboBox?: string;
  colorComboBox?: string;
  messageComboBox?: string;
}

export const ComboBoxDefault: React.FC<ComboBoxProps> = ({
  option,
  widthComboBox,
  colorComboBox,
  messageComboBox,
}: ComboBoxProps) => {
  return (
    <ComboBox
      comboBoxWidth={`${widthComboBox}`}
      comboBoxColor={`${colorComboBox}`}
    >
      <>
        <ComboBoxOption>{`${messageComboBox}`}</ComboBoxOption>

        {option &&
          option.map((item) => (
            <ComboBoxOption key={item}>{item}</ComboBoxOption>
          ))}
      </>
    </ComboBox>
  );
};
