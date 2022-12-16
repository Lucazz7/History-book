import { useMemo } from "react";
import {
  GridGenerator,
  HexGrid,
  Hexagon,
  Layout,
  Text,
  Pattern,
} from "react-hexgrid";
import "./Hexa.scss";
import { BsFillCloudLightningRainFill } from "react-icons/bs";
import { AiOutlineEye } from "react-icons/ai";
import { FaTemperatureHigh } from "react-icons/fa";
import { BsFillSunFill } from "react-icons/bs";
import IconRain from "../../../images/iconsSvg/rain.svg";
import Sum from "../../../images/iconsSvg/allIconsTemp/clear-day.svg";
import Nublado from "../../../images/iconsSvg/allIconsTemp/chuvaNublado.svg";
import { HexagonDivDad } from "../Hexagon";
import Draggable from "react-draggable";

export interface BlockPersonHexa {
  blockId: string;
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
  icons?: string;
  q: number;
  r: number;
  s: number;
  className?: string;
}
export const Hexag = () => {
  const exempleBLock = useMemo(() => {
    const test = [
      {
        blockId: "222",
        name: "Select",
        abrv: "Slc",
        blockParent: "dsd",
        leafParent: false,
        date: "2012",
        data: {
          windSpeed: 2,
          solarIrradiation: 22,
          temperature: 22,
          rain: 12,
          relativeHumidity: 13,
        },
      },
      {
        blockId: "222ss",
        name: "Default",
        abrv: "Def",
        blockParent: "dsd",
        leafParent: false,
        date: "2012",
        data: {
          windSpeed: 2,
          solarIrradiation: 22,
          temperature: 22,
          rain: 12,
          relativeHumidity: 13,
        },
      },
      {
        blockId: "222ss",
        name: "Default",
        abrv: "Def",
        blockParent: "dsd",
        leafParent: false,
        date: "2012",
        data: {
          windSpeed: 2,
          solarIrradiation: 22,
          temperature: 22,
          rain: 0,
          relativeHumidity: 13,
        },
      },
      {
        blockId: "222ss",
        name: "Default",
        abrv: "Def",
        blockParent: "dsd",
        leafParent: false,
        date: "2012",
        data: {
          windSpeed: 2,
          solarIrradiation: 22,
          temperature: 22,
          rain: 12,
          relativeHumidity: 13,
        },
      },
      {
        blockId: "222ss",
        name: "Default",
        abrv: "Def",
        blockParent: "dsd",
        leafParent: false,
        date: "2012",
        data: {
          windSpeed: 2,
          solarIrradiation: 22,
          temperature: 22,
          rain: 12,
          relativeHumidity: 13,
        },
      },
      {
        blockId: "22ss",
        name: "Default",
        abrv: "Def",
        blockParent: "dsd",
        leafParent: false,
        date: "2012",
        data: {
          windSpeed: 2,
          solarIrradiation: 22,
          temperature: 22,
          rain: 12,
          relativeHumidity: 13,
        },
      },
      {
        blockId: "2ss",
        name: "Default",
        abrv: "Def",
        blockParent: "dsd",
        leafParent: false,
        date: "2012",
        data: {
          windSpeed: 2,
          solarIrradiation: 22,
          temperature: 12,
          rain: 0,
          relativeHumidity: 13,
        },
      },
      {
        blockId: "2ss",
        name: "Default",
        abrv: "Def",
        blockParent: "dsd",
        leafParent: false,
        date: "2012",
        data: {
          windSpeed: 2,
          solarIrradiation: 22,
          temperature: 12,
          rain: 0,
          relativeHumidity: 13,
        },
      },
    ];
    return test;
  }, []);

  const hexagonsInicial = GridGenerator.hexagon(1);
  const newBlock = useMemo(() => {
    //HEXAGONOS BLOCKPARENT 0
    const newBlocks: BlockPersonHexa[] = [];
    exempleBLock.forEach((item, indexBlocks) => {
      hexagonsInicial.forEach((hexa, indexHex) => {
        if (indexHex === indexBlocks) {
          newBlocks.push({
            ...item,
            ...hexa,
            icons:
              item.data.rain > 1
                ? "pat-1"
                : item.data.solarIrradiation < 100.411004
                ? "pat-2"
                : "pat-3",
          });
        }
      });
    });
    return newBlocks;
  }, [exempleBLock, hexagonsInicial]);

  return (
    <Draggable>
      <HexagonDivDad>
        <HexGrid height={900} viewBox="-50 -50 100 100">
          <Layout
            size={{ x: 8.4, y: 8.4 }} //TAMANHO DOS HEXAGONOS
            flat={true}
            spacing={1.07}
          >
            {newBlock.map((item) => (
              <>
                <Hexagon
                  className={"hexagonNormal"}
                  key={item.blockId}
                  q={item.q}
                  r={item.r}
                  s={item.s}
                  fill={item.icons}
                >
                  <Text style={{ fill: "black" }}>{item.abrv}</Text>
                  <BsFillCloudLightningRainFill
                    className="iconsInfo"
                    x={-4}
                    y={-5}
                  />
                  <Text
                    className="textInfo"
                    x={2}
                    y={-3.5}
                    style={{
                      fill: "black",
                    }}
                  >
                    {Math.round(item.data.rain)} mm
                  </Text>

                  <BsFillSunFill className="iconsInfo" x={-4} y={-1.5} />
                  <Text
                    className="textInfo"
                    x={2.9}
                    y={0.4}
                    style={{
                      fill: "black",
                    }}
                  >
                    {Math.round(item.data.solarIrradiation)} Wh/m²
                  </Text>

                  <FaTemperatureHigh className="iconsInfo" x={-3.5} y={2} />
                  <Text
                    className="textInfo"
                    x={1.7}
                    y={4}
                    fontSize={100}
                    fontWeight="lighter"
                    style={{
                      fill: "black",
                    }}
                  >
                    {Math.round(item.data.temperature)} ºC
                  </Text>
                  <Pattern id="pat-1" link={IconRain} size={{ x: 8, y: 3.1 }} />
                  <Pattern id="pat-2" link={Sum} size={{ x: 8, y: 2.9 }} />
                  <Pattern id="pat-3" link={Nublado} size={{ x: 8, y: 3.1 }} />
                </Hexagon>
                <>
                  <Hexagon q={-1} r={2} s={-1} className="hexaCreatedAndSpand">
                    <AiOutlineEye
                      x={-4}
                      y={-1.9}
                      className="hexagonViewMoreIcon"
                    />
                    <Text x={2} y={0} className="hexagonViewMoreIcon">
                      {" "}
                      {exempleBLock.length - 7}
                    </Text>
                  </Hexagon>
                </>
              </>
            ))}
          </Layout>
        </HexGrid>
      </HexagonDivDad>
    </Draggable>
  );
};
