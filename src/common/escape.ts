/** Utilities */
import isNumber from 'lodash/isNumber';
import { escape as _escape, escapeId as _escapeId } from 'sqlstring';

/** Typings */
import { FieldValues, SqlEscapeOptions } from '../types';

/**
 * Sanitizes and formats SQL input data for safe use in MySQL query statements.
 *
 * @returns Escaped string.
 */
function escape(
  value: FieldValues,
  options: SqlEscapeOptions = {}
): string | number | null | undefined {
  if (value == null) {
    return value;
  }

  const {
    escapeId = false,
    parseInteger = false,
    stripQuote = false,
  } = options;

  if (parseInteger) {
    return parseInt(_escape(value), 10);
  } else if (escapeId) {
    return _escapeId(value);
  } else {
    return !stripQuote || isNumber(value)
      ? _escape(value)
      : _escape(value).slice(1, -1);
  }
}

export default escape;
