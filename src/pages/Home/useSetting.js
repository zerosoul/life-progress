import { useState } from 'react';
const LOCAL_NAME = 'SETTING';
function useSetting() {
  const localSetting = localStorage.getItem(LOCAL_NAME);
  const [setting, setSetting] = useState(localSetting ? JSON.parse(localSetting) : undefined);
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
