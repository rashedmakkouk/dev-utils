/** Utilities */
import isString from 'lodash/isString';

/** Typings */
import { ToNumericArgs } from '../types';

function toNumeric({ decimal, math = 'round', value }: ToNumericArgs): number {
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
