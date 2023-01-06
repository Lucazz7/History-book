import { BoxFile, FileBox, FileInput, FileLabel } from "../InputStyle";
import { BsCloudUploadFill } from "react-icons/bs";
import { SpanStyle } from "../SpanStyle";
import { ButtonDefault } from "../../Buttons/ButtonDefault/button";
import { useState } from "react";

interface inputFileProps {
  click?: boolean;
  setClick: (click: any) => void;
  iconFile?: string | JSX.Element;
  message: string;
  colorBorda?: string;
  textBotao?: string;
}

export const inputFile: React.FC<inputFileProps> = ({
  message,
  setClick,
  click,
  iconFile,
  colorBorda,
  textBotao,
}) => {
  return (
    <FileBox>
      <BoxFile>
        <SpanStyle corBorda={`${colorBorda}`}>{message}</SpanStyle>
        <br />
        <FileLabel>
          <FileInput type="file" />
          {iconFile}
        </FileLabel>
        <br />
        <ButtonDefault
          buttonName={`${textBotao}`}
          setClick={() => setClick(!click)}
        />
      </BoxFile>
    </FileBox>
  );
};
