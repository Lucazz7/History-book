import { Meta } from "@storybook/react";
import { CardBlock } from "./card";

export default {
    title: "Components/CardsBlocks/CardDefaults",
    component: CardBlock,
    args: {
        blocks: [{
            blockId: '222',
            name: 'Storybook Exemple Active',
            abrv: 'Story',
            blockParent: 'dsd',
            leafParent: false,
            date: '2012',
            data: {
                windSpeed: 2,
                solarIrradiation: 22,
                temperature: 22,
                rain: 12,
                relativeHumidity: 13,
            }
        }, {
            blockId: '222ss',
            name: 'Storybook Exemple Default',
            abrv: 'Story',
            blockParent: 'dsd',
            leafParent: false,
            date: '2012',
            data: {
                windSpeed: 2,
                solarIrradiation: 22,
                temperature: 22,
                rain: 12,
                relativeHumidity: 13,
            }
        },
        {
            blockId: '222ss',
            name: 'Storybook Exemple ClearDay',
            abrv: 'STC',
            blockParent: 'dsd',
            leafParent: false,
            date: '2012',
            data: {
                windSpeed: 2,
                solarIrradiation: 22,
                temperature: 22,
                rain: 0,
                relativeHumidity: 13,
            }
        }],
    },
} as Meta;

export const CardsBlock = {};
