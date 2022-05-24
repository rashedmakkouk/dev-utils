/** Utilities */
import isArray from 'lodash/isArray';
import isNumber from 'lodash/isNumber';
import isPlainObject from 'lodash/isPlainObject';
import isString from 'lodash/isString';

/** Typings */
import { FieldValue, ToArrayOptions } from '../types';

/**
 * Converts any value to array.
 *
 * Useful for multi value fields as `group_concat`.
 *
 * @returns Immutable copy of value.
 */
function toArray(
  value: FieldValue,
  { separator, toNumber }: ToArrayOptions = {}
): (string | number)[] {
  const results: (string | number)[] = [];

  if (value == null || value === '') {
    return results;
  }

  if (isString(value)) {
    const nextValue = value.split(separator || ',');

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
