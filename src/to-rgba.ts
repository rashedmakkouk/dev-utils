import isString from 'lodash/isString';
import isNumber from 'lodash/isNumber';
import colorConvert from 'color-convert';

import { KEYWORD } from 'color-convert/conversions';

function toRGBa(color: KEYWORD | string, alpha = 1): string {
  if (!color || !isString(color)) {
    return 'rgba(0,0,0,0)';
  }

  const numbers = !color.startsWith('#')
    ? colorConvert.keyword.rgb(color as KEYWORD)
    : colorConvert.hex.rgb(color);

  return `rgba(${numbers.map((num): number => num)}, ${
    !isNumber(alpha) ? 1 : alpha
  })`;
}

export default toRGBa;
