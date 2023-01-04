import { ButtonCircle } from "../buttonStyle";

interface bottonRoundProps {
  buttonName: string | JSX.Element;
  click?: boolean;
  setClick: (click: any) => void;
}

export const ButtonRound: React.FC<bottonRoundProps> = ({
  buttonName,
  click,
  setClick,
}: bottonRoundProps) => {
  return (
    <>
      <ButtonCircle onClick={() => setClick(!click)}>{buttonName}</ButtonCircle>
    </>
  );
};
