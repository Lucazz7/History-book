//! Icones

import IconRain from '../../images/iconsSvg/rain.svg';
import IconRainDay from '../../images/iconsSvg/rainDay.svg';
import IconTemperature from '../../images/iconsSvg/allIconsTemp/temperature.svg';
import IconTemperatureMax from '../../images/iconsSvg/allIconsTemp/temperatureMax.svg';
import IconTemperatureMin from '../../images/iconsSvg/allIconsTemp/temperatureMin.svg';
import IconChuvaNublado from '../../images/iconsSvg/allIconsTemp/chuvaNublado.svg';
import IconChuvaNubladoDia from '../../images/iconsSvg/allIconsTemp/chuvaNubladoDia.svg';
import IconHumidity from '../../images/iconsSvg/allIconsTemp/humidity.svg';
import IconWind from '../../images/iconsSvg/allIconsTemp/wind.svg';
import IconWindAnimate from '../../images/iconsSvg/allIconsTemp/windAnimate.svg';
import ClearDay from '../../images/iconsSvg/allIconsTemp/clear-day.svg';
import ClearDayStatic from '../../images/iconsSvg/allIconsTemp/clear-day-static.svg';
import RainProb from '../../images/iconsSvg/allIconsTemp/rainProb.svg';
import { format } from 'date-fns';
import { If } from '../../operators';
import { Forecast } from '../../interfaces/IForecast';
import { Blocks } from '../Card-Block/Card-Block-Default/card';
import { IconTemp } from './cardPrevisionStyled';

interface Prevision {
  prevision: string;
  date: number | string;
  icons: JSX.Element;
  type: string;
  name: string;
}

export type BlocksTreeId = {
  blockId: string;
  bounds: number[][];
  centroid: number[];
  name: string;
  abrv: string;
  blockParent: string;
  leafParent: boolean;
  date: string;
  data: {
    windSpeed: number;
    solarIrradiation: number;
    temperature: number;
    rain: number;
    relativeHumidity: number;
  };
};


export const PrevisionPresent = (
  blockSelected: Blocks[] | undefined,
  blockSelectedTree: BlocksTreeId[] | undefined,
  leafParent: boolean | undefined,
  theme: string | undefined,
  date: React.Dispatch<React.SetStateAction<string>> | undefined,
  indexPrevision: string | undefined
) => {
  const temperature: Prevision[] = [];
  if (blockSelected && blockSelected.length > 0 && blockSelected) {
    blockSelected.forEach((item) => {
      const dates = format(new Date(item.date), 'kk:mm');
      if (indexPrevision === 'present') {
        date && date(`Atualizado ás ${dates}`);
      }
      temperature.push({
        prevision: 'mm',
        date: item.data.rain,
        icons:
          item.data.rain > 1 ? (
            <>
              {/* <If condition={theme === 'dark'}>
                <IconTemp src={IconRainDay} />
              </If> */}
              {/* <If condition={theme === 'light'}> */}
              <IconTemp src={IconRain} />
              {/* </If> */}
            </>
          ) : //  { ? <IconTemp src={IconRain} /> :  <IconTemp src={IconRainDay} />}
            theme === 'light' ? (
              <IconTemp src={IconChuvaNublado} />
            ) : (
              <IconTemp src={IconChuvaNubladoDia} />
            ),
        type: 'rain',
        name: 'Chuva'
      });
      temperature.push({
        prevision: 'ºC',
        date: item.data.temperature,
        icons: <IconTemp src={IconTemperature} />,
        type: 'temperature',
        name: 'Temperatura'
      });
      temperature.push({
        prevision: 'Km/h',
        date: item.data.windSpeed,
        icons:
          item.data.windSpeed > 0 ? (
            <IconTemp src={IconWindAnimate} />
          ) : (
            <IconTemp src={IconWind} />
          ),
        type: 'windSpeed',
        name: 'V. Vento'
      });
      temperature.push({
        prevision: 'Wh/m²',
        date: item.data.solarIrradiation,
        icons:
          item.data.solarIrradiation > 0 ? (
            <IconTemp src={ClearDay} />
          ) : (
            <IconTemp src={ClearDayStatic} />
          ),
        type: 'solarIrradiation',
        name: 'Radiação'
      });
      temperature.push({
        prevision: '%',
        date: item.data.relativeHumidity,
        icons: <IconTemp src={IconHumidity} />,
        type: 'relativeHumidity',
        name: 'Umidade'
      });
    });
  } else {
    blockSelectedTree?.forEach((item) => {
      const dates = format(new Date(item.date), 'kk:mm');
      if (indexPrevision === 'present') {
        date && date(`Atualizado ás ${dates}`);
      }
      temperature.push({
        prevision: 'mm',
        date: item.data.rain,
        icons:
          item.data.rain > 1 ? (
            <>
              {/* <If condition={theme === 'dark'}>
                <IconTemp src={IconRainDay} />
              </If> */}
              {/* <If condition={theme === 'light'}> */}
              <IconTemp src={IconRain} />
              {/* </If> */}
            </>
          ) : //  { ? <IconTemp src={IconRain} /> :  <IconTemp src={IconRainDay} />}
            theme === 'light' ? (
              <IconTemp src={IconChuvaNublado} />
            ) : (
              <IconTemp src={IconChuvaNubladoDia} />
            ),
        type: 'rain',
        name: 'Chuva'
      });
      temperature.push({
        prevision: 'ºC',
        date: item.data.temperature,
        icons: <IconTemp src={IconTemperature} />,
        type: 'temperature',
        name: 'Temperatura'
      });
      temperature.push({
        prevision: 'Km/h',
        date: item.data.windSpeed,
        icons:
          item.data.windSpeed > 0 ? (
            <IconTemp src={IconWindAnimate} />
          ) : (
            <IconTemp src={IconWind} />
          ),
        type: 'windSpeed',
        name: 'V. Vento'
      });
      temperature.push({
        prevision: 'Wh/m²',
        date: item.data.solarIrradiation,
        icons:
          item.data.solarIrradiation > 0 ? (
            <IconTemp src={ClearDay} />
          ) : (
            <IconTemp src={ClearDayStatic} />
          ),
        type: 'solarIrradiation',
        name: 'Radiação'
      });
      temperature.push({
        prevision: '%',
        date: item.data.relativeHumidity,
        icons: <IconTemp src={IconHumidity} />,
        type: 'relativeHumidity',
        name: 'Umidade'
      });
    });
  }

  return temperature;
};

export const PrevisionFuture = (
  foreCasts: Forecast[] | undefined,
  theme: string | undefined,
  date: React.Dispatch<React.SetStateAction<string>> | undefined,
  indexPrevision: string | undefined
) => {
  const temperatureForeCast: Prevision[] = [];

  if (foreCasts && foreCasts.length > 0) {
    foreCasts?.forEach((item) => {
      if (indexPrevision === 'future') {
        const dates = format(new Date(item.forecast[0].date), 'dd/MM');
        date && date(`Próximos 10 dias`);
      }
      temperatureForeCast.push({
        prevision: 'mm',
        date: Math.round(item.forecast[0].rain),
        icons:
          item.forecast[0].rain > 1 ? (
            <>
              {/* <If condition={theme === 'dark'}>
                <IconTemp src={IconRainDay} />
              </If> */}
              {/* <If condition={theme === 'light'}> */}
              <IconTemp src={IconRain} />
              {/* </If> */}
            </>
          ) : //  { ? <IconTemp src={IconRain} /> :  <IconTemp src={IconRainDay} />}
            theme === 'dark' ? (
              <IconTemp src={IconChuvaNublado} />
            ) : (
              <IconTemp src={IconChuvaNubladoDia} />
            ),
        type: 'rain',
        name: 'Chuva'
      });

      temperatureForeCast.push({
        prevision: 'ºC - Max',
        date: Math.round(item.forecast[0].temperatureMax),
        icons: <IconTemp src={IconTemperatureMax} />,
        type: 'temperatureMax',
        name: 'Temperatura +'
      });
      temperatureForeCast.push({
        prevision: 'ºC - Min',
        date: Math.round(item.forecast[0].temperatureMin),
        icons: <IconTemp src={IconTemperatureMin} />,
        type: 'temperatureMin',
        name: 'Temperatura - min'
      });
      temperatureForeCast.push({
        prevision: 'mm',
        date: item.forecast[0].rainProbability.toFixed(2),
        icons: <IconTemp src={RainProb} />,
        type: 'rainProbability',
        name: 'Probabilidade de Chuva'
      });
      temperatureForeCast.push({
        prevision: '',
        date: item.forecast[0].rainPrediction,
        icons:
          theme === 'dark' ? (
            <IconTemp src={IconChuvaNublado} />
          ) : (
            <IconTemp src={IconChuvaNubladoDia} />
          ),
        type: 'rainPrediction',
        name: 'Previsão de chuva'
      });
    });
  }
  return temperatureForeCast;
};

export const PrevisionPast = (
  foreCasts: Forecast[] | undefined,
  theme: string | undefined,
  date: React.Dispatch<React.SetStateAction<string>> | undefined,
  indexPrevision: string | undefined,
) => {
  const temperaturePresent: Prevision[] = [];
  foreCasts?.forEach((item) => {
    const dates = format(new Date(item.past[0].date), 'dd/MM');

    if (indexPrevision === 'past') {
      date && date(`Últimos 10 dias`);
    }
    if (item.past.length > 0) {
      temperaturePresent.push({
        prevision: 'mm',
        date: 200,
        icons:
          item.past[0].rain > 1 ? (
            <>
              {/* <If condition={theme === 'light'}>
                <IconTemp src={IconRainDay} />
              </If> */}
              {/* <If condition={theme === 'dark'}> */}
              <IconTemp src={IconRain} />
              {/* </If> */}
            </>
          ) : //  { ? <IconTemp src={IconRain} /> :  <IconTemp src={IconRainDay} />}
            theme === 'dark' ? (
              <IconTemp src={IconChuvaNublado} />
            ) : (
              <IconTemp src={IconChuvaNubladoDia} />
            ),
        type: 'rain',
        name: 'Chuva'
      });
      temperaturePresent.push({
        prevision: 'ºC',
        date: item.past[0].temperatureMax,
        icons: <IconTemp src={IconTemperature} />,
        type: 'temperatureMax',
        name: 'Temperatura'
      });
      temperaturePresent.push({
        prevision: 'Km/h',
        date: item.past[0].windSpeed,
        icons:
          item.past[0].windSpeed > 0 ? (
            <IconTemp src={IconWindAnimate} />
          ) : (
            <IconTemp src={IconWind} />
          ),
        type: 'windSpeed',
        name: 'V-Vento'
      });
      temperaturePresent.push({
        prevision: 'Wh/m²',
        date: item.past[0].solarIrradiation,
        icons: <IconTemp src={ClearDay} />,
        type: 'solarIrradiation',
        name: 'Radiação'
      });
      temperaturePresent.push({
        prevision: '%',
        date: item.past[0].relativeHumidity,
        icons: <IconTemp src={IconHumidity} />,
        type: 'relativeHumidity',
        name: 'Umidade'
      });
    }
  });
  return temperaturePresent;
};
