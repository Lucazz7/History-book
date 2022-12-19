import { ComboBox, ComboBoxOption } from "../ComboBox";

interface ComboBoxProps {
  option?: string[];
  widthSize: number;
}

export const ComboBoxDefault: React.FC<ComboBoxProps> = ({
  option,
  widthSize
}: ComboBoxProps) => {
  return (
    <ComboBox width={widthSize}>
      <>
        <ComboBoxOption width={widthSize}>Please Select...</ComboBoxOption>
        {option &&
          option.map((item) => (
            <ComboBoxOption width={widthSize} key={item}>{item}</ComboBoxOption>
          ))}
      </>
    </ComboBox>
  );
};
