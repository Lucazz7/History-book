import { BsCloudLightningRainFill, BsSunFill } from "react-icons/bs";
import { BiWind } from "react-icons/bi";
import { WiHumidity } from "react-icons/wi";
import { FaTemperatureHigh } from "react-icons/fa";
import { CardCol, CardsCols, ContainerBack, ContainerCardBlock, ContainerCardsWrapper, ContainerFront, Fog, Fog2, Fog3, Fog4, Fog5, Frame, HexagonAndCardGrid, InfoBlock } from "../cardBlockStyle";
import { useMemo } from "react";

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
