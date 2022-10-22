import React from 'react';
import styled from 'styled-components';
import StyledButton from './StyledButton';
import ImageSetting from '../assets/img/setting.svg';

const StyledWrapper = styled(StyledButton)`
  z-index: 998;
  position: fixed;
  right: 3.4rem;
  bottom: 0.5rem;
  margin-right: 0.5rem;
  background-image: url(${ImageSetting});
`;

export default function Setting({ setVisible }) {
  return (
    <StyledWrapper
      onClick={() => {
        setVisible();
      }}
    ></StyledWrapper>
  );
}
