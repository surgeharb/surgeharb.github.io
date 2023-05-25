'use client';

import { Moon, Sun } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Button } from './ui/simple/button';

type Theme = 'light' | 'dark';

type Props = {
  showStickyButton?: boolean;
};

const ThemeManager = ({ showStickyButton }: Props) => {
  const [mode, setMode] = useState<Theme>('light');
  const [isWindowLoaded, setIsWindowLoaded] = useState(false);

  const onToggleMode = () => {
    if (mode === 'light') onSelectMode('dark');
    else onSelectMode('light');
  };

  const onSelectMode = (mode: Theme) => {
    setMode(mode);
    localStorage.setItem('theme', mode);
    if (mode === 'dark') document.body.classList.add('dark');
    else document.body.classList.remove('dark');
  };

  useEffect(() => {
    if (typeof window === 'undefined') return;
    setIsWindowLoaded(true);

    window
      .matchMedia('(prefers-color-scheme: dark)')
      .addEventListener('change', (e) => onSelectMode(e.matches ? 'dark' : 'light'));

    // Setup dark/light mode for the first time
    onSelectMode(window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');

    // Remove listener
    return () => {
      window.matchMedia('(prefers-color-scheme: dark)').removeEventListener('change', () => {});
    };
  }, []);

  if (!showStickyButton || !isWindowLoaded) return null;

  return (
    <div className="fixed bottom-0 right-0 z-50 flex flex-col gap-2 p-4">
      <Button className="w-12 h-12 rounded-full p-0" onClick={onToggleMode}>
        {mode === 'dark' ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
      </Button>
    </div>
  );
};

export { ThemeManager };
