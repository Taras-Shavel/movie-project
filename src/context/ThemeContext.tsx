import React, {createContext, FC, ReactNode, useState} from 'react';

export type Theme = 'Dark' | 'Light';
interface IThemeContextProps {
    theme: Theme
    setTheme: (theme: Theme) => void;
}
interface IThemeProviderProps {
    children: ReactNode;
}
export const ThemeContext = createContext<IThemeContextProps>({
    theme: 'Dark',
    setTheme: () => {},
})
const ThemeProvider:FC<IThemeProviderProps> = ({children}) => {
    const [theme, setTheme] = useState<Theme>('Dark')
    return (
        <ThemeContext.Provider value={{theme, setTheme}}>
            {children}
        </ThemeContext.Provider>
    );
};

export {ThemeProvider};