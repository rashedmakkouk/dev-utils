/** Utilities */
import colorConvert from 'color-convert';

/** Typings */
import { KEYWORD } from 'color-convert/conversions';

/**
 * Converts color from keyword or hex to RGBa value.
 */
function toRGBa(color: KEYWORD | string, alpha = 1): string {
  if (!color) {
    return 'rgba(0,0,0,0)';
  }

  const numbers = !color.startsWith('#')
    ? colorConvert.keyword.rgb(color as KEYWORD)
    : colorConvert.hex.rgb(color);

  return `rgba(${numbers.map((num): number => num)},${
    alpha == null ? 1 : alpha
  })`;
}

export default toRGBa;
