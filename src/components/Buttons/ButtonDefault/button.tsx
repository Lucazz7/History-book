import { Button } from "../buttonStyle";

interface bottonProps {
  buttonName: string | JSX.Element;
  click?: boolean;
  setClick: (click: any) => void;
  backgroundColorButton?: string;
  ColorFontStatic?: string;
  ColorFontHover?: string;
  width?: string;
}

export const ButtonDefault: React.FC<bottonProps> = ({
  buttonName,
  click,
  setClick,
  backgroundColorButton,
  ColorFontHover,
  ColorFontStatic,
  width,
}: bottonProps) => {
  return (
    <>
      <Button
        widthButton={`${width}`}
        ColorFontHover={`${ColorFontHover}`}
        ColorFontStatic={`${ColorFontStatic}`}
        backgroundColorButton={`${backgroundColorButton}`}
        onClick={() => setClick(!click)}
      >
        {buttonName}
      </Button>
    </>
  );
};
