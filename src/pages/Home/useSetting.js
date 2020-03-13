import { useState } from 'react';
const LOCAL_NAME = 'SETTING';
const DEFAULT_SETTING = { sex: 'male', birth: '1989-03-22', year: 77 };

function useSetting() {
  const localSetting = localStorage.getItem(LOCAL_NAME);
  const [setting, setSetting] = useState(localSetting ? JSON.parse(localSetting) : DEFAULT_SETTING);
  const [visible, setVisible] = useState(localSetting ? false : true);
  const updateSetting = s => {
    localStorage.setItem(LOCAL_NAME, JSON.stringify(s));
    setSetting(s);
    setVisible(false);
  };
  const setSettingVisible = (v = true) => {
    setVisible(v);
  };
  return { setting, visible, setSettingVisible, updateSetting };
}

export default useSetting;
