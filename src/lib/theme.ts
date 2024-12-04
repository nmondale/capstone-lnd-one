export function setTheme(theme: 'light' | 'dark' | 'alt', mainColor?: string, altColor?: string) {
  const root = document.documentElement;
  root.setAttribute('data-theme', theme);

  if (theme === 'dark') {
    root.style.setProperty('--main-color', '#000000');
    root.style.setProperty('--alt-color', '#ffffff');
    root.style.setProperty('--brightest-color', '#ffffff');
    root.style.setProperty('--darkest-color', '#000000');
    root.style.setProperty('--bright-blue', '#52A8DC');
  } else if (theme === 'alt' && mainColor && altColor) {
    const oppositeColor = `color-mix(in srgb, ${altColor}, rgb(135,206,250) 30%)`;
    const { brightest, darkest } = getColorExtremes(mainColor, altColor);
    root.style.setProperty('--main-color', mainColor);
    root.style.setProperty('--alt-color', altColor);
    root.style.setProperty('--brightest-color', brightest);
    root.style.setProperty('--darkest-color', darkest);
    root.style.setProperty('--bright-blue', oppositeColor);
  } else {
    root.style.setProperty('--main-color', '#ffffff');
    root.style.setProperty('--alt-color', '#000000');
    root.style.setProperty('--brightest-color', '#ffffff');
    root.style.setProperty('--darkest-color', '#000000');
    root.style.setProperty('--bright-blue', '#52A8DC');
  }
}

const getColorExtremes = (color1: string, color2: string) => {
  const hexToRgb = (hex: string) => {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result
      ? {
          r: parseInt(result[1], 16),
          g: parseInt(result[2], 16),
          b: parseInt(result[3], 16),
        }
      : null;
  };

  const getPerceivedBrightness = (hex: string) => {
    const rgb = hexToRgb(hex);
    if (!rgb) return 0;
    return (rgb.r * 299 + rgb.g * 587 + rgb.b * 114) / 1000;
  };

  const brightness1 = getPerceivedBrightness(color1);
  const brightness2 = getPerceivedBrightness(color2);

  return {
    brightest: brightness1 >= brightness2 ? color1 : color2,
    darkest: brightness1 >= brightness2 ? color2 : color1
  };
};

