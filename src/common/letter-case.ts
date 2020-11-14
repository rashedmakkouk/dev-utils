/** Utilities */
import startCase from 'lodash/startCase';
import upperFirst from 'lodash/upperFirst';
import isString from 'lodash/isString';

/** Typings */
import { LetterCaseOptions } from '../utils';

/**
 * Manipulates text string.
 */
function letterCase(
  text?: string | null,
  { asStartCase, letterCase, maxLength }: LetterCaseOptions = {}
): string {
  let results = '';

  if (!isString(text) || !text) {
    return results;
  }

  results =
    !asStartCase || letterCase === 'kebab'
      ? text
      : startCase(text.toLowerCase().replace(/_/gi, ' '));

  switch (letterCase) {
    case 'upper':
      return results.toUpperCase();

    case 'upperFirst':
      return upperFirst(results);

    case 'lower':
      return results.toLowerCase();

    case 'kebab':
      /** W: all non alphanumeric charachters & whitespace. */
      results = (!maxLength || text.length < maxLength
        ? text
        : text.slice(0, maxLength)
      )
        .replace(/[\W_]+/g, '-')
        .toLowerCase();

      /** Removes last character if '-'. */
      return results.startsWith('-')
        ? text.slice(1)
        : text.endsWith('-')
        ? text.slice(0, -1)
        : text;
  }

  return results;
}

export default letterCase;
