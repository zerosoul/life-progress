import React from 'react';
import styled, { keyframes } from 'styled-components';

const AniFadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;
const StyledWrapper = styled.div`
  margin-top: 2rem;
  font-size: 0.8rem;
  color: #ddd;
  p {
    line-height: 1.5;
    display: flex;
    align-items: center;
    justify-content: center;
    animation: ${AniFadeInUp} 1.5s ease;
    animation-fill-mode: both;
    em {
      text-shadow: 0 0 18px #000;
      color: #fff;
      font-weight: 900;
      padding: 0 0.2rem;
      font-size: 1.4rem;
    }
  }
`;

export default function Tip({ birth, dayInLife = 1, percent = 0 }) {
  return (
    <StyledWrapper>
      <p style={{ animationDelay: '.5s' }}>
        <em>{birth}</em>
      </p>
      <p style={{ animationDelay: '2s' }}>这一天，你来到了这个世界...</p>
      <p style={{ animationDelay: '4s' }}>
        今天是你生命中的第<em>{dayInLife}</em>天
      </p>
      <p style={{ animationDelay: '6s' }}>
        <em>{percent}%</em>的时光已流逝
      </p>
      <p style={{ animationDelay: '7.5s' }}>在这个世界，你过得还好吗</p>
      <p style={{ animationDelay: '8s' }}>...</p>
    </StyledWrapper>
  );
}
