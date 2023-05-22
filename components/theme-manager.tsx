'use client';

import { useState, useEffect } from 'react';

const ThemeManager = () => {
  const onSelectMode = (mode: string) => {
    localStorage.setItem('theme', mode);
    if (mode === 'dark') document.body.classList.add('dark');
    else document.body.classList.remove('dark');
  };

  useEffect(() => {
    if (typeof window === 'undefined') return;

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

  return null;
};

export { ThemeManager };
