import { createContext } from 'react';

export type State = {
  toggleThemeMode?: () => void;
};

const ThemeContext = createContext<State>({});

export default ThemeContext;
