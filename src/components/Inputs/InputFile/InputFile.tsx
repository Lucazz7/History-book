import { FileInput, FileLabel } from "../InputStyle";
import { AiOutlineUpload } from "react-icons/ai";
import { SpanStyle } from "../SpanStyle";

export const inputFile = () => {
  return (
    <div>
      <FileLabel>
        <FileInput type="file" />
        <AiOutlineUpload />
        <SpanStyle>Envie seu Arquivo</SpanStyle>
      </FileLabel>
    </div>
  );
};
