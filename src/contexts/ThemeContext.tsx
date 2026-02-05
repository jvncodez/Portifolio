import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type Theme = 'light' | 'dark';

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
  isDark: boolean;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window !== 'undefined') {
      // One-time migration to set light as default
      const migrated = localStorage.getItem('theme-migrated-v1');
      if (!migrated) {
        localStorage.removeItem('theme');
        localStorage.setItem('theme-migrated-v1', 'true');
        return 'light';
      }
      return (localStorage.getItem('theme') as Theme) || 'light';
    }
    return 'light';
  });

  const isDark = theme === 'dark';

  useEffect(() => {
    const root = document.documentElement;
    root.classList.remove('light', 'dark');
    root.classList.add(theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  // Clear any stale localStorage on first mount to ensure light is default
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (!savedTheme) {
      document.documentElement.classList.add('light');
    }
  }, []);

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, isDark }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
