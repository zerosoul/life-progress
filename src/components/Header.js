import React from 'react';
import styled from 'styled-components';
const StyledWrapper = styled.header`
  font-size: 2rem;
  font-weight: 800;
  text-shadow: 0 0 16px black;
`;
export default function Header() {
  return <StyledWrapper>生命进程</StyledWrapper>;
}
