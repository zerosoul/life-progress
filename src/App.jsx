import { lazy, Suspense } from 'react';
import dayjs from 'dayjs';
import styled from 'styled-components';
import { AniFadeInDown, AniFadeInUp, AniFadeOutDown, AniFadeOutUp } from './components/animates';

import useSetting from './useSetting';

const ParticlesBackground = lazy(() => import('./components/ParticlesBackground'));
const Header = lazy(() => import('./components/Header'));
const Setting = lazy(() => import('./components/Setting'));
const ProgressBar = lazy(() => import('./components/ProgressBar'));
const Tip = lazy(() => import('./components/Tip'));
const Aside = lazy(() => import('./containers/Aside'));

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
const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  .wrapper {
    position: relative;
    margin-top: -22rem;
    .card {
      background: rgba(0, 0, 0, 0.4);
      backdrop-filter: blur(5px);
      border-radius: 1rem;
      position: absolute;
      top: 4rem;
      left: 50%;
      transform: translateX(-50%);
      &.front {
        padding: 4rem 2.5rem 2rem 2.5rem;
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
function App() {
  const { setting, visible: settingVisible, updateSetting, setSettingVisible } = useSetting();
  const { birth, sex, year } = setting || {};
  const percent = getPercent(birth, year);
  const dayInLife = getDay(birth);
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

export default App;
