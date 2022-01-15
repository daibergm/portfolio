import { useState, useMemo, useEffect } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';

// @Context
import ThemeContext from './ThemeContext';
import { PaletteMode } from '@mui/material';

// @Constants
import { STORAGE_KEYS } from '@constants/index';

type Props = {
  children: JSX.Element;
};

function ThemeState({ children }: Props) {
  const [mode, setMode] = useState('light');

  useEffect(() => {
    const themeMode = localStorage.getItem(STORAGE_KEYS.theme);
    themeMode && setMode(themeMode);
  }, []);

  const colorMode = useMemo(
    () => ({
      toggleThemeMode: () => {
        setMode((prevMode) => {
          localStorage.setItem(STORAGE_KEYS.theme, prevMode === 'light' ? 'dark' : 'light');
          return prevMode === 'light' ? 'dark' : 'light';
        });
      },
    }),
    []
  );

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: mode as PaletteMode,
        },
      }),
    [mode]
  );

  return (
    <ThemeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
}

export default ThemeState;
