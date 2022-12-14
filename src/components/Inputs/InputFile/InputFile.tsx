import { FileInput, FileLabel } from "../InputStyle";
import { AiOutlineUpload } from "react-icons/ai";
import { SpanStyle } from "../SpanStyle";

export const inputFile = () => {
  return (
    <div>
      <FileLabel>
        <AiOutlineUpload />
        <SpanStyle>
          <FileInput type="file" />
        </SpanStyle>
      </FileLabel>
    </div>
  );
};
