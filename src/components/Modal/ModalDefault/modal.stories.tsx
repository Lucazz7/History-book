import { Meta } from "@storybook/react";
import { OpenModal } from "./modal";

export default {
    title: "Components/Modal",
    component: OpenModal,
    args: {
        title: 'Criar',
        editOrCreated: 'create',
    },
} as Meta;

export const CardsBlock = {};
