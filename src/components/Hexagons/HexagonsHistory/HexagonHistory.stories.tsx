import { Meta } from "@storybook/react";
import { HexagonsHistory } from "./HexagonHistory";


export default {
    title: "Components/Hexagon/HexagonHistory",
    component: HexagonsHistory,
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

export const HexagonsHistorys = {};
