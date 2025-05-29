
import React from 'react';
import { Button } from '@/components/ui/button';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from './ThemeProvider';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button
      onClick={toggleTheme}
      variant="outline"
      size="icon"
      className="fixed top-6 right-6 z-50 w-12 h-12 rounded-full magnetic-hover bg-background border-2 border-primary/20 hover:border-primary"
    >
      {theme === 'light' ? (
        <Moon className="h-5 w-5 text-primary" />
      ) : (
        <Sun className="h-5 w-5 text-primary" />
      )}
    </Button>
  );
};

export default ThemeToggle;
