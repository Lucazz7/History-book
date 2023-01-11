import { BoxFile, FileBox, FileInput, FileLabel } from "../InputStyle";
import { BsCloudUploadFill } from "react-icons/bs";
import { SpanStyle } from "../SpanStyle";
import { ButtonDefault } from "../../Buttons/ButtonDefault/button";
import { useState } from "react";

export const inputFile = () => {
  const [upload, setUpload] = useState(false);

  return (
    <FileBox>
      <BoxFile>
        <SpanStyle>Carregar Arquivo</SpanStyle>
        <br />
        <FileLabel>
          <FileInput type="file" />
          <BsCloudUploadFill />
        </FileLabel>
        <br />
        <ButtonDefault
          widthButton={50}
          disableButton={false}
          variation={"primary"}
          buttonName="Enviar"
          setClick={() => setUpload(!upload)}
        />
      </BoxFile>
    </FileBox>
  );
};
