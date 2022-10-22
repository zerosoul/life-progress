import React from 'react';
import Particles from 'react-particles-js';
import styled from 'styled-components';
import config from '../assets/particlesjs-config.json';
const StyledWrapper = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  .bg {
    width: 100vw;
    height: 100vh;
  }
`;
export default function ParticlesBackground() {
  return (
    <StyledWrapper>
      <Particles params={config} className="bg" />
    </StyledWrapper>
  );
}
