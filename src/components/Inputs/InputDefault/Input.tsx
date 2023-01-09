import { Input } from "../InputStyle";

interface inputProps {
  placeholder?: string;
  colorInput?: string;
  widthInput?: string;
  colorFontInput?: string;
}

export const input: React.FC<inputProps> = ({
  placeholder,
  colorInput,
  widthInput,
  colorFontInput,
}) => {
  return (
    <>
      <Input
        fontColorInput={`${colorFontInput}`}
        placeholder={`${placeholder}`}
        widthInput={`${widthInput}`}
        corInput={`${colorInput}`}
      />
    </>
  );
};
