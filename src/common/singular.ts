/** Utilities */
import { isString } from 'lodash';

/**
 * Trims last character if ends with 's' or replaces 'ies' with 'y'.
 *
 * @returns Trimmed text.
 */
function singular(text: string): string {
  if (!text || !isString(text)) {
    return '';
  }

  if (text.endsWith('ies')) {
    return text.replace(/ies$/, 'y');
  } else if (text.endsWith('s')) {
    return text.slice(0, -1);
  } else {
    return text;
  }
}

export default singular;
