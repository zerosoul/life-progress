import styled from 'styled-components';

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  .wrapper {
    position: relative;
    transform-style: preserve-3d;
    .card {
      background: rgba(0, 0, 0, 0.4);
      backdrop-filter: blur(5px);
      border-radius: 1rem;
      position: absolute;
      top: 0;
      left: 50%;
      backface-visibility: hidden;
      transition: 0.5s;
      &.front {
        padding: 4rem 2.5rem 5rem 2.5rem;

        box-shadow: 0 0 8px black;
        transform: translateX(-50%) rotateX(0deg);
      }
      &.back {
        padding: 2rem 1rem;
        visibility: hidden;
        transform: translateX(-50%) rotateX(180deg);
      }
    }
    &.setting .front {
      transform: translateX(-50%) rotateX(-180deg);
      visibility: hidden;
    }
    &.setting .back {
      visibility: visible;
      transform: translateX(-50%) rotateX(0deg);
    }
  }
`;

export default StyledWrapper;
