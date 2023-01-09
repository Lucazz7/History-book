import { Meta } from "@storybook/react";
import { CardHistory } from "./CardsHistory";


export default {
    title: "Components/CardsBlocks/CardsHistory",
    component: CardHistory,
    args: {
        historyBlocks: [{
            name: 'inicio',
            id: '0'
        },
        {
            name: 'Ped',
            id: 'C19'
        },
        {
            name: 'Faz.S',
            id: 'B812'
        }
        ]
    }
} as Meta;

export const CardsHistoryDefault = {};
