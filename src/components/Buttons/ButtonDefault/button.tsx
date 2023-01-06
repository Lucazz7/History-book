import { Button } from "../buttonStyle";

interface bottonProps {
  buttonName: string | JSX.Element;
  click?: boolean;
  setClick: (click: any) => void;
  backgroundColorButton?: string;
  ColorFontStatic?: string;
  ColorFontHover?: string;
}

export const ButtonDefault: React.FC<bottonProps> = ({
  buttonName,
  click,
  setClick,
  backgroundColorButton,
  ColorFontHover,
  ColorFontStatic,
}: bottonProps) => {
  return (
    <>
      <Button
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
