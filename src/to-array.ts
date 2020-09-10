import isArray from 'lodash/isArray';
import isNumber from 'lodash/isNumber';
import isPlainObject from 'lodash/isPlainObject';
import isString from 'lodash/isString';

import { FieldValue } from './utils';

/**
 * Converts supplied value to `string[]` or `number[]`. Useful for multi value
 * fields as `group_concat`.
 *
 * @param value - Field multi value.
 * @param toNumber - Map array values as numbers.
 *
 * @returns Immutable copy of value.
 */
function toArray(value?: FieldValue, toNumber?: boolean): string[] | number[] {
  const results: string[] | number[] = [];

  if (value === null || value === undefined || value === '') {
    return results;
  }

  if (isString(value)) {
    const nextValue = value.split(',');

    return !toNumber ? nextValue : nextValue.map(Number);
  }

  if (isArray(value)) {
    return !toNumber || isNumber(value[0])
      ? [...value]
      : (value as any).map(Number);
  }

  if (isNumber(value) || isPlainObject(value)) {
    return [value];
  }

  return results;
}

export default toArray;
