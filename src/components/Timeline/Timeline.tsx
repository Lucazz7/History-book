import React, { useEffect, useMemo, useState } from "react";
import { TimelineDad, TimelineDaughter } from "./TimelineStyle";
import {
  ITimeline,
  TimelineComponent,
  TimelineDado,
} from "../../interfaces/ITimeline";
import axios from "axios";
import {
  BsCloudRainFill,
  BsFillCircleFill,
  BsFillCloudRainFill,
  BsFillExclamationTriangleFill,
} from "react-icons/bs";
import { TbSnowflake } from "react-icons/tb";
import { GiLevelEndFlag } from "react-icons/gi";
import "./Timelineee.scss";

import { format } from "date-fns";
import If from "../../operators/if";

export const Timeline: React.FC<TimelineComponent> = ({ blockId }) => {
  const [dado, setDado] = useState<ITimeline[]>([]);

  useEffect(() => {
    axios
      .get(`http://localhost:3000/Timeline/?blockId=${blockId}`)
      .then((res) => {
        setDado(res.data);
        if (res.data.length === 0) {
          axios
            .get(`http://localhost:3000/Timeline/?blockId=EXEMPLO1`)
            .then((res) => {
              setDado(res.data);
            });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const ArrayTimeline = useMemo(() => {
    const arrTime: TimelineDado[] = [];

    dado.forEach((item) => {
      arrTime.unshift(...item.forecast);
      arrTime.unshift(item.present);
      arrTime.unshift(...item.past);
    });

    return arrTime.reverse();
  }, [dado]);
  return (
    <TimelineDad>
      <TimelineDaughter>
        {ArrayTimeline.map((item, index) => (
          <>
            {item.rain < 2 && item.alert === null && (
              <div
                className="centro"
                style={
                  index > 0 &&
                  ArrayTimeline[index - 1].rain > 2 &&
                  ArrayTimeline[index - 1].alert === null
                    ? {
                        borderTop: "3px solid",
                        borderImage: `${
                          item.windSpeed === undefined
                            ? "linear-gradient(#B5B5B5, #B5B5B5) 30"
                            : "linear-gradient(#FF7F2F, #FF7F2F) 30"
                        }`,
                      }
                    : item.windSpeed === undefined
                    ? {
                        borderImage: "linear-gradient(#B5B5B5, #B5B5B5) 30",
                      }
                    : { borderImage: "linear-gradient(#FF7F2F, #FF7F2F) 30" }
                } //MEIO
              >
                <div>
                  <div className="day">
                    <>
                      <BsCloudRainFill />
                      {Math.round(item.rain)}mm
                      <br />
                    </>

                    <div
                      style={{
                        position: "absolute",
                        right: "15rem",
                        top: "0.5rem",
                      }}
                    >
                      <div
                        style={{
                          marginTop: "4.3rem",
                          position: "absolute",
                          right: "6rem",
                        }}
                      >
                        {format(new Date(item.date), "dd/MM")}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            {item.rain > 2 && item.alert === null && (
              <div
                className="direita" /// Direita
                style={
                  index > 0 && ArrayTimeline[index - 1].rain < 2
                    ? {
                        borderTop: "3px solid",
                        borderImage: `${
                          item.windSpeed === undefined
                            ? "linear-gradient(#B5B5B5, #B5B5B5) 30"
                            : "linear-gradient(#FF7F2F, #FF7F2F) 30"
                        }`,
                      }
                    : index < ArrayTimeline.length - 1 &&
                      ArrayTimeline[index + 1].alert !== null
                    ? {
                        borderBottom: "3px solid",
                        borderImage: `${
                          item.windSpeed === undefined
                            ? "linear-gradient(#B5B5B5, #B5B5B5) 30"
                            : "linear-gradient(#FF7F2F, #FF7F2F) 30"
                        }`,
                      }
                    : index > 0 && ArrayTimeline[index - 1].alert !== null
                    ? {
                        borderTop: "3px solid",
                        borderImage: `${
                          item.windSpeed === undefined
                            ? "linear-gradient(#B5B5B5, #B5B5B5) 30"
                            : "linear-gradient(#FF7F2F, #FF7F2F) 30"
                        }`,
                      }
                    : item.windSpeed === undefined
                    ? {
                        borderImage: "linear-gradient(#B5B5B5, #B5B5B5) 30",
                      }
                    : { borderImage: "linear-gradient(#FF7F2F, #FF7F2F) 30" }
                }
              >
                <div
                  className="icone-direita" //Icone direita
                >
                  <BsFillCloudRainFill />
                </div>
                <div className="info">
                  <div className="chuva">
                    <>
                      <BsCloudRainFill />
                      {Math.round(item.rain)}mm
                      <br />
                    </>

                    <div
                      style={{
                        position: "absolute",
                        top: "4.7rem",
                        right: "20.9rem",
                      }}
                    >
                      {format(new Date(item.date), "dd/MM")}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {item.alert !== null && (
              <div
                className="esquerda" //esquerda
                style={
                  index > 0 &&
                  index < ArrayTimeline.length - 1 &&
                  ArrayTimeline[index - 1].alert === null &&
                  ArrayTimeline[index + 1].alert === null
                    ? {
                        borderTop: "3px solid",
                        borderBottom: "3px solid",
                        borderImage: `${
                          item.windSpeed === undefined
                            ? "linear-gradient(#B5B5B5, #B5B5B5) 30"
                            : "linear-gradient(#FF7F2F, #FF7F2F) 30"
                        }`,
                      }
                    : index > 0 && ArrayTimeline[index - 1].alert === null
                    ? {
                        borderTop: "3px solid",
                        borderImage: `${
                          item.windSpeed === undefined
                            ? "linear-gradient(#B5B5B5, #B5B5B5) 30"
                            : "linear-gradient(#FF7F2F, #FF7F2F) 30"
                        }`,
                      }
                    : index < ArrayTimeline.length - 1 &&
                      ArrayTimeline[index + 1].alert === null
                    ? {
                        borderBottom: "3px solid",
                        borderImage: `${
                          item.windSpeed === undefined
                            ? "linear-gradient(#B5B5B5, #B5B5B5) 30"
                            : "linear-gradient(#FF7F2F, #FF7F2F) 30"
                        }`,
                      }
                    : item.windSpeed === undefined
                    ? {
                        borderImage: "linear-gradient(#B5B5B5, #B5B5B5) 30",
                      }
                    : { borderImage: "linear-gradient(#FF7F2F, #FF7F2F) 30" }
                }
              >
                <div
                  className="icone-esquerda" //Icone
                >
                  <BsFillExclamationTriangleFill />
                </div>

                <div>
                  <div className="alert">
                    <div className="alerta">
                      <p>
                        <TbSnowflake />
                        {item.alert?.info}
                      </p>
                      <GiLevelEndFlag />
                      {item.alert?.level}
                      <br />
                      <div style={{ position: "absolute", right: "7rem" }}>
                        {format(new Date(item.date), "dd/MM")}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </>
        ))}
      </TimelineDaughter>
    </TimelineDad>
  );
};
