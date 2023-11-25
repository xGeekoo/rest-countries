import { createContext, useContext, useState } from 'react';
import styled, { css } from 'styled-components';

const ThemesContext = createContext();

const StyledThemesProvider = styled.div`
  ${props =>
    props.$theme === 'black' &&
    css`
      --text-color: hsl(0, 0%, 100%);
      --input-color: hsl(0, 0%, 98%);
      --background-color: hsl(207, 26%, 17%);
      --element-color: hsl(209, 23%, 22%);
      --focus-color: #96f2d7;
    `}

  ${props =>
    props.$theme === 'white' &&
    css`
      --text-color: hsl(200, 15%, 8%);
      --input-color: hsl(0, 0%, 52%);
      --background-color: hsl(0, 0%, 98%);
      --element-color: hsl(0, 0%, 100%);
      --focus-color: #099268;
    `}

    color: var(--text-color);
`;

export default function ThemesProvider({ children }) {
  const [theme, setTheme] = useState(() => {
    const themeStorage = localStorage.getItem('theme');
    if (themeStorage) return themeStorage;

    const query = matchMedia('screen and (prefers-color-scheme: light)');
    return query.matches ? 'white' : 'black';
  });

  return (
    <ThemesContext.Provider value={{ theme, setTheme }}>
      <StyledThemesProvider $theme={theme}>{children}</StyledThemesProvider>
    </ThemesContext.Provider>
  );
}

export function useThemes() {
  const context = useContext(ThemesContext);
  if (!context)
    throw new Error('useThemes hook used outside ThemesProvider hook');
  return context;
}
