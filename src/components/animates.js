import { keyframes } from 'styled-components';

const AniFadeOutUp = keyframes`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    -webkit-transform: translate3d(-50%, -100%, 0);
    transform: translate3d(-50%, -100%, 0);
  }
`;
const AniFadeOutDown = keyframes`
 from {
    opacity: 1;
  }
  to {
    opacity: 0;
    -webkit-transform: translate3d(-50%, 100%, 0);
    transform: translate3d(-50%, 100%, 0);
  }
`;
const AniFadeInDown = keyframes`
 from {
    opacity: 0;
    -webkit-transform: translate3d(-50%, -100%, 0);
    transform: translate3d(-50%, -100%, 0);
  }

  to {
    opacity: 1;
    -webkit-transform: translate3d(-50%, 0, 0);
    transform: translate3d(-50%, 0, 0);
  }
`;
const AniFadeInUp = keyframes`
 from {
    opacity: 0;
    -webkit-transform: translate3d(-50%, 100%, 0);
    transform: translate3d(-50%, 100%, 0);
  }

  to {
    opacity: 1;
    -webkit-transform: translate3d(-50%, 0, 0);
    transform: translate3d(-50%, 0, 0);
  }
`;
export { AniFadeInDown, AniFadeInUp, AniFadeOutDown, AniFadeOutUp };
