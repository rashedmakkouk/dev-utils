/** Utilities */
import startCase from 'lodash/startCase';
import upperFirst from 'lodash/upperFirst';
import isString from 'lodash/isString';

/** Typings */
import { LetterCaseOptions } from '../types';

/**
 * Manipulates text string.
 */
function letterCase(
  text: string | null = '',
  options: LetterCaseOptions
): string {
  let nextText = '';

  try {
    const { convertSnake, letterCase, maxLength } = options;

    if (!text || !isString(text)) {
      return nextText;
    } else {
      nextText = !convertSnake ? text : text.replace(/_/gi, ' ');
    }

    switch (letterCase) {
      case 'title':
        return startCase(nextText.toLowerCase());

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
            .replace(/[\W_]+/g, '-')
            .toLowerCase()
        );
    }
  } catch (error) {
    /** Exception thrown. */
  }

  return nextText;
}

export default letterCase;
