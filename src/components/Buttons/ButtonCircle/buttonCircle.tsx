/* eslint-disable react/require-default-props */
import { ButtonCircle } from "../buttonStyle";

interface bottonRoundProps {
  buttonName: string | JSX.Element;
  click?: boolean;
  setClick: (click: any) => void;
  backgroundCor?: string;
  fontCorBotao?: string;
}

export const ButtonRound: React.FC<bottonRoundProps> = ({
  buttonName,
  click,
  setClick,
  backgroundCor,
  fontCorBotao,
}: bottonRoundProps) => {
  return (
    <>
      <ButtonCircle
        corFontBotao={`${fontCorBotao}`}
        backgroundCor={`${backgroundCor}`}
        onClick={() => setClick(!click)}
      >
        {buttonName}
      </ButtonCircle>
    </>
  );
};
