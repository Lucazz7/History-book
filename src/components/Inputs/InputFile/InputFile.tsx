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
}

export const inputFile: React.FC<inputFileProps> = ({
  message,
  setClick,
  click,
  iconFile,
}) => {
  return (
    <FileBox>
      <BoxFile>
        <SpanStyle>{message}</SpanStyle>
        <br />
        <FileLabel>
          <FileInput type="file" />
          {iconFile}
        </FileLabel>
        <br />
        <ButtonDefault buttonName="Enviar" setClick={() => setClick(!click)} />
      </BoxFile>
    </FileBox>
  );
};
