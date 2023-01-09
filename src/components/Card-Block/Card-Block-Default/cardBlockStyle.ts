import styled, { css } from "styled-components";
import { keyframes } from 'styled-components'

export const HexagonAndCardGrid = styled.div`
    position: relative;
    z-index: 0;
    overflow: auto;
    overflow-x: hidden;
    justify-content: center;
    display: flex;
    max-width: 100%;
    min-width: 100%;
    margin-top: 2rem;

    &::-webkit-scrollbar {
        box-shadow: inset 0 0 4px grey;
        border-radius: 10px;
        width: 0px;
    }
`

export const ContainerCardsWrapper = styled.div`
    width: 70%;
    top: 20px;
    margin: 0 auto;
    display: inline-block;
    position: relative;
    align-items: center;
    text-align: center;
`

export const CardsCols = styled.div`
    display: -webkit-box;
    display: -ms-flexbox;
    display: inline-block;
    position: relative;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    min-width: 20%;
    margin: 10px;
`

export const CardCol = styled.div`
    display: inline-block;
    position: relative;
    justify-content: center;
    width: 180px;

`
export const ContainerCardBlock = styled.div`
    -webkit-transform-style: preserve-3d;
    transform-style: preserve-3d;
    -webkit-perspective: 1000px;
    perspective: 1000px;

    .back {
        -webkit-transform: rotateY(180deg);
        transform: rotateY(180deg);
        -webkit-transform-style: preserve-3d;
        transform-style: preserve-3d;
      }

    .front {
        -webkit-transform: rotateY(0deg);
        transform: rotateY(0deg);
        -webkit-transform-style: preserve-3d;
        transform-style: preserve-3d;
      }

      :hover .back {
        -webkit-transform: rotateY(0deg);
        transform: rotateY(0deg);
        -webkit-transform-style: preserve-3d;
        transform-style: preserve-3d;
      }

      :hover .front {
        -webkit-transform: rotateY(-180deg);
        transform: rotateY(-180deg);
        -webkit-transform-style: preserve-3d;
        transform-style: preserve-3d;
      }
`
export const ContainerFront = styled.div<{ blockselect: boolean }>`
    background-size: cover;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    background-position: center;
    -webkit-transition: -webkit-transform 0.7s cubic-bezier(0.4, 0.2, 0.2, 1);
    transition: -webkit-transform 0.7s cubic-bezier(0.4, 0.2, 0.2, 1);
    -o-transition: transform 0.7s cubic-bezier(0.4, 0.2, 0.2, 1);
    transition: transform 0.7s cubic-bezier(0.4, 0.2, 0.2, 1);
    transition: transform 0.7s cubic-bezier(0.4, 0.2, 0.2, 1),
    -webkit-transform 0.7s cubic-bezier(0.4, 0.2, 0.2, 1);
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    text-align: center;
    min-height: 220px;
    height: auto;
    border-radius: 10px;
    background: ${({ blockselect }) => blockselect ? '#F29357' : '#DCDCDC'} ;
    border: 2px solid ${({ blockselect }) => blockselect ? '#FF6200' : '#C2C2C2'} ;

    font-size: 1.2rem;
    color: black;

    p {
    font-weight: bold;
    color: white;
    }
    .infoBlock {
        
        p {
        font-size: 1.4rem;
        margin-bottom: 2rem;
        position: relative;
        display: flex;
        justify-content: center;
        text-align: center;
        }

        p:after {
            content: "";
            width: 4rem;
            height: 2px;
            position: absolute;
            background: #111820;
            left: 0;
            right: 0;
            margin: 0 auto;
            bottom: -0.75rem;
            display: flex;
            justify-content: center;
            text-align: center;
          }

          span {
            color: rgba(255, 255, 255, 0.7);
            font-weight: 200;
            font-size: 16px;
            font-weight: bold;
          
            // font-family: 'Montserrat';
          
            display: flex;
            justify-content: center;
            text-align: center;
          }
      }
`

export const ContainerBack = styled.div`
    background-size: cover;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    background-position: center;
    -webkit-transition: -webkit-transform 0.7s cubic-bezier(0.4, 0.2, 0.2, 1);
    transition: -webkit-transform 0.7s cubic-bezier(0.4, 0.2, 0.2, 1);
    -o-transition: transform 0.7s cubic-bezier(0.4, 0.2, 0.2, 1);
    transition: transform 0.7s cubic-bezier(0.4, 0.2, 0.2, 1);
    transition: transform 0.7s cubic-bezier(0.4, 0.2, 0.2, 1),
    -webkit-transform 0.7s cubic-bezier(0.4, 0.2, 0.2, 1);
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    text-align: center;
    min-height: 220px;
    height: auto;
    border-radius: 10px;

    font-size: 1.2rem;
    color: black;

    background: #F29357;
    background: -webkit-linear-gradient(45deg, #111820 0%, #F29357 100%);
    background: -o-linear-gradient(45deg, #F29357 0%, #111820 100%);
    background: linear-gradient(45deg, #111820 0%, #cedce7 100%);

    position: absolute;
    top: 0;
    left: 0;
    width: 180px;

    p {
    font-weight: bold;
    color: white;
    }
`
export const Frame = styled.div`
    position: relative;
    height: 214px;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    box-shadow: 4px 8px 16px 0 rgba(0, 0, 0, 0.1);
    overflow: hidden;
    background: #14191d56;
    font-family: 'Open Sans', Helvetica, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    .blur {
        filter: blur(3px);
      }
    .grayscale {
        filter: grayscale(100%);
      }
      
      .saturate {
        filter: brightness(0);
      }
      
      .saturate-ver2 {
        filter: brightness(0.6);
      }
      .saturate-ver3 {
        filter: brightness(0.8);
      }
      .saturate-ver4 {
        filter: brightness(0.5);
      }
      .saturate-ver5 {
        filter: brightness(0.9);
      }
`


export const FrameClearDay = styled.div`
    position: relative;
    height: 214px;
    justify-content: center;
    background: linear-gradient(to bottom, rgb(40, 182, 252), rgb(139, 216, 255));
    align-items: center;
    border-radius: 10px;
    box-shadow: 4px 8px 16px 0 rgba(0, 0, 0, 0.1);
    overflow: hidden;
    font-family: 'Open Sans', Helvetica, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    .blur {
      filter: blur(3px);
    }
  .grayscale {
      filter: grayscale(100%);
    }
    
    .saturate {
      filter: brightness(0);
    }
      .saturate-ver2 {
        filter: brightness(1.1);
      }
      .saturate-ver3 {
        filter: brightness(1.5);
      }
      .saturate-ver4 {
        filter: brightness(1.5);
      }
      .saturate-ver5 {
        filter: brightness(1.5);
      }
`

const float = keyframes`
    0% {
        transform: translateX(-540px);
    }

    100% {
        transform: translateX(0px);
    }
`


const float2 = keyframes`
    0% {
        transform: translateX(-1040px);
    }

    100% {
        transform: translateX(500px);
    }
`

const float3 = keyframes`
    0% {
        transform: translateX(340px);
    }

    100% {
        transform: translateX(-500px);
    }
`

const float4 = keyframes`
    0% {
        transform: translateX(200px);
    }

    100% {
        transform: translateX(-1000px);
    }
`

const float5 = keyframes`
    0% {
        transform: translateX(440px);
    }

    100% {
        transform: translateX(-1500px);
    }
`


export const Fog = styled.img`
    height: 200px;
    width: 400px;
    position: absolute;
    bottom: 90px;
    animation: ${float} 60s linear infinite reverse;
    z-index: 2;

    .grayscale {
        filter: grayscale(100%);
      }
      
      .saturate {
        filter: brightness(0);
      }
      
      .saturate-ver2 {
        filter: brightness(0.0);
      }
`

export const FogClearDay = styled.img`
    height: 200px;
    width: 400px;
    position: absolute;
    bottom: 140px;
    animation: ${float} 70s linear infinite reverse;
    z-index: 2;

    .grayscale {
        filter: grayscale(100%);
      }
      
      .saturate {
        filter: brightness(0);
      }
      
      .saturate-ver2 {
        filter: brightness(0.0);
      }
`

export const FogClearDay2 = styled.img`
    height: 200px;
    width: 400px;
    position: absolute;
    bottom: 142px;

    animation: ${float} 60s linear infinite reverse;
    z-index: 2;

    .grayscale {
        filter: grayscale(100%);
      }
      
      .saturate {
        filter: brightness(0);
      }
      
      .saturate-ver2 {
        filter: brightness(0.0);
      }
`

export const Fog2 = styled.img`
    height: 200px;
    width: 400px;
    position: absolute;
    bottom: 90px;
    animation: ${float2} 60s linear infinite reverse;
    z-index: 2;

    .grayscale {
        filter: grayscale(100%);
      }
      
      .saturate {
        filter: brightness(0);
      }
      
      .saturate-ver2 {
        filter: brightness(0.2);
      }
`
export const Fog3 = styled.img`
    height: 200px;
    width: 400px;
    position: absolute;
    bottom: 90px;
    animation: ${float3} 60s linear infinite reverse;
    z-index: 2;
    .grayscale {
        filter: grayscale(100%);
      }
      
      .saturate {
        filter: brightness(0);
      }
      
      .saturate-ver2 {
        filter: brightness(0.2);
      }
`

export const Fog4 = styled.img`
    height: 200px;
    width: 400px;
    position: absolute;
    bottom: 90px;
    animation: ${float4} 60s linear infinite reverse;
    z-index: 2;
    .grayscale {
        filter: grayscale(100%);
      }
      
      .saturate {
        filter: brightness(0);
      }
      
      .saturate-ver2 {
        filter: brightness(0.2);
      }
`

export const Fog5 = styled.img`
    height: 200px;
    width: 400px;
    position: absolute;
    bottom: 90px;
    animation: ${float5} 60s linear infinite reverse;
    z-index: 2;

`

export const InfoBlock = styled.div`
    -webkit-transform: translateY(-50%) translateZ(60px) scale(0.94);
    transform: translateY(-50%) translateZ(60px) scale(0.94);
    top: 50%;
    position: absolute;
    left: 0;
    width: 100%;
    padding: 2rem;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    outline: 1px solid transparent;
    -webkit-perspective: inherit;
    perspective: inherit;
    z-index: 2;

    .infoCardsBlock{
        font-size: 14px;
        display: inline-block;
        justify-content: center;
        text-align: center;
        a {
          color: white;
        }
        a {
          text-decoration: none;
        }
    }
`



const breatheAnimation = keyframes`
  0% {
      transform: translate3d(40px, -320px, 0) scaleX(1) scaleY(1) rotate(17deg);
    }

    80% {
      transform: translate3d(0, 0, 0) scaleX(1) scaleY(1) rotate(17deg);
    }

    100% {
      transform: translate3d(0, 0, 0) scaleX(1) scaleY(0) rotate(0deg);
    }
`

export const Thing = styled.div`  
       z-index: 0;
      .rainBig1 {
        position: absolute;
        left: 25px;
        bottom: 5px;
        @include circle(6px);
        background-color: rgba(231, 231, 231, 0.096);
        border-radius: 50%;
        animation: ${breatheAnimation} 2.2s linear infinite;
        animation-fill-mode: both;
        transform-origin: 50% 100%;
    
        &:before {
          position: absolute;
          content: '';
          display: block;
          top: -2px;
          left: 1px;
          @include circle(6px);
          background: rgba(231, 231, 231, 0.096);
          border-radius: 3px;
        }
    
        &:after {
          position: absolute;
          content: '';
          display: block;
          top: -5px;
          left: 2px;
          width: 4px;
          height: 10px;
          background: rgba(231, 231, 231, 0.096);
          border-radius: 50%;
        }
      }
      .rainBig2{
        position: absolute;
        left: 35px;
        bottom: 5px;
        @include circle(6px);
        background-color: rgba(231, 231, 231, 0.096);
        border-radius: 50%;
        animation: ${breatheAnimation} 1.7s linear infinite;
        animation-fill-mode: both;
        transform-origin: 50% 100%;
    
        &:before {
          position: absolute;
          content: '';
          display: block;
          top: -2px;
          left: 1px;
          @include circle(6px);
          background: rgba(231, 231, 231, 0.096);
          border-radius: 3px;
        }
    
        &:after {
          position: absolute;
          content: '';
          display: block;
          top: -5px;
          left: 2px;
          width: 4px;
          height: 10px;
          background: rgba(231, 231, 231, 0.096);
          border-radius: 50%;
        }
      }
      .rainBig3{
        position: absolute;
        left: 65px;
        bottom: 5px;
        @include circle(6px);
        background-color: rgba(231, 231, 231, 0.096);
        border-radius: 50%;
        animation: ${breatheAnimation} 1.4s linear infinite;
        animation-fill-mode: both;
        transform-origin: 50% 100%;
    
        &:before {
          position: absolute;
          content: '';
          display: block;
          top: -2px;
          left: 1px;
          @include circle(6px);
          background: rgba(231, 231, 231, 0.096);
          border-radius: 3px;
        }
    
        &:after {
          position: absolute;
          content: '';
          display: block;
          top: -5px;
          left: 2px;
          width: 4px;
          height: 10px;
          background: rgba(231, 231, 231, 0.096);
          border-radius: 50%;
        }
      }
      .rainBig4{
        position: absolute;
        left: 20px;
        bottom: 5px;
        @include circle(6px);
        background-color: rgba(231, 231, 231, 0.096);
        border-radius: 50%;
        animation: ${breatheAnimation} 1.3s linear infinite;
        animation-fill-mode: both;
        transform-origin: 50% 100%;
    
        &:before {
          position: absolute;
          content: '';
          display: block;
          top: -2px;
          left: 1px;
          @include circle(6px);
          background: rgba(231, 231, 231, 0.096);
          border-radius: 3px;
        }
    
        &:after {
          position: absolute;
          content: '';
          display: block;
          top: -5px;
          left: 2px;
          width: 4px;
          height: 10px;
          background: rgba(231, 231, 231, 0.096);
          border-radius: 50%;
        }
      }
      .rainBig5{
        position: absolute;
        left: 80px;
        bottom: 5px;
        @include circle(6px);
        background-color: rgba(231, 231, 231, 0.096);
        border-radius: 50%;
        animation: ${breatheAnimation} 1.9s linear infinite;
        animation-fill-mode: both;
        transform-origin: 50% 100%;
    
        &:before {
          position: absolute;
          content: '';
          display: block;
          top: -2px;
          left: 1px;
          @include circle(6px);
          background: rgba(231, 231, 231, 0.096);
          border-radius: 3px;
        }
    
        &:after {
          position: absolute;
          content: '';
          display: block;
          top: -5px;
          left: 2px;
          width: 4px;
          height: 10px;
          background: rgba(231, 231, 231, 0.096);
          border-radius: 50%;
        }
      }
      .rainBig6{
        position: absolute;
        left: 120px;
        bottom: 15px;
        @include circle(6px);
        background-color: rgba(231, 231, 231, 0.096);
        border-radius: 50%;
        animation: ${breatheAnimation} 1.3s linear infinite;
        animation-fill-mode: both;
        transform-origin: 50% 100%;
    
        &:before {
          position: absolute;
          content: '';
          display: block;
          top: -2px;
          left: 1px;
          @include circle(6px);
          background: rgba(231, 231, 231, 0.096);
          border-radius: 3px;
        }
    
        &:after {
          position: absolute;
          content: '';
          display: block;
          top: -5px;
          left: 2px;
          width: 4px;
          height: 10px;
          background: rgba(231, 231, 231, 0.096);
          border-radius: 50%;
        }
      }

      .rainBig7{
        position: absolute;
        left: 96px;
        bottom: 15px;
        z-index: 0;
        @include circle(6px);
        background-color: rgba(231, 231, 231, 0.096);
        border-radius: 50%;
        animation: ${breatheAnimation} 1.4s linear infinite;
        animation-fill-mode: both;
        transform-origin: 50% 100%;
    
        &:before {
          position: absolute;
          content: '';
          display: block;
          top: -5px;
          left: 2px;
          width: 4px;
          height: 10px;
          background: rgba(231, 231, 231, 0.096);
          border-radius: 50%;
        }
    
        &:after {
          position: absolute;
          content: '';
          display: block;
          top: -5px;
          left: 2px;
          width: 4px;
          height: 10px;
          background: rgba(231, 231, 231, 0.096);
          border-radius: 50%;
        }
      }
      .rainBig8{
        position: absolute;
        left: 140px;
        bottom: 15px;
        z-index: 0;
        @include circle(6px);
        background-color: rgba(231, 231, 231, 0.096);
        border-radius: 50%;
        animation: ${breatheAnimation} 2s linear infinite;
        animation-fill-mode: both;
        transform-origin: 50% 100%;
    
        &:before {
          position: absolute;
          content: '';
          display: block;
          top: -2px;
          left: 1px;
          @include circle(6px);
          background: rgba(231, 231, 231, 0.096);
          border-radius: 3px;
        }
    
        &:after {
          position: absolute;
          content: '';
          display: block;
          top: -5px;
          left: 2px;
          width: 4px;
          height: 10px;
          background: rgba(231, 231, 231, 0.096);
          border-radius: 50%;
        }
      }

      .rainMed2 {
        @extend .rainBig1;
        left: 100px;
        bottom: 5px;
        opacity: 0.6;
        @include circle(6px);
        animation: ${breatheAnimation} 1s linear infinite;
        animation-fill-mode: both;
    
        &:before {
          top: -2px;
          left: 1px;
          @include circle(4px);
        }
    
        &:after {
          top: -4px;
          left: 2px;
          width: 2px;
          height: 6px;
        }
      }
      
      .rainMed3 {
        @extend .rainBig1;
        left: 50px;
        bottom: 5px;
        opacity: 0.6;
        @include circle(6px);
        animation: ${breatheAnimation} 1s linear infinite;
        animation-fill-mode: both;
    
        &:before {
          top: -2px;
          left: 1px;
          @include circle(4px);
        }
    
        &:after {
          top: -4px;
          left: 2px;
          width: 2px;
          height: 6px;
        }
      }

      .rainMed4 {
        @extend .rainBig1;
        left: 70px;
        bottom: 5px;
        opacity: 0.6;
        @include circle(6px);
        animation: ${breatheAnimation} 1s linear infinite;
        animation-fill-mode: both;
    
        &:before {
          top: -2px;
          left: 1px;
          @include circle(4px);
        }
    
        &:after {
          top: -4px;
          left: 2px;
          width: 2px;
          height: 6px;
        }
      }

      .rainTiny2{
        @extend .rainBig1;
        left: 100px;
        opacity: 0.3;
        @include circle(4px);
        animation: ${breatheAnimation} 1s linear infinite;
        animation-fill-mode: both;
    
        &:before {
          top: -2px;
          left: 1px;
          @include circle(2px);
        }

        &:after {
          top: -3px;
          left: 1px;
          width: 2px;
          height: 4px;
        }
      }
      .rainTiny3{
        left: 50px;
        opacity: 0.3;
        animation: ${breatheAnimation} 1s linear infinite;
        animation-fill-mode: both;
    
        &:before {
          top: -2px;
          left: 1px;
        }

        &:after {
          top: -3px;
          left: 1px;
          width: 2px;
          height: 4px;
        }
      }
     `


export const Sum = styled.div`
  position: absolute;
  height: 30px;
  width: 30px;
  box-shadow: 0 0 32px 12px #ddd;
  border-radius: 50%;
  top: 10px;
  left: 71px;
	background-color: #ffd93c;
	z-index: 0;
	box-shadow: 
		0 0 5px #ffd93c,
		0 0 15px #ffd93c,
		0 0 25px #fff,
		0 0 40px #ffd93c;

`