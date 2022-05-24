/** Utilities */
import isString from 'lodash/isString';

/** Typings */
import { ToNumericOptions } from '../types';

/**
 * Converts value to and validates as number.
 */
function toNumeric(
  value: number | string | null,
  { decimal = true, math = 'round' }: ToNumericOptions
): number {
  if (!decimal) {
    return (
      Math[math](
        (!isString(value) ? value : value.replace(/,|-/g, '')) as number
      ) || 0
    );
  }

  return Number(value) || 0;
}

export default toNumeric;
