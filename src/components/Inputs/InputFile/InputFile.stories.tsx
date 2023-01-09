// eslint-disable-next-line import/no-extraneous-dependencies
import { Meta } from "@storybook/react";
import { inputFile } from "./InputFile";
import { BsCloudUploadFill } from "react-icons/bs";

export default {
  title: "Components/Inputs/UploadFile",
  component: inputFile,
  args: {
    message: "Selecione um arquivo",
    colorBorda: "#ff5e00",
    textBotao: "Enviar",
    iconFile: <BsCloudUploadFill />,
  },
} as Meta;

export const InputFileUpload = {};
