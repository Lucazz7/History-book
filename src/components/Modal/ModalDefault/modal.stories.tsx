/* eslint-disable react/jsx-props-no-spreading */
import { Meta, Story } from "@storybook/react";
import { ModalProps, OpenModal } from "./modal";

export default {
  title: "Components/Modal",
  component: OpenModal,
  args: {
    title: "Create",
    editOrCreated: "create",
    isHistory: true,
    parametersListEdit: ["Exemple Combo1", "Exemple Combo2"],
    deleteParameter: "Exemple delete",
  },
} as Meta;

export const ModalCreated: Story<ModalProps> = (args) => (
  <OpenModal {...args} />
);

export const ModalDelete: Story<ModalProps> = (args) => <OpenModal {...args} />;

ModalDelete.args = {
  title: "Delete",
  editOrCreated: "delete",
};

export const ModalEdit: Story<ModalProps> = (args) => <OpenModal {...args} />;

ModalEdit.args = {
  title: "Editar",
  editOrCreated: "edit",
};
