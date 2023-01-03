export interface TimelineComponent {
  BlocosTimeline: ITimeline[];
}

export interface TimelineDado {
  date: Date;
  rain: number;
  relativeHumidity?: number;
  solarIrradiation?: number;
  temperatureAverage?: number;
  rainProbability?: number;
  rainPrediction?: string;
  temperatureMax: number;
  temperatureMin: number;
  windSpeed?: number;
  alert?: {
    type?: number;
    info?: string;
    level?: number;
    start?: string;
    finish?: string;
  };
}

export interface ITimeline {
  blockId: string;
  name: string;
  past: PastTimeline[];
  present: PresentTimeline;
  forecast: FutureTimeline[];
}

export interface PastTimeline {
  date: Date;
  rain: number;
  relativeHumidity: number;
  solarIrradiation: number;
  temperatureAverage: number;
  temperatureMax: number;
  temperatureMin: number;
  windSpeed: number;
  alert?: {
    type?: number;
    info?: string;
    level?: number;
    start?: string;
    finish?: string;
  };
}

export interface PresentTimeline {
  date: Date;
  rain: number;
  relativeHumidity: number;
  solarIrradiation: number;
  temperatureAverage: number;
  temperatureMax: number;
  temperatureMin: number;
  windSpeed: number;
  alert?: {
    type?: number;
    info?: string;
    level?: number;
    start?: string;
    finish?: string;
  };
}

export interface FutureTimeline {
  date: Date;
  temperatureMin: number;
  temperatureMax: number;
  rain: number;
  rainProbability: number;
  rainPrediction: string;
  alert?: {
    type?: number;
    info?: string;
    level?: number;
    start?: string;
    finish?: string;
  };
}
