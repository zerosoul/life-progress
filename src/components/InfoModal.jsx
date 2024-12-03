/* eslint-disable react/jsx-no-target-blank */
import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import GitHubButton from 'react-github-btn';
import StyledButton from './StyledButton';
const AniSlideLeft = keyframes`
from{
  transform:translateX(100%)
}
to{
  transform:translateX(0)
}
`;
const InfoButton = styled(StyledButton)`
  z-index: 998;
  position: fixed;
  right: 0.5rem;
  bottom: 0.5rem;
  margin-right: 0.5rem;
  background-image: url('/img/info.svg');
  &.close {
    background-image: url('/img/close.svg');
  }
`;
const StyledModal = styled.section`
  z-index: 998;
  display: flex;
  flex-direction: column;
  box-shadow: 0 0 8px black;
  position: fixed;
  right: 0.5rem;
  bottom: 3rem;
  background: rgba(2, 2, 2, 0.6);
  padding: 1rem;
  animation: ${AniSlideLeft} 1s;
  padding: 1rem;
  .reward {
    width: 14rem;
    align-self: center;
    border: 1px solid #222;
    border-radius: 0.4rem;
    margin-bottom: 0.8rem;
  }
  .code {
    display: flex;
    align-items: center;
    margin-bottom: 0.8rem;
  }
  .copyright {
    font-size: 0.5rem;
    a {
      padding: 0 0.2rem;
    }
  }
`;
const Modal = () => (
  <StyledModal className="idleHide">
    <img src={'/img/reward.jpg'} alt="reward" className="reward" />
    <div className="code">
      代码开源：
      <GitHubButton
        href="https://github.com/zerosoul/life-progress"
        data-show-count="true"
        aria-label="Star life-progress on GitHub"
      >
        Star
      </GitHubButton>
    </div>
    <div className="copyright">
      <a rel="noopener noreferrer" target="_blank" href="http://www.beian.miit.gov.cn/">
        京 ICP 备 16015459 号 -1
      </a>
      <span> Copyright © {new Date().getFullYear()} By </span>
      <a rel="noopener noreferrer" href="https://yangerxiao.com" target="_blank">
        Tristan
      </a>
    </div>
  </StyledModal>
);
export default function InfoModal() {
  const [visible, setVisible] = useState(false);
  const handleInfoClick = () => {
    setVisible((prev) => !prev);
  };

  return (
    <>
      {visible ? <Modal /> : null}

      <InfoButton
        className={`idleHide ${visible ? 'close' : ''}`}
        onClick={handleInfoClick}
      ></InfoButton>
    </>
  );
}
