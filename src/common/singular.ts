/** Utilities */
import { isString } from 'lodash';

/**
 * Trims last character if ends with `s`.
 */
function singular(text: string): string {
  if (!isString(text)) {
    return '';
  }

  return !text.endsWith('s') ? text : text.slice(0, -1);
}

export default singular;
