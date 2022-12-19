import { Meta } from "@storybook/react";
import { Prevision } from "./cardPrevision";

export default {
    title: "Components/CardPrevision",
    component: Prevision,
    args: {
        selectCard: 1,
        blockId: '222',
        indexPrevision: 'future',
        foreCasts: [
            {
                blockId: "222",
                name: "",
                past: [
                    {
                        date: "2022-11-27",
                        rain: 3,
                        relativeHumidity: 30,
                        solarIrradiation: 45,
                        temperatureAverage: 20,
                        temperatureMax: 95,
                        temperatureMin: 70,
                        windSpeed: 0,
                        alert: null
                    },
                    {
                        date: "2022-11-28",
                        rain: 8,
                        relativeHumidity: 0,
                        solarIrradiation: 70,
                        temperatureAverage: 95,
                        temperatureMax: 35,
                        temperatureMin: 95,
                        windSpeed: 35,
                        alert: null
                    },
                    {
                        date: "2022-11-29",
                        rain: 20,
                        relativeHumidity: 90,
                        solarIrradiation: 100,
                        temperatureAverage: 60,
                        temperatureMax: 40,
                        temperatureMin: 85,
                        windSpeed: 40,
                        alert: null
                    },
                    {
                        date: "2022-11-30",
                        rain: 8,
                        relativeHumidity: 60,
                        solarIrradiation: 15,
                        temperatureAverage: 70,
                        temperatureMax: 15,
                        temperatureMin: 85,
                        windSpeed: 30,
                        alert: null
                    },
                    {
                        date: "2022-12-01",
                        rain: 8,
                        relativeHumidity: 55,
                        solarIrradiation: 95,
                        temperatureAverage: 45,
                        temperatureMax: 10,
                        temperatureMin: 20,
                        windSpeed: 15,
                        alert: null
                    },
                    {
                        date: "2022-12-02",
                        rain: 8,
                        relativeHumidity: 15,
                        solarIrradiation: 5,
                        temperatureAverage: 95,
                        temperatureMax: 55,
                        temperatureMin: 95,
                        windSpeed: 55,
                        alert: null
                    },
                    {
                        date: "2022-12-03",
                        rain: 1,
                        relativeHumidity: 40,
                        solarIrradiation: 90,
                        temperatureAverage: 70,
                        temperatureMax: 30,
                        temperatureMin: 75,
                        windSpeed: 70,
                        alert: null
                    },
                    {
                        date: "2022-12-04",
                        rain: 1,
                        relativeHumidity: 60,
                        solarIrradiation: 50,
                        temperatureAverage: 50,
                        temperatureMax: 50,
                        temperatureMin: 80,
                        windSpeed: 85,
                        alert: null
                    },
                    {
                        date: "2022-12-05",
                        rain: 3,
                        relativeHumidity: 70,
                        solarIrradiation: 45,
                        temperatureAverage: 40,
                        temperatureMax: 60,
                        temperatureMin: 70,
                        windSpeed: 90,
                        alert: null
                    },
                    {
                        date: "2022-12-06",
                        rain: 3,
                        relativeHumidity: 70,
                        solarIrradiation: 25,
                        temperatureAverage: 80,
                        temperatureMax: 100,
                        temperatureMin: 15,
                        windSpeed: 10,
                        alert: null
                    }
                ],
                "present": {
                    date: "2022-12-06T14:13:16.066Z",
                    rain: 20,
                    relativeHumidity: 0,
                    solarIrradiation: 45,
                    temperatureAverage: 65,
                    temperatureMax: 95,
                    temperatureMin: 25,
                    windSpeed: 70,
                    alert: null
                },
                "forecast": [
                    {
                        date: "2022-12-07T14:13:16.066Z",
                        temperatureMin: 20,
                        temperatureMax: 95,
                        rain: 20,
                        "rainProbability": 0,
                        "rainPrediction": "",
                        alert: null
                    },
                    {
                        date: "2022-12-08T14:13:16.066Z",
                        temperatureMin: 70,
                        temperatureMax: 40,
                        rain: 20,
                        "rainProbability": 40,
                        "rainPrediction": "",
                        alert: null
                    },
                    {
                        date: "2022-12-09T14:13:16.066Z",
                        temperatureMin: 10,
                        temperatureMax: 70,
                        rain: 8,
                        "rainProbability": 30,
                        "rainPrediction": "",
                        alert: null
                    },
                    {
                        date: "2022-12-10T14:13:16.066Z",
                        temperatureMin: 70,
                        temperatureMax: 80,
                        rain: 20,
                        "rainProbability": 20,
                        "rainPrediction": "",
                        alert: null
                    },
                    {
                        date: "2022-12-11T14:13:16.066Z",
                        temperatureMin: 85,
                        temperatureMax: 45,
                        rain: 1,
                        "rainProbability": 15,
                        "rainPrediction": "",
                        alert: null
                    },
                    {
                        date: "2022-12-12T14:13:16.066Z",
                        temperatureMin: 60,
                        temperatureMax: 55,
                        rain: 20,
                        "rainProbability": 15,
                        "rainPrediction": "",
                        alert: null
                    },
                    {
                        date: "2022-12-13T14:13:16.066Z",
                        temperatureMin: 25,
                        temperatureMax: 65,
                        rain: 8,
                        "rainProbability": 60,
                        "rainPrediction": "",
                        alert: null
                    },
                    {
                        date: "2022-12-14T14:13:16.066Z",
                        temperatureMin: 0,
                        temperatureMax: 65,
                        rain: 8,
                        "rainProbability": 60,
                        "rainPrediction": "",
                        alert: null
                    },
                    {
                        date: "2022-12-15T14:13:16.066Z",
                        temperatureMin: 15,
                        temperatureMax: 25,
                        rain: 20,
                        "rainProbability": 70,
                        "rainPrediction": "",
                        alert: null
                    },
                    {
                        date: "2022-12-16T14:13:16.066Z",
                        temperatureMin: 90,
                        temperatureMax: 40,
                        rain: 20,
                        "rainProbability": 20,
                        "rainPrediction": "",
                        alert: null
                    }
                ]
            }
        ],
        blocksArrayMap: [{
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
        }],
        blocksArrayRedux: [{
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
        }],
    },
} as Meta;

export const CardsPrevision = {};
