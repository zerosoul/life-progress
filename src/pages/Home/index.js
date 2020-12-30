import { lazy, Suspense } from 'react';
import dayjs from 'dayjs';
import StyledWrapper from './styled';

import useSetting from './useSetting';

const ParticlesBackground = lazy(() => import('../../components/ParticlesBackground'));
const Header = lazy(() => import('../../components/Header'));
const Setting = lazy(() => import('../../components/Setting'));
const ProgressBar = lazy(() => import('../../components/ProgressBar'));
const Tip = lazy(() => import('../../components/Tip'));
const Aside = lazy(() => import('../../containers/Aside'));
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
const Loading = <div>loading...</div>;
export default function Home() {
  const { setting, visible: settingVisible, updateSetting, setSettingVisible } = useSetting();
  const { birth, sex, year } = setting || {};
  const percent = getPercent(birth, year);
  const dayInLife = getDay(birth);
  console.log({ settingVisible });

  return (
    <StyledWrapper>
      <Suspense fallback={Loading}>
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
      </Suspense>
    </StyledWrapper>
  );
}
