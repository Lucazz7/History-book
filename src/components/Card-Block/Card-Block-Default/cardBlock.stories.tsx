import { Meta, Story } from "@storybook/react";
import { CardBlock, CardsProps } from "./card";

export default {
    title: "Components/CardsBlocks/Cards",
    component: CardBlock,
    args: {
        blocks: [{
            blockId: '222',
            name: 'Exemple Rain Selected',
            abrv: 'rain',
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
        }]
    },
} as Meta;

export const CardsBlockRainSelect: Story<CardsProps> = (args) => (
    <CardBlock {...args} />
)


export const CardsBlockRainDefault: Story<CardsProps> = (args) => (
    <CardBlock {...args} />
)

CardsBlockRainDefault.args = {
    blocks: [{
        blockId: '222ss',
        name: 'Exemple Rain Default',
        abrv: 'rain',
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
    }],
}


export const CardsBlockSumSelect: Story<CardsProps> = (args) => (
    <CardBlock {...args} />
)

CardsBlockSumSelect.args = {
    blocks: [{
        blockId: '222',
        name: 'Exemple Sum Select',
        abrv: 'sum',
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
    }]
}


export const CardsBlockSumDefault: Story<CardsProps> = (args) => (
    <CardBlock {...args} />
)

CardsBlockSumDefault.args = {
    blocks: [{
        blockId: '222f',
        name: 'Exemple Sum default',
        abrv: 'sum',
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
    }]
}