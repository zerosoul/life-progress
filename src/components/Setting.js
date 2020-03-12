import React, { useState } from 'react';
import styled from 'styled-components';
const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  .opts {
    width: 13rem;
    display: flex;
    flex-direction: column;

    .input {
      padding: 0.2rem 0.4rem;
      margin-top: 0.4rem;
      display: flex;
      align-items: center;
      justify-content: space-between;
      label {
        padding-right: 0.4rem;
        font-size: 0.8rem;
        &:after {
          content: ':';
        }
      }
      input,
      select {
        outline: none;
        border: none;
        border-radius: 4px;
        color: #000;
        padding: 0.2rem 0.4rem;
        &.year {
          width: 3rem;
        }
      }
    }
  }
  .ok {
    margin-top: 2rem;
    color: #000;
    background-color: #fff;
    cursor: pointer;
    outline: none;
    border: none;
    padding: 0.4rem 0.8rem;
    font-size: 1.2rem;
    font-weight: 800;
    border-radius: 4px;
  }
`;
const DEFAULT_SETTING = { sex: 'male', birth: '1989-03-22', year: 77 };

export default function Setting({ setting = DEFAULT_SETTING, updateSetting }) {
  const [currSetting, setCurrSetting] = useState(setting);
  const { birth, sex, year } = currSetting || {};
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
          <label htmlFor="sex">性别</label>

          <select name="sex" id="sex" value={sex} onChange={handleChange}>
            <option value="female">女</option>
            <option value="male">男</option>
          </select>
        </div>
        <div className="input">
          <label htmlFor="birth">生日</label>
          <input onChange={handleChange} type="date" value={birth} name="birth" id="birth" />
        </div>
        <div className="input">
          <label htmlFor="year">想活多久(年)</label>
          <input
            className="year"
            onChange={handleChange}
            type="number"
            value={year}
            name="year"
            id="year"
          />
        </div>
      </div>
      <button className="ok" onClick={handleOk}>
        开始计算
      </button>
    </StyledWrapper>
  );
}
