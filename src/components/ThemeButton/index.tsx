import React, { memo } from 'react';
import { BsLightbulb, BsLightbulbOff } from 'react-icons/bs';

import { themes, useThemes } from '../../contexts/themes';
import { Container } from './styles';

const ThemeButton: React.FC = () => {
  const { theme, setTheme } = useThemes();

  const changeTheme = (): void => {
    theme.name === 'light' ? setTheme(themes[1]) : setTheme(themes[0]);
  };

  return (
    <Container type="button" onClick={changeTheme} theme={theme}>
      {theme.name === 'light' ? <BsLightbulbOff /> : <BsLightbulb />}
    </Container>
  );
};

export default memo(ThemeButton);
