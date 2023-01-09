import { FaPlay } from "react-icons/fa";
import { CardHistoryButton, ContainerCardHistory, ContainerHexaHistory, InfoCardHistory, SpaceIcon } from "./CardsHistoryStyled";


export interface HistoryBlocks {
    name: string;
    id: string;
}

interface CardsHistoryProps {
    historyBlocks: HistoryBlocks[];
}

export const CardHistory: React.FC<CardsHistoryProps> = ({
    historyBlocks,

}: CardsHistoryProps) => {

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

                    <ContainerCardHistory>
                        <InfoCardHistory style={
                            index === historyBlocks.length - 1
                                ? { background: '#FF7F2F' }
                                : {}
                        }>
                            <CardHistoryButton>
                                {item.name}
                            </CardHistoryButton>
                        </InfoCardHistory>
                    </ContainerCardHistory>
                </>
            ))}
        </ContainerHexaHistory>
    );
};