export function setTheme(theme: 'light' | 'dark' | 'alt', mainColor?: string, altColor?: string) {
  const root = document.documentElement;
  root.setAttribute('data-theme', theme);
  if (theme === 'dark') {
    root.style.setProperty('--main-color', '#000000');
    root.style.setProperty('--alt-color', '#ffffff');
    root.style.setProperty('--bright-blue', '#52A8DC');
  } else if (theme === 'alt' && mainColor && altColor) {
    const oppositeColor = `color-mix(in srgb, ${altColor}, rgb(135,206,250) 30%)`;
    root.style.setProperty('--main-color', mainColor);
    root.style.setProperty('--alt-color', altColor);
    root.style.setProperty('--bright-blue', oppositeColor);
  } else {
    root.style.setProperty('--main-color', '#ffffff');
    root.style.setProperty('--alt-color', '#000000');
    root.style.setProperty('--bright-blue', '#52A8DC');
  }
}

