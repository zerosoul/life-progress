import React from 'react';
import styled from 'styled-components';
const StyledWrapper = styled.header`
  font-size: 2rem;
  font-weight: 800;
  text-shadow: 0 0 16px black;
  letter-spacing: 0.2rem;
  position: relative;
  &:after {
    content: '';
    background-color: rgba(2, 2, 2, 0.5);
    position: absolute;
    top: -1.4rem;
    left: -5%;
    width: 105%;
    height: 1.6rem;
    z-index: 1;
  }
  .word {
    position: relative;
    text-shadow: 0 0 2px #b51717;
    &:after {
      z-index: 2;
      font-family: sans-serif;
      color: #ddd;
      letter-spacing: 0;
      text-transform: capitalize;
      font-size: 1rem;
      content: attr(data-py);
      position: absolute;
      top: -1.1rem;
      left: 50%;
      transform: translateX(-50%);
    }
  }
`;
const words = [
  {
    py: 'jiāo',
    word: '生'
  },
  {
    py: 'lǜ',
    word: '命'
  },
  {
    py: 'zhì',
    word: '计'
  },
  {
    py: 'zào',
    word: '算'
  },
  {
    py: 'qì',
    word: '器'
  }
];
export default function Header() {
  return (
    <StyledWrapper>
      {words.map(w => {
        return (
          <span key={w.py} className="word" data-py={w.py}>
            {w.word}
          </span>
        );
      })}
    </StyledWrapper>
  );
}
