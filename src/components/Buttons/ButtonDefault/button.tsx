import { Button } from "../buttonStyle";

interface bottonProps {
  buttonName: string | JSX.Element;
  click?: boolean;
  setClick: (click: any) => void;
}

export const ButtonDefault: React.FC<bottonProps> = ({
  buttonName,
  click,
  setClick,
}: bottonProps) => {
  return (
    <>
      <Button onClick={() => setClick(!click)}>{buttonName}</Button>
    </>
  );
};
