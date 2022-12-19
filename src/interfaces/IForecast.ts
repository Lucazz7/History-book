export interface Fore {
  date: Date;
  temperatureMin: number;
  temperatureMax: number;
  rain: number;
  rainProbability: number;
  rainPrediction: string;
}

export interface Past {
  date: Date;
  temperatureAverage: number;
  temperatureMin: number;
  temperatureMax: number;
  relativeHumidity: number;
  solarIrradiation: number;
  rain: number;
  windSpeed: number;
}

export interface Present {
  date: Date;
  temperatureAverage: number;
  temperatureMin: number;
  temperatureMax: number;
  relativeHumidity: number;
  solarIrradiation: number;
  rain: number;
  windSpeed: number;
}

export interface Forecast {
  blockId: string;
  name: string;
  past: Past[];
  present: Present;
  forecast: Fore[];
}
