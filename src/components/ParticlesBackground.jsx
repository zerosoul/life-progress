import React, { useState, useEffect } from 'react';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';
import styled from 'styled-components';
import options from './snow';
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
  const [init, setInit] = useState(false);

  // this should be run only once per application lifetime
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
      // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
      // starting from v2 you can add only the features you need reducing the bundle size
      //await loadAll(engine);
      //await loadFull(engine);
      await loadSlim(engine);
      //await loadBasic(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);
  if (init) {
    return (
      <>
        <StyledWrapper>
          <Particles
            style={{ width: '100dvw', height: '100dvh' }}
            id="tsparticles"
            options={options}
          />
        </StyledWrapper>
      </>
    );
  }
  return null;
}
