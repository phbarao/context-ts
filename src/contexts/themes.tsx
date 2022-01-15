import React, { useContext, createContext, useState } from 'react';

interface ITheme {
  name: string;
  colors: {
    background: string;
    text: string;
  };
}

interface IThemesContext {
  theme: ITheme;
  setTheme(theme: ITheme): void;
}

const ThemesContext = createContext({} as IThemesContext);

export const themes = [
  {
    name: 'light',
    colors: {
      background: 'white',
      text: '#272D2D',
    },
  },
  {
    name: 'dark',
    colors: {
      background: '#272D2D',
      text: 'white',
    },
  },
];

export const ThemesProvider: React.FC = ({ children }) => {
  const [theme, setTheme] = useState<ITheme>(themes[0]);

  return (
    <ThemesContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemesContext.Provider>
  );
};

export const useThemes = (): IThemesContext => useContext(ThemesContext);
