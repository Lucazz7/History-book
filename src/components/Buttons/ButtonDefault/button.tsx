import { Button, variantToColor } from "../buttonStyle";

export interface bottomProps {
  buttonName: string;
  click?: boolean;
  setClick: (click: any) => void;
  widthButton: 15 | 50 | 100;
  disableButton: boolean;
  variation: 'primary' | 'secondary' | 'outline';
}

export const ButtonDefault: React.FC<bottomProps> = ({
  buttonName,
  click,
  setClick,
  widthButton,
  disableButton,
  variation
}: bottomProps) => {

  const { bgColor, borderColor, color, hover } = variantToColor[variation];

  return (
    <>
      <Button disabled={disableButton} width={widthButton} active={disableButton} bgColor={bgColor} borderColor={borderColor} color={color} hover={hover} onClick={() => setClick(!click)}>{buttonName}</Button>
    </>
  );
};
