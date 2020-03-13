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
const maxDate = new Date().toISOString().split('T')[0];
export default function Setting({ setting = {}, updateSetting }) {
  const [currSetting, setCurrSetting] = useState(setting);
  const { birth, sex, year } = currSetting || {};
  const handleOk = () => {
    updateSetting(currSetting);
  };
  const handleBlur = evt => {
    const { target } = evt;
    let yearSpan = new Date().getFullYear() - new Date(birth).getFullYear();
    if (Number(target.value) < yearSpan) {
      setCurrSetting(prev => {
        prev.year = yearSpan;
        return { ...prev };
      });
    }
  };
  const handleChange = evt => {
    console.log({ evt });
    const { target } = evt;
    console.log({ target });
    setCurrSetting(prev => {
      // 最小不能小于已经活过的年份

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
          <input
            min="1899-01-01"
            max={maxDate}
            onChange={handleChange}
            type="date"
            value={birth}
            name="birth"
            id="birth"
          />
        </div>
        <div className="input">
          <label htmlFor="year">活多久(年)</label>
          <input
            min={1}
            max={120}
            className="year"
            onChange={handleChange}
            onBlur={handleBlur}
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
