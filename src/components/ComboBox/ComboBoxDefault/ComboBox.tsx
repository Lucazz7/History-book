import { ComboBox, ComboBoxOption } from "../ComboBox";

interface ComboBoxProps {
  option: string[];
}

export const ComboBoxDefault: React.FC<ComboBoxProps> = ({
  option,
}: ComboBoxProps) => {
  return (
    <ComboBox>
      <>
        <ComboBoxOption>Please Select...</ComboBoxOption>

        {option &&
          option.map((item) => (
            <ComboBoxOption key={item}>{item}</ComboBoxOption>
          ))}
      </>
    </ComboBox>
  );
};
