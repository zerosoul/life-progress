import React from 'react';
import styled from 'styled-components';
import SettingButton from '../components/SettingButton';
import InfoModal from '../components/InfoModal';
const StyledWrapper = styled.aside`
  position: fixed;
  right: 0.5rem;
  bottom: 1rem;
`;
export default function Aside({ settingVisible, setSettingVisible }) {
  return (
    <StyledWrapper>
      {!settingVisible && <SettingButton setVisible={setSettingVisible} />}
      <InfoModal />
    </StyledWrapper>
  );
}
