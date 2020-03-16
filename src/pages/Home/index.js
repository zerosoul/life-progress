import React from 'react';
import dayjs from 'dayjs';
import StyledWrapper from './styled';
import ParticlesBackground from '../../components/ParticlesBackground';
import Header from '../../components/Header';
import Aside from '../../containers/Aside';

import ProgressBar from '../../components/ProgressBar';
import Tip from '../../components/Tip';
import Setting from '../../components/Setting';
import useSetting from './useSetting';

function getPercent(birth, year) {
  if (!birth) return;
  let msPassed = new Date().getTime() - new Date(birth).getTime();
  const msTotal =
    new Date(dayjs(birth).add(Number(year), 'year')).getTime() - new Date(birth).getTime();

  let percentNum = Math.floor((msPassed / msTotal) * 100);
  console.log({ msPassed, msTotal, percentNum });
  return percentNum > 100 ? 100 : percentNum;
}
function getDay(birth) {
  if (!birth) return;
  let msPassed = new Date().getTime() - new Date(birth).getTime();

  let d = Math.ceil(msPassed / 86400000);
  return d;
}
export default function Home() {
  const { setting, visible: settingVisible, updateSetting, setSettingVisible } = useSetting();
  const { birth, sex, year } = setting || {};
  const percent = getPercent(birth, year);
  const dayInLife = getDay(birth);
  console.log({ settingVisible });

  return (
    <StyledWrapper>
      <ParticlesBackground />
      <div className={`${settingVisible ? 'setting' : ''} wrapper`}>
        <Header />
        <div className="card front">
          <ProgressBar dayInLife={dayInLife} sex={sex} percent={percent} />
          {!settingVisible && <Tip birth={birth} dayInLife={dayInLife} percent={percent} />}
        </div>
        <div className={`card back`}>
          <Setting setting={setting} updateSetting={updateSetting} />
        </div>
      </div>
      <Aside settingVisible={settingVisible} setSettingVisible={setSettingVisible} />
    </StyledWrapper>
  );
}
