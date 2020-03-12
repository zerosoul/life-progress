import styled from 'styled-components';

const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  .wrapper {
    margin-top: -2rem;
    padding: 4rem 2rem 5rem 2rem;
    background: rgba(0, 0, 0, 0.4);
    backdrop-filter: blur(5px);
    border-radius: 1rem;
    box-shadow: 0 0 8px black;
  }
`;

export default StyledWrapper;
