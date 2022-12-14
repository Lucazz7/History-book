import { Button } from "../buttonStyle";

interface bottonProps {
  buttonName: string;
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
