import { BsCloudLightningRainFill, BsSunFill } from "react-icons/bs";
import { BiWind } from "react-icons/bi";
import { WiHumidity } from "react-icons/wi";
import { FaTemperatureHigh } from "react-icons/fa";
import { CardCol, CardsCols, ContainerBack, ContainerCardBlock, ContainerCardsWrapper, ContainerFront, Fog, Fog2, Fog3, Fog4, Fog5, Frame, HexagonAndCardGrid, InfoBlock, Thing } from "../cardBlockStyle";
import { useEffect, useMemo } from "react";
import './effectRain.scss';

export type Blocks = {
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
};


interface CardsProps {
    blocks?: Blocks[];
    blockSelected?: string;
}


export const CardBlock: React.FC<CardsProps> = ({
    blocks,
    blockSelected,
}: CardsProps) => {
    const exempleBLock = useMemo(() => {
        const test = [{
            blockId: '222',
            name: 'Select',
            abrv: 'Slc',
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
            name: 'Default',
            abrv: 'Def',
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
        if (blocks === undefined) {
            return test
        }
        else {
            return blocks
        }


    }, [blocks])
    return (
        <>
            <HexagonAndCardGrid>
                <ContainerCardsWrapper>
                    {exempleBLock && exempleBLock.map((item) => (
                        <CardsCols>
                            <CardCol>
                                <ContainerCardBlock>
                                    <ContainerFront blockselect={item.blockId === '222'} className="front" onClick={() => true}>
                                        <Frame>
                                            <Fog className="grayscale saturate-ver5" src="https://www.freepnglogos.com/uploads/cloud-png/small-single-cloud-image-transparent-20.png" />
                                            <Fog2 className="grayscale saturate-ver1" src="https://www.freepnglogos.com/uploads/cloud-png/small-single-cloud-image-transparent-20.png" />
                                            <Fog3 className="grayscale saturate-ver2" src="https://www.freepnglogos.com/uploads/cloud-png/small-single-cloud-image-transparent-20.png" />
                                            <Fog className="grayscale saturate-ver3" src="https://www.freepnglogos.com/uploads/cloud-png/small-single-cloud-image-transparent-20.png" />
                                            <Fog4 className="grayscale saturate-ver2" src="https://www.freepnglogos.com/uploads/cloud-png/small-single-cloud-image-transparent-20.png" />
                                            <Fog5 className="grayscale saturate-ver4" src="https://www.freepnglogos.com/uploads/cloud-png/small-single-cloud-image-transparent-20.png" />
                                            <InfoBlock className="infoBlock">
                                                <p>{item.abrv}</p>
                                                <span>{item.name}</span>

                                                <Thing>
                                                    <div className="rainBig1"></div>
                                                    <div className="rainBig2"></div>
                                                    <div className="rainBig3"></div>
                                                    <div className="rainBig4"></div>
                                                    <div className="rainBig5"></div>
                                                    <div className="rainBig6"></div>
                                                    <div className="rainBig7"></div>
                                                    <div className="rainBig8"></div>
                                                    <div className="rainBig9"></div>
                                                    <div className="rainBig10"></div>


                                                    <div className="rainMed2"></div>
                                                    <div className="rainMed3"></div>
                                                    <div className="rainMed4"></div>
                                                    <div className="rainMed5"></div>
                                                    <div className="rainMed6"></div>
                                                    <div className="rainMed7"></div>
                                                    <div className="rainMed8"></div>
                                                    <div className="rainMed9"></div>
                                                    <div className="rainMed10"></div>

                                                    <div className="rainTiny2"></div>
                                                    <div className="rainTiny3"></div>
                                                    <div className="rainTiny4"></div>
                                                    <div className="rainTiny5"></div>
                                                    <div className="rainTiny6"></div>
                                                    <div className="rainTiny7"></div>
                                                    <div className="rainTiny8"></div>
                                                    <div className="rainTiny9"></div>
                                                    <div className="rainTiny10"></div>

                                                </Thing >

                                                {/* <div className="rain-big-1"></div>
                                                <div className="rain-big-2"></div>
                                                <div className="rain-big-3"></div>
                                                <div className="rain-big-4"></div>
                                                <div className="rain-big-5"></div>
                                                <div className="rain-big-6"></div>
                                                <div className="rain-big-7"></div>
                                                <div className="rain-big-8"></div>
                                                <div className="rain-big-9"></div>
                                                <div className="rain-big-10"></div>

                                                <div className="rain-med-2"></div>
                                                <div className="rain-med-3"></div>
                                                <div className="rain-med-4"></div>
                                                <div className="rain-med-5"></div>
                                                <div className="rain-med-6"></div>
                                                <div className="rain-med-7"></div>
                                                <div className="rain-med-8"></div>
                                                <div className="rain-med-9"></div>
                                                <div className="rain-med-10"></div>

                                                <div className="rain-tiny-2"></div>
                                                <div className="rain-tiny-3"></div>
                                                <div className="rain-tiny-4"></div>
                                                <div className="rain-tiny-5"></div>
                                                <div className="rain-tiny-6"></div>
                                                <div className="rain-tiny-7"></div>
                                                <div className="rain-tiny-8"></div>
                                                <div className="rain-tiny-9"></div>
                                                <div className="rain-tiny-10"></div> */}
                                            </InfoBlock>
                                        </Frame>
                                    </ContainerFront>
                                    <ContainerBack className="back" onClick={() => true}>
                                        <InfoBlock className="infoBlock">
                                            <div className="infoCardsBlock">
                                                <p>
                                                    <BsCloudLightningRainFill
                                                        style={{ fontSize: '18px', margin: '2px' }}
                                                    />{' '}
                                                    <a> {Math.round(item.data.rain)} mm</a>
                                                </p>
                                                <p>
                                                    <FaTemperatureHigh
                                                        style={{ fontSize: '18px', margin: '2px' }}
                                                    />{' '}
                                                    <a> {Math.round(item.data.temperature)} ºC</a>
                                                </p>
                                                <p>
                                                    <BiWind style={{ fontSize: '18px', margin: '2px' }} />{' '}
                                                    <a> {Math.round(item.data.windSpeed)} Km/h</a>
                                                </p>
                                                <p>
                                                    <BsSunFill
                                                        style={{ fontSize: '18px', margin: '2px' }}
                                                    />{' '}
                                                    <a> {Math.round(item.data.solarIrradiation)} Wh/m²</a>
                                                </p>
                                                <p>
                                                    <WiHumidity
                                                        style={{ fontSize: '25px', margin: '2px' }}
                                                    />
                                                    <a> {Math.round(item.data.relativeHumidity)} % </a>
                                                </p>
                                            </div>
                                        </InfoBlock>
                                    </ContainerBack>
                                </ContainerCardBlock>
                            </CardCol>
                        </CardsCols>
                    ))}
                </ContainerCardsWrapper>
            </HexagonAndCardGrid></>
    );
};


