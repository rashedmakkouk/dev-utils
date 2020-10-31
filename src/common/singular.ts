/** Utilities */
import { isString } from 'lodash';

function singular(text: string): string {
  return !isString(text) ? '' : text.slice(0, -1);
}

export default singular;
