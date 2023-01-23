/** Utilities */
import { hex, keyword } from 'color-convert';
/** Typings */
import { KEYWORD } from 'color-convert/conversions';
import colors from 'color-name';

/**
 * Converts color from 'keyword' (e.g. green) or 'hex' (e.g. #00FF00) to RGBa
 * value. Useful when there is a need to apply color opacity.
 *
 * @param color - Color `Name` or `HEX` value.
 * @param alpha - Alpha channel `opacity` between '0' and '1'; default 1.
 *
 * @returns RGBa value for valid colors else 'rgba(0,0,0,alpha)'.
 */
function toRGBa(color: KEYWORD | string, alpha = 1): string {
  const numbers = color.startsWith('#')
    ? hex.rgb(color)
    : keyword.rgb(color as keyof typeof colors);

  !numbers.length && numbers.push(0, 0, 0);

  /* eslint-disable-next-line @typescript-eslint/restrict-template-expressions */
  return `rgba(${numbers.map((num): number => num)},${alpha ?? 1})`;
}

export default toRGBa;
