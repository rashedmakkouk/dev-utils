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
  options: ToArrayOptions = {}
): (string | number)[] {
  const { separator, toNumber } = options;

  if (value == null || value === '') {
    return [];
  }

  if (isString(value)) {
    const nextValue = value
      .replace(/[\s]+/gi, '')
      .split(separator || ',')
      .filter((n): boolean => !!n);

    return !toNumber ? nextValue : nextValue.map(Number);
  } else if (isArray(value)) {
    return !toNumber
      ? [...value]
      : (value as any).map((n): any => Number(n) || n);
  } else if (isNumber(value) || isPlainObject(value)) {
    return [value];
  } else {
    return [];
  }
}

export default toArray;
