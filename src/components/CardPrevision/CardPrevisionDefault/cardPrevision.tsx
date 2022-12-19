import { format } from "date-fns";
import { useMemo, useState } from "react";
import { icons } from "react-icons";
import { Forecast } from "../../../interfaces/IForecast";
import { If } from "../../../operators";
import { Blocks } from "../../Card-Block/Card-Block-Default/card";
import { CardsTemp, Context, DateInfoCard, DayBox, DivIconsTemp, Info, Left, PStyled, RightCard, Temp, TempInner, TopTime, WeatherNow } from "../cardPrevisionStyled";
import { BlocksTreeId, PrevisionFuture, PrevisionPast, PrevisionPresent } from "../PrevisionCards";

interface PrevisionProps {
    blockId?: string;
    foreCasts?: Forecast[];
    blocksArrayRedux?: Blocks[];
    blocksArrayMap?: BlocksTreeId[];
    blockParent?: string;
    leafParent?: boolean;
    BlockSelected?: Blocks[];
    theme?: string;
    setDataInfoBlock?: React.Dispatch<React.SetStateAction<string>>;
    setIndexPrevision?: React.Dispatch<React.SetStateAction<string>>;
    indexPrevision?: string;
    selectCard: number;
}

export const Prevision: React.FC<PrevisionProps> = ({
    BlockSelected,
    indexPrevision,
    blocksArrayRedux,
    foreCasts,
    blockId,
    blocksArrayMap,
    blockParent,
    leafParent,
    setDataInfoBlock,
    setIndexPrevision,
    selectCard,
    theme,
}) => {

    const [selectCardPrev, setSelectCardPrev] = useState<number>(selectCard);

    const selectTemp = useMemo(() => {
        const lasBlock = blocksArrayRedux?.filter(
            (item) => item.blockParent === blockParent
        );

        const filterBlockArray = blocksArrayMap?.filter(
            (item) => item.blockId === blockId
        );

        const blockSelected =
            BlockSelected && BlockSelected.length > 0
                ? BlockSelected.filter((item) => item.blockId === blockId)
                : lasBlock?.filter((item) => item.blockId === blockId);
        //TODO: Temperatura atual
        const temperature = PrevisionPresent(
            blockSelected,
            filterBlockArray,
            leafParent,
            theme,
            setDataInfoBlock,
            indexPrevision
        );
        //TODO: Temperatura proximo 10 dias
        const temperatureForeCast = PrevisionFuture(
            foreCasts,
            theme,
            setDataInfoBlock,
            indexPrevision
        );
        //TODO: Temperatura 10 dias anteriores
        const temperaturePast = PrevisionPast(
            foreCasts,
            theme,
            setDataInfoBlock,
            indexPrevision
        );

        const allStateTemp = [temperature, temperaturePast, temperatureForeCast];

        if (foreCasts && BlockSelected) {
            // const dates = format(new Date(bloco[0].date), 'kk:mm');
            const dates = format(new Date(BlockSelected[0].date), 'kk:mm');

            setDataInfoBlock && setDataInfoBlock(`Atualizado ás ${dates}`);
        }
        return allStateTemp;
    }, [BlockSelected, blockId, foreCasts, theme, indexPrevision]);

    return (
        <CardsTemp className="cardsTemp">

            {selectTemp[
                indexPrevision === 'present' ? 0 : indexPrevision === 'past' ? 1 : 2
            ].map((item, index) => (
                <DivIconsTemp indexPrevision={indexPrevision}>
                    <DayBox>
                        <Context>

                            <Left style={
                                indexPrevision !== 'present' && selectCardPrev === index
                                    ? { background: '#111820', color: 'white' }
                                    : {}
                            }>
                                <TopTime indexPrevision={indexPrevision}>
                                    <TempInner>
                                        <WeatherNow>
                                            {item.icons}
                                        </WeatherNow>
                                        <Info>
                                            <p>{item.name}</p>
                                        </Info>
                                        {indexPrevision === 'present' ?
                                            <Temp>
                                                <p>
                                                    {Math.round(item.date as number)}
                                                    {item.prevision}
                                                </p>
                                            </Temp> : ''}
                                    </TempInner>
                                </TopTime>
                            </Left>
                            {indexPrevision === 'past' ? (
                                <>
                                    {selectCardPrev === index ?
                                        <RightCard active={selectCardPrev === index} >
                                            {foreCasts?.map((infoTempList) =>
                                                infoTempList.past.map((info) => (
                                                    <div className="weatherList">
                                                        <DateInfoCard>
                                                            {format(new Date(info.date), 'dd/MM')}
                                                        </DateInfoCard>
                                                        <PStyled>
                                                            {Math.round(
                                                                info[
                                                                (item.type as 'rain') ||
                                                                'temperatureMax' ||
                                                                'solarIrradiation' ||
                                                                'windSpeed' ||
                                                                'relativeHumidity'
                                                                ]
                                                            )}
                                                            {item.prevision}
                                                        </PStyled>
                                                    </div>
                                                ))
                                            )}
                                        </RightCard>
                                        : ''}
                                </>
                            ) : indexPrevision === 'future' ? (
                                <>
                                    {selectCardPrev === index ?
                                        <RightCard active={selectCardPrev === index} >
                                            {foreCasts?.map((infoTempList) =>
                                                infoTempList.forecast.map((info) => (
                                                    <div className="weatherList">
                                                        <PStyled>
                                                            {format(new Date(info.date), 'dd/MM')}
                                                        </PStyled>
                                                        <PStyled>
                                                            {typeof info[item.type] === 'string'
                                                                ? info[item.type]
                                                                : info[item.type].toFixed(1)}
                                                        </PStyled>
                                                    </div>
                                                ))
                                            )}
                                        </RightCard>
                                        : ''}
                                </>
                            ) : null}

                        </Context>
                    </DayBox>
                </DivIconsTemp>
            ))
            }
        </CardsTemp >
    )
}