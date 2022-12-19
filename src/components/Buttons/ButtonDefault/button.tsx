import { Button } from "../buttonStyle";

interface bottonProps {
  buttonName: string;
  click?: boolean;
  setClick: (click: any) => void;
  widthButton: number;
}

export const ButtonDefault: React.FC<bottonProps> = ({
  buttonName,
  click,
  setClick,
  widthButton,
}: bottonProps) => {
  return (
    <>
      <Button width={widthButton} onClick={() => setClick(!click)}>{buttonName}</Button>
    </>
  );
};
