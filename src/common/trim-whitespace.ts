/** Utilities */
import isString from 'lodash/isString';
import isNumber from 'lodash/isNumber';

/**
 * Removes leading and trailing spaces and replaces multiple whitespace, tabs
 * and newlines with one space.
 */
function trimWhitespace(text: string): string {
  if (isNumber(text)) {
    return text;
  } else if (!text || !isString(text)) {
    return '';
  }

  text = text
    /** Removes leading and trailing spaces. */
    .trim()
    /** Replaces multiple `whitespace`, `tab` and `newline` with one space. */
    .replace(/[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, ' ')
    .trim();

  return !text.replace(/\s/g, '').length ? '' : text;
}

export default trimWhitespace;
