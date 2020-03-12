import { useState } from 'react';
const LOCAL_NAME = 'SETTING';
const localSetting = localStorage.getItem(LOCAL_NAME);
function useSetting() {
  const [setting, setSetting] = useState(localSetting ? JSON.parse(localSetting) : undefined);
  const updateSetting = s => {
    localStorage.setItem(LOCAL_NAME, JSON.stringify(s));
    setSetting(s);
  };
  return { setting, updateSetting };
}

export default useSetting;
