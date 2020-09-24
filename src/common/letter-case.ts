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
  { asStartCase, letterCase }: LetterCaseOptions = {}
): string {
  let results = '';

  if (!isString(text) || !text) {
    return results;
  }

  results = !asStartCase
    ? text
    : startCase(text.toLowerCase().replace(/_/gi, ' '));

  switch (letterCase) {
    case 'upper':
      return results.toUpperCase();

    case 'upperFirst':
      return upperFirst(results);

    case 'lower':
      return results.toLowerCase();
  }

  return results;
}

export default letterCase;
