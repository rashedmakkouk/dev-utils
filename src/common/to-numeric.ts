/** Utilities */
import isNumber from 'lodash/isNumber';

/** Typings */
import { ToNumericOptions } from '../types';

/**
 * Converts value to and validates as number.
 */
function toNumeric(
  value: number | string | null,
  { decimal = true, math }: ToNumericOptions = {}
): number {
  let nextValue = !isNumber(value) ? Number(value) || 0 : value;

  if (nextValue === 0) {
    return nextValue;
  } else if (decimal === false) {
    nextValue = Math.trunc(nextValue);
  }

  return !math ? nextValue : Math[math](nextValue);
}

export default toNumeric;
