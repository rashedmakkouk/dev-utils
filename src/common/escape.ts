/** Utilities */
import { escape as _escape, escapeId as _escapeId } from 'sqlstring';
import isNumber from 'lodash/isNumber';

/** Typings */
import { FieldValue, SqlEscapeOptions } from '../types';

/**
 * A `sqlstring` wrapper for convenience.
 */
function escape(
  value: FieldValue,
  options: SqlEscapeOptions = {}
): string | number | null | undefined {
  if (value == undefined) {
    return value;
  }

  const {
    escapeId = false,
    parseInteger = false,
    stripQuote = false,
  } = options;

  if (isNumber(value)) {
    return value;
  } else if (parseInteger) {
    return parseInt(_escape(value), 10);
  } else if (escapeId) {
    return _escapeId(value);
  } else {
    return !stripQuote ? _escape(value) : _escape(value).slice(1, -1);
  }
}

export default escape;
