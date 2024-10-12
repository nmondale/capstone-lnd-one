export function setTheme(theme: 'light' | 'dark' | 'alt', mainColor?: string, altColor?: string) {
  const root = document.documentElement;
  if (theme === 'dark') {
    root.style.setProperty('--main-color', '#000000');
    root.style.setProperty('--alt-color', '#ffffff');
  } else if (theme === 'alt' && mainColor && altColor) {
    root.style.setProperty('--main-color', mainColor);
    root.style.setProperty('--alt-color', altColor);
  } else {
    root.style.setProperty('--main-color', '#ffffff');
    root.style.setProperty('--alt-color', '#000000');
  }
}

