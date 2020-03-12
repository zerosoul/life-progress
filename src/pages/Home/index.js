import React from 'react';
import dayjs from 'dayjs';
import StyledWrapper from './styled';
import ParticlesBackground from '../../components/ParticlesBackground';
import InfoModal from '../../components/InfoModal';
import ProgressBar from '../../components/ProgressBar';
import Setting from '../../components/Setting';
import useSetting from './useSetting';

function getPercent(birth, year) {
  if (!birth) return;
  let msPassed = new Date().getTime() - new Date(birth).getTime();
  const msTotal =
    new Date(dayjs(birth).add(Number(year), 'year')).getTime() - new Date(birth).getTime();

  let percentNum = Math.floor((msPassed / msTotal) * 100);
  console.log({ msPassed, msTotal, percentNum });
  return percentNum;
}
function getDay(birth) {
  if (!birth) return;
  let msPassed = new Date().getTime() - new Date(birth).getTime();

  let d = Math.ceil(msPassed / 86400000);
  return d;
}
export default function Home() {
  const { setting, updateSetting } = useSetting();
  const { birth, sex, year } = setting || {};
  const percent = getPercent(birth, year);
  const dayInLife = getDay(birth);
  return (
    <StyledWrapper>
      <ParticlesBackground />
      {!setting && <Setting setting={setting} updateSetting={updateSetting} />}
      <div className="wrapper">
        {setting && <ProgressBar dayInLife={dayInLife} sex={sex} percent={percent} />}
      </div>
      <InfoModal />
    </StyledWrapper>
  );
}