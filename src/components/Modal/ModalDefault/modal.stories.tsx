import { Meta } from "@storybook/react";
import { OpenModal } from "./modal";

export default {
    title: "Components/Modal",
    component: OpenModal,
    args: {
        title: 'Exemple Modal',
        editOrCreated: 'create',
        isHistory: true,
        parametersListEdit: ['Exemple Combo1', 'Exemple Combo2'],
        deleteParameter: 'Exemple delete'
    },
} as Meta;

export const CardsBlock = {};
