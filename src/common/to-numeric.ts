/** Utilities */
import isNumber from 'lodash/isNumber';

/** Typings */
import { ToNumericOptions } from '../types';
import { toFixedRange, toNumericMathTypes } from '../utils';

/**
 * Converts value to and validates as 'number'.
 *
 * @returns Formatted number.
 */
function toNumeric(
  value: number | string | null,
  {
    decimal = true,
    math = decimal === false ? 'trunc' : undefined,
    precision,
  }: ToNumericOptions = {}
): number {
  const nextValue = !isNumber(value) ? Number(value) ?? 0 : value;

  if (nextValue === 0 || !math || !toNumericMathTypes.includes(math)) {
    return nextValue;
  }

  const numericValue = Math[math](nextValue);

  return precision == null || !toFixedRange.includes(precision)
    ? numericValue
    : Number(numericValue.toFixed(precision));
}

export default toNumeric;
