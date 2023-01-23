/** Utilities */
import isArray from 'lodash/isArray';
import isNumber from 'lodash/isNumber';
import isPlainObject from 'lodash/isPlainObject';
import isString from 'lodash/isString';

/** Typings */
import { FieldValue, ToArrayOptions } from '../types';
import trimWhitespace from './trim-whitespace';

/**
 * Converts any value to array.
 *
 * Useful for multi value fields as 'group_concat'.
 *
 * @returns New array based on supplied options.
 */
function toArray(
  value: FieldValue,
  options: ToArrayOptions = {}
): string[] | number[] | (string | number)[] {
  const { separator, parseNumber } = options;

  if (value == null || value === '') {
    return [];
  }

  if (isString(value)) {
    const trimmedValue = trimWhitespace(value);

    const nextValue = trimmedValue
      .split(separator ?? ',')
      .filter((n): boolean => !!n);

    return !parseNumber ? nextValue : nextValue.map(Number);
  } else if (isArray(value)) {
    return !parseNumber
      ? [...value]
      : value.map((n: string | number): number => Number(n) ?? (n as number));
  } else if (isNumber(value) || isPlainObject(value)) {
    return [value];
  } else {
    return [];
  }
}

export default toArray;
