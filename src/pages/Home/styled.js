import styled from 'styled-components';
import {
  AniFadeInDown,
  AniFadeInUp,
  AniFadeOutDown,
  AniFadeOutUp
} from '../../components/animates';
const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  .wrapper {
    position: relative;
    margin-top: -20rem;
    .card {
      background: rgba(0, 0, 0, 0.4);
      backdrop-filter: blur(5px);
      border-radius: 1rem;
      position: absolute;
      top: 4rem;
      left: 50%;
      transform: translateX(-50%);
      &.front {
        padding: 4rem 2.5rem 5rem 2.5rem;
        box-shadow: 0 0 8px black;
        animation: ${AniFadeInDown} 1s forwards;
      }
      &.back {
        padding: 2rem 1rem;
        animation: ${AniFadeOutDown} 1s forwards;
      }
    }
    &.setting .card.front {
      animation: ${AniFadeOutUp} 1s forwards;
    }
    &.setting .card.back {
      animation: ${AniFadeInUp} 1s forwards;
    }
  }
`;

export default StyledWrapper;
