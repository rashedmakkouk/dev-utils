/** Utilities */
import capitalize from 'lodash/capitalize';
import upperFirst from 'lodash/upperFirst';

/** Typings */
import { LetterCaseOptions } from '../types';

/**
 * Converts string to supplied case.
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
    const { letterCase, maxLength, symbols } = options;

    nextText = !symbols
      ? letterCase === 'title'
        ? text.replace(/[_-\s]+/gi, ' ')
        : text
      : text.replace(new RegExp(`[${symbols.join('|')}\\s]+`, 'gi'), ' ');

    switch (letterCase) {
      case 'title':
        return nextText.toLowerCase().replace(/\w+/gi, capitalize);

      case 'sentence':
        return upperFirst(nextText);

      case 'upper':
        return nextText.toUpperCase();

      case 'lower':
        return nextText.toLowerCase();

      case 'kebab':
        return (
          (!maxLength || nextText.length < maxLength
            ? nextText
            : nextText.slice(0, maxLength)
          )
            .trim()
            /** W: all non alphanumeric charachters & whitespace. */
            .replace(/[\W_-]+/gi, '-')
            .toLowerCase()
        );
    }
  } catch (error) {
    /** Exception thrown. */
  }

  return nextText;
}

export default letterCase;
