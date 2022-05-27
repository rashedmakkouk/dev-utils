/** Utilities */
import capitalize from 'lodash/capitalize';
import upperFirst from 'lodash/upperFirst';

/** Typings */
import { LetterCaseOptions } from '../types';

/**
 * Formats supplied string to defined case.
 *
 * {@link https://en.wikipedia.org/wiki/Letter_case#Stylistic_or_specialised_usage | Start Case}
 */
function letterCase(
  text: string | null = '',
  options: LetterCaseOptions
): string {
  if (!text) {
    return '';
  }

  let nextText = '';

  try {
    const { letterCase, separators } = options;

    nextText = !separators
      ? text.toLowerCase()
      : text
          .replace(new RegExp(`[${separators.join('|')}]+`, 'gi'), ' ')
          .toLowerCase();

    switch (letterCase) {
      case 'title':
        return (
          !separators ? nextText.replace(/[_-\s]+/gi, ' ') : nextText
        ).replace(/\w+/gi, capitalize);

      case 'sentence':
        return upperFirst(nextText);

      case 'upper':
        return nextText.toUpperCase();

      case 'lower':
        return nextText;

      case 'kebab':
        nextText = nextText
          .trim()
          /** W: all non alphanumeric charachters and white space. */
          .replace(/[\W_-]+/gi, '-');

        return nextText.slice(
          !nextText.startsWith('-') ? 0 : 1,
          !nextText.endsWith('-') ? undefined : -1
        );
    }
  } catch (error) {
    /**
     * - Exception thrown.
     */
  }

  return nextText;
}

export default letterCase;
