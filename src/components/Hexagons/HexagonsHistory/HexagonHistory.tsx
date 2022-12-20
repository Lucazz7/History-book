import { FaPlay } from "react-icons/fa";
import { ContainerHexaHistory, HexHistory, SpaceIcon } from "./hexagonHistoryStyled";

export interface HistoryBlocks {
    name: string;
    id: string;
}

interface HexagonHistoryProps {
    historyBlocks: HistoryBlocks[];
}

export const HexagonsHistory: React.FC<HexagonHistoryProps> = ({
    historyBlocks,

}: HexagonHistoryProps) => {

    return (
        <ContainerHexaHistory>
            {historyBlocks && historyBlocks.map((item, index) => (
                <>
                    {index > 0 ? (
                        <SpaceIcon>
                            <FaPlay
                            // style={
                            //     theme === 'light' ? { color: 'black' } : { color: 'white' }
                            // }
                            />
                        </SpaceIcon>
                    ) : ('')}

                    <HexHistory>
                        <a>
                            <svg version="1.1" viewBox="0 0 600 516.8" style={
                                index === historyBlocks.length - 1
                                    ? { stroke: '#B5B5B5' }
                                    : {}
                            }>
                                <polygon points="150.7,516.8 1.5,258.4 150.7,0 449,0 598.2,258.4 449,516.8 " />
                            </svg>
                            <span>{item.name}</span>
                        </a>

                    </HexHistory>
                </>
            ))}
        </ContainerHexaHistory>
    );
};