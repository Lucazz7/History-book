import { Meta } from "@storybook/react";
import { inputFile } from "./InputFile";
import { BsCloudUploadFill } from "react-icons/bs";

export default {
  title: "Components/Inputs",
  component: inputFile,
  args: {
    message: "Selecione um arquivo",
    iconFile: <BsCloudUploadFill />,
  },
} as Meta;

export const InputFile = {};
