import React from 'react';
import styled, { keyframes } from 'styled-components';

const AniFlash = keyframes`
  from  {opacity:0.4;}
  to {opacity:1;}
`;
const StyledWrapper = styled.div`
  position: relative;
  width: 16rem;
  height: 2rem;
  background: rgba(19, 17, 17, 0.4);
  box-shadow: 0 0 5px #d6caca;
  border-radius: 4px;
  .status {
    position: absolute;
    top: -2rem;
    font-size: 1.4rem;
    text-shadow: 0 0 18px #e8dfdf;
    &.baby {
      left: -0.7rem;
      transform: translateX(-50%);
    }
    &.death {
      right: -0.7rem;
      transform: translateX(50%);
    }
  }
  .progress {
    position: relative;
    transition: all 0.5s;
    height: 100%;
    border-radius: 4px 0 0 4px;
    background: ${({ bgColor }) => bgColor};
    .walk {
      position: absolute;
      font-size: 2.4rem;
      top: -3rem;
      right: 0;
      text-shadow: 0 0 18px #000;
      transform: translateX(50%) scaleX(-1);
      animation: ${AniFlash} 2s ease infinite;
      animation-fill-mode: both;
      animation-direction: alternate;
    }
  }
`;
const WalkPerson = {
  male: '🚶',
  female: '🚶‍♀'
};

export default function ProgressBar({ percent = 20, sex = 'male' }) {
  return (
    <StyledWrapper bgColor={getColor(percent)}>
      <i className="status baby">👶</i>
      <i className="status death">👻</i>
      <p style={{ width: `${percent}%` }} className="progress">
        <i className="walk">{WalkPerson[sex]}</i>
      </p>
    </StyledWrapper>
  );
}
function getColor(percent) {
  let color = '#bddd22';
  // console.log({ color, percent });
  switch (true) {
    case percent > 10 && percent <= 20:
      color = '#9ed900';
      break;
    case percent > 20 && percent <= 30:
      color = '#c9dd22';
      break;
    case percent > 30 && percent <= 40:
      color = '#00bc12';
      break;
    case percent > 40 && percent <= 50:
      color = '#21a675';
      break;
    case percent > 50 && percent <= 60:
      color = '#0c8918';
      break;
    case percent > 60 && percent <= 70:
      color = '#ffc773';
      break;
    case percent > 70 && percent <= 80:
      color = '#e29c45';
      break;
    case percent > 80 && percent <= 85:
      color = '#e29c45';
      break;
    case 85 < percent:
      color = '#395260';
      break;

    default:
      break;
  }
  return color;
}
