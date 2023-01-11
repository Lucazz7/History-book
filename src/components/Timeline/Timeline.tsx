import React, { useMemo } from "react";
import {
  TimelineCenter,
  TimelineDad,
  TimelineDate,
  TimelineDateLeft,
  TimelineDaughter,
  TimelineInfo,
  TimelineInfoLeft,
  TimelineInfoRight,
  TimelineLeft,
  TimelineRight,
} from "./TimelineStyle";
import { TimelineComponent, TimelineDado } from "../../interfaces/ITimeline";
import { BsCloudRainFill } from "react-icons/bs";
import { TbSnowflake } from "react-icons/tb";
import { format } from "date-fns";

export const Timeline: React.FC<TimelineComponent> = ({
  BlocosTimeline,
  pastAndPresent,
}) => {
  const ArrayTimeline = useMemo(() => {
    const arrTime: TimelineDado[] = [];
    BlocosTimeline.forEach((item) => {
      arrTime.unshift(...item.forecast);
      arrTime.unshift(item.present);
      arrTime.unshift(...item.past);
    });

    return arrTime.reverse();
  }, [BlocosTimeline]);
  return (
    <TimelineDad>
      <TimelineDaughter>
        {ArrayTimeline.map((item, index) => (
          <>
            {item.rain < 2 && item.alert === null && (
              <TimelineCenter
                style={
                  index > 0 &&
                  ArrayTimeline[index - 1].rain > 2 &&
                  ArrayTimeline[index - 1].alert === null
                    ? {
                        borderTop: "5px solid",
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
                <>
                  <TimelineInfo>
                    <>
                      <BsCloudRainFill />
                      {Math.round(item.rain)}mm
                      <br />
                    </>

                    <TimelineDate>
                      {format(new Date(item.date), "dd/MM")}
                    </TimelineDate>
                  </TimelineInfo>
                </>
              </TimelineCenter>
            )}
            {item.rain > 2 && item.alert === null && (
              <TimelineRight
                style={
                  index > 0 && ArrayTimeline[index - 1].rain < 2
                    ? {
                        borderTop: "5px solid",
                        borderImage: `${
                          item.windSpeed === undefined
                            ? "linear-gradient(#B5B5B5, #B5B5B5) 30"
                            : "linear-gradient(#FF7F2F, #FF7F2F) 30"
                        }`,
                      }
                    : index < ArrayTimeline.length - 1 &&
                      ArrayTimeline[index + 1].alert !== null
                    ? {
                        borderBottom: "5px solid",
                        borderImage: `${
                          item.windSpeed === undefined
                            ? "linear-gradient(#B5B5B5, #B5B5B5) 30"
                            : "linear-gradient(#FF7F2F, #FF7F2F) 30"
                        }`,
                      }
                    : index > 0 && ArrayTimeline[index - 1].alert !== null
                    ? {
                        borderTop: "5px solid",
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
                <TimelineInfo>
                  <TimelineInfoRight>
                    <BsCloudRainFill />
                    {Math.round(item.rain)}mm
                  </TimelineInfoRight>
                  <TimelineDate>
                    {format(new Date(item.date), "dd/MM")}
                  </TimelineDate>
                </TimelineInfo>
              </TimelineRight>
            )}

            {item.alert !== null && (
              <TimelineLeft //esquerda
                style={
                  index > 0 &&
                  index < ArrayTimeline.length - 1 &&
                  ArrayTimeline[index - 1].alert === null &&
                  ArrayTimeline[index + 1].alert === null
                    ? {
                        borderTop: "5px solid",
                        borderBottom: "5px solid",
                        borderImage: `${
                          item.windSpeed === undefined
                            ? "linear-gradient(#B5B5B5, #B5B5B5) 30"
                            : "linear-gradient(#FF7F2F, #FF7F2F) 30"
                        }`,
                      }
                    : index > 0 && ArrayTimeline[index - 1].alert === null
                    ? {
                        borderTop: "5px solid",
                        borderImage: `${
                          item.windSpeed === undefined
                            ? "linear-gradient(#B5B5B5, #B5B5B5) 30"
                            : "linear-gradient(#FF7F2F, #FF7F2F) 30"
                        }`,
                      }
                    : index < ArrayTimeline.length - 1 &&
                      ArrayTimeline[index + 1].alert === null
                    ? {
                        borderBottom: "5px solid",
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
                <TimelineInfo>
                  <TimelineDateLeft>
                    {format(new Date(item.date), "dd/MM")}
                  </TimelineDateLeft>

                  <TimelineInfoLeft>
                    <TbSnowflake />
                    {item.alert?.info}
                  </TimelineInfoLeft>
                </TimelineInfo>
              </TimelineLeft>
            )}
          </>
        ))}
      </TimelineDaughter>
    </TimelineDad>
  );
};
