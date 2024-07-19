import React, { createContext, useContext, useReducer, useState } from 'react';

// const ConfigContext = createContext('en');
const ConfigContext = createContext({
    lang: 'en',
    setLang: (lang: string) => {}
});


export const ConfigProvider = ({ children }: any) => {
    const [lang, setLang] = useState('en');

  return (
    <ConfigContext.Provider value={{
        lang: lang,
        setLang: (p) => {
            setLang(p);
        }
    }} >
      {children}
    </ConfigContext.Provider>
  );
};

export const useTaskContext = () => useContext(ConfigContext);