import React from 'react';
import styled from 'styled-components';
import StyledButton from './StyledButton';
import ImageSetting from '../assets/img/setting.svg';

const StyledWrapper = styled(StyledButton)`
  z-index: 998;
  position: fixed;
  right: 2.5rem;
  bottom: 0.5rem;
  padding: 0.8rem;
  margin-right: 0.5rem;
  background-image: url(${ImageSetting});
`;

export default function Setting({ updateSetting }) {
  return (
    <StyledWrapper
      onClick={() => {
        updateSetting(undefined);
      }}
    ></StyledWrapper>
  );
}
