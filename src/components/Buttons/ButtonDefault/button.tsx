import { Button } from "../buttonStyle";

interface bottonProps {
  buttonName: string;
  click?: boolean;
  setClick: (click: any) => void;
  widthButton: 15 | 50 | 100;
  disableButton: boolean;
}

export const ButtonDefault: React.FC<bottonProps> = ({
  buttonName,
  click,
  setClick,
  widthButton,
  disableButton
}: bottonProps) => {
  return (
    <>
      <Button disabled={disableButton} width={widthButton} active={disableButton} onClick={() => setClick(!click)}>{buttonName}</Button>
    </>
  );
};
