/** Utilities */
import isArray from 'lodash/isArray';
import isNumber from 'lodash/isNumber';
import isPlainObject from 'lodash/isPlainObject';
import isString from 'lodash/isString';

/** Typings */
import { FieldValue } from '../types';

/**
 * Converts supplied value to `string[]` or `number[]`. Useful for multi value
 * fields as `group_concat`.
 *
 * @param value - Field multi value.
 * @param toNumber - Map array values as numbers.
 *
 * @returns Immutable copy of value.
 */
function toArray(value?: FieldValue, toNumber?: boolean): (string | number)[] {
  const results: (string | number)[] = [];

  if (value === null || value === undefined || value === '') {
    return results;
  }

  if (isString(value)) {
    const nextValue = value.split(',');

    return !toNumber ? nextValue : nextValue.map(Number);
  } else if (isArray(value)) {
    return !toNumber || isNumber(value[0])
      ? [...value]
      : (value as any).map(Number);
  } else if (isNumber(value) || isPlainObject(value)) {
    return [value];
  } else {
    return results;
  }
}

export default toArray;
