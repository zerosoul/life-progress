import React from 'react';
import styled from 'styled-components';
const StyledWrapper = styled.div`
  position: relative;
  width: 16rem;
  height: 2rem;
  background: #fff;
  .status {
    position: absolute;
    top: -2rem;
    font-size: 1.4rem;
    text-shadow: 0 0 18px #e8dfdf;
    &.baby {
      left: 0;
      transform: translateX(-50%);
    }
    &.death {
      right: 0;
      transform: translateX(50%);
    }
  }
  .progress {
    position: relative;
    background: #333;
    transition: width 1s;
    height: 100%;
    .walk {
      position: absolute;
      font-size: 2.4rem;
      top: -3rem;
      right: 0;
      text-shadow: 0 0 18px #000;
      transform: translateX(50%) scaleX(-1);
    }
    .num {
      position: absolute;
      font-size: 0.8rem;
      bottom: -1.2rem;
      right: 0;
      text-shadow: 0 0 18px #000;
      transform: translateX(50%);
    }
  }
  .tip {
    margin-top: 2rem;
    font-size: 1rem;
    color: #ddd;
    .num {
      font-weight: 800;
      padding: 0 0.2rem;

      font-size: 1.4rem;
    }
  }
`;
const WalkPerson = {
  male: '🚶',
  female: '🚶‍♀'
};
export default function ProgressBar({ dayInLife = 1, percent = 20, sex = 'male' }) {
  return (
    <StyledWrapper>
      <i className="status baby">👶</i>
      <i className="status death">👻</i>
      <p style={{ width: `${percent}%` }} className="progress">
        <i className="walk">{WalkPerson[sex]}</i>
        <i className="num">{`${percent}%`}</i>
      </p>
      <p className="tip">
        今天是你生命中的第<span className="num">{dayInLife}</span>天
      </p>
    </StyledWrapper>
  );
}
