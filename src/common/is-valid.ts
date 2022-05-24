/** Utilities */
import isArray from 'lodash/isArray';
import isNumber from 'lodash/isNumber';
import isPlainObject from 'lodash/isPlainObject';
import isString from 'lodash/isString';

/** Typings */
import { FieldValue } from '../types';

/* eslint-disable-next-line no-control-regex */
const FIRST_CHAR_REGEXP = /^[\x20\x09\x0a\x0d]*(.)/;
const NULLISH_VALUES = ['null', 'undefined'];
const BOOLEAN_VALUES = ['false', 'true'];

/**
 * Verifies if supplied payload is valid by defined type.
 */
function isValid(
  isTypeof: 'string' | 'array' | 'number' | 'object' | 'jsonStr',
  value?: FieldValue | any[] | object | object[]
): boolean {
  if (value == null) {
    return true;
  }

  switch (isTypeof) {
    case 'array':
      return isArray(value) && !!value.length;

    case 'jsonStr':
      if (!value || !isString(value)) {
        return false;
      }

      const firstChar = FIRST_CHAR_REGEXP.exec(value)?.[1];
      const lowerCaseValue = value.toLowerCase();

      return (
        firstChar === '{' ||
        firstChar === '[' ||
        NULLISH_VALUES.includes(lowerCaseValue) ||
        BOOLEAN_VALUES.includes(lowerCaseValue)
      );

    case 'number':
      return isNumber(value);

    case 'object':
      return isPlainObject(value) && !!Object.keys(value).length;

    case 'string':
      if (!value || !isString(value)) {
        return false;
      }

      return value.toLowerCase() !== 'undefined' && !!value.length;
  }
}

export default isValid;
