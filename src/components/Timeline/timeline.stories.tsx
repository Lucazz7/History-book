import { Timeline } from "./Timeline";

export default {
  title: "Components/Timeline",
  component: Timeline,
  args: {
    pastAndPresent: "#FF7F2F",
    BlocosTimeline: [
      {
        blockId: "EXEMPLO1",
        name: "EXAMPLE",
        past: [
          {
            date: "2022-11-27",
            rain: 3,
            relativeHumidity: 25,
            solarIrradiation: 85,
            temperatureAverage: 100,
            temperatureMax: 10,
            temperatureMin: 25,
            windSpeed: 35,
            alert: null,
          },
          {
            date: "2022-11-28",
            rain: 1,
            relativeHumidity: 50,
            solarIrradiation: 55,
            temperatureAverage: 70,
            temperatureMax: 5,
            temperatureMin: 40,
            windSpeed: 40,
            alert: {
              type: 1,
              info: "string",
              level: 3,
              start: "string",
              finish: "ttt",
            },
          },
          {
            date: "2022-11-29",
            rain: 8,
            relativeHumidity: 80,
            solarIrradiation: 30,
            temperatureAverage: 20,
            temperatureMax: 60,
            temperatureMin: 0,
            windSpeed: 100,
            alert: null,
          },
          {
            date: "2022-11-30",
            rain: 3,
            relativeHumidity: 15,
            solarIrradiation: 15,
            temperatureAverage: 15,
            temperatureMax: 25,
            temperatureMin: 95,
            windSpeed: 10,
            alert: null,
          },
          {
            date: "2022-12-01",
            rain: 20,
            relativeHumidity: 95,
            solarIrradiation: 35,
            temperatureAverage: 0,
            temperatureMax: 100,
            temperatureMin: 85,
            windSpeed: 55,
            alert: null,
          },
          {
            date: "2022-12-02",
            rain: 8,
            relativeHumidity: 0,
            solarIrradiation: 20,
            temperatureAverage: 45,
            temperatureMax: 25,
            temperatureMin: 5,
            windSpeed: 20,
            alert: null,
          },
          {
            date: "2022-12-03",
            rain: 1,
            relativeHumidity: 20,
            solarIrradiation: 40,
            temperatureAverage: 30,
            temperatureMax: 30,
            temperatureMin: 80,
            windSpeed: 80,
            alert: null,
          },
          {
            date: "2022-12-04",
            rain: 20,
            relativeHumidity: 60,
            solarIrradiation: 80,
            temperatureAverage: 0,
            temperatureMax: 50,
            temperatureMin: 90,
            windSpeed: 85,
            alert: null,
          },
          {
            date: "2022-12-05",
            rain: 1,
            relativeHumidity: 95,
            solarIrradiation: 0,
            temperatureAverage: 60,
            temperatureMax: 60,
            temperatureMin: 85,
            windSpeed: 55,
            alert: null,
          },
          {
            date: "2022-12-06",
            rain: 1,
            relativeHumidity: 0,
            solarIrradiation: 50,
            temperatureAverage: 60,
            temperatureMax: 90,
            temperatureMin: 40,
            windSpeed: 10,
            alert: null,
          },
        ],
        present: {
          date: "2022-12-06T14:54:52.777Z",
          rain: 1,
          relativeHumidity: 90,
          solarIrradiation: 95,
          temperatureAverage: 25,
          temperatureMax: 55,
          temperatureMin: 85,
          windSpeed: 95,
          alert: null,
        },
        forecast: [
          {
            date: "2022-12-07T14:54:52.777Z",
            temperatureMin: 0,
            temperatureMax: 20,
            rain: 3,
            rainProbability: 30,
            rainPrediction: "",
            alert: null,
          },
          {
            date: "2022-12-08T14:54:52.777Z",
            temperatureMin: 95,
            temperatureMax: 75,
            rain: 8,
            rainProbability: 0,
            rainPrediction: "",
            alert: null,
          },
          {
            date: "2022-12-09T14:54:52.777Z",
            temperatureMin: 100,
            temperatureMax: 60,
            rain: 20,
            rainProbability: 35,
            rainPrediction: "",
            alert: null,
          },
          {
            date: "2022-12-10T14:54:52.777Z",
            temperatureMin: 0,
            temperatureMax: 15,
            rain: 20,
            rainProbability: 25,
            rainPrediction: "",
            alert: null,
          },
          {
            date: "2022-12-11T14:54:52.777Z",
            temperatureMin: 85,
            temperatureMax: 95,
            rain: 8,
            rainProbability: 30,
            rainPrediction: "",
            alert: null,
          },
          {
            date: "2022-12-12T14:54:52.777Z",
            temperatureMin: 85,
            temperatureMax: 40,
            rain: 8,
            rainProbability: 45,
            rainPrediction: "",
            alert: null,
          },
          {
            date: "2022-12-13T14:54:52.777Z",
            temperatureMin: 95,
            temperatureMax: 25,
            rain: 8,
            rainProbability: 30,
            rainPrediction: "",
            alert: null,
          },
          {
            date: "2022-12-14T14:54:52.777Z",
            temperatureMin: 50,
            temperatureMax: 80,
            rain: 3,
            rainProbability: 10,
            rainPrediction: "",
            alert: null,
          },
          {
            date: "2022-12-15T14:54:52.777Z",
            temperatureMin: 55,
            temperatureMax: 65,
            rain: 20,
            rainProbability: 45,
            rainPrediction: "",
            alert: null,
          },
          {
            date: "2022-12-16T14:54:52.777Z",
            temperatureMin: 20,
            temperatureMax: 55,
            rain: 1,
            rainProbability: 60,
            rainPrediction: "",
            alert: null,
          },
        ],
      },
    ],
  },
};

export const Timelines = {};
