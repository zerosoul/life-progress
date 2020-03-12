import React, { useState } from 'react';
import styled from 'styled-components';
const StyledWrapper = styled.div`
  position: fixed;

  width: 100vw;
  height: 100vh;
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 999;
  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(5px);
  .opts {
    width: 16rem;
    padding: 0.6rem 1rem;
    display: flex;
    flex-direction: column;
  }
`;
const DEFAULT_SETTING = { sex: 'male', birth: '1989-03-22', year: 77 };

export default function Setting({ setting = DEFAULT_SETTING, updateSetting }) {
  const [currSetting, setCurrSetting] = useState(setting);
  const { birth, sex, year } = currSetting;
  const handleOk = () => {
    updateSetting(currSetting);
  };
  const handleChange = evt => {
    console.log({ evt });
    const { target } = evt;
    console.log({ target });
    setCurrSetting(prev => {
      prev[target.name] = target.value;
      console.log({ prev });

      return { ...prev };
    });
  };
  return (
    <StyledWrapper>
      <div className="opts">
        <div className="input">
          <span>生日</span>
          <input onChange={handleChange} type="date" value={birth} name="birth" id="birth" />
        </div>
        <div className="input">
          <span>性别</span>
          <select name="sex" id="sex" value={sex} onChange={handleChange}>
            <option value="female">女</option>
            <option value="male">男</option>
          </select>
        </div>
        <div className="input">
          <span>想活多久(年)</span>
          <input onChange={handleChange} type="number" value={year} name="year" id="year" />
        </div>
      </div>
      <button onClick={handleOk}>好了</button>
    </StyledWrapper>
  );
}
