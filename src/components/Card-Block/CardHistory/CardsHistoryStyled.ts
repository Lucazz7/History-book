import styled from "styled-components";

export const ContainerHexaHistory = styled.div`
    text-align: center;
    position: relative;
    display: flex;
    align-items: center;
    max-width: 98%;
    min-width: 98%;
    overflow: auto;
    overflow-y: hidden;
`

export const SpaceIcon = styled.div`
    padding: 0.7rem;

    @media screen and (max-width: 400px) {

        padding: 0.3rem;

    }

    @media screen and (max-width: 600px) {

        padding: 0.3rem;

    }

    @media screen and (max-width: 800px) {

        padding: 0.1rem;

    }

    @media screen and (max-width: 300px) {

        padding: 0;

    }
`

export const ContainerCardHistory = styled.div`
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 3px;
    border-radius: 8px;
`

export const InfoCardHistory = styled.div`
    position: relative;
    display: flex;
    width: 55px;
    height: 100%;
    /* left/right margin approx. 25% of .hexagon width + spacing */
    background-color: rgba(63, 63, 63);
    align-items: center;
    text-align: center;
    justify-content: center;
    border-radius: 8px;


    &:hover {
        background-color: #FF7F2F;

    }

    overflow: auto;
`


export const CardHistoryButton = styled.button`
    width: 100%;
    height: 100%;
    padding: 5px;
    display: flex;
    background-color: transparent;
    border: none;
    justify-content: center;
    align-items: center;
    color: white;
    border-radius: 8px;
    overflow: hidden;
`