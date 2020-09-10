import isValid from './is-valid';
import startCase from 'lodash/startCase';
import upperFirst from 'lodash/upperFirst';

/**
 * Capitalizes fisrt letter of string.
 *
 * @param text - Any text input.
 */
function capitalizeString(text?: string | null, asStartCase?: boolean): string {
  if (!text || !isValid('string', text)) {
    return '';
  }

  return !asStartCase
    ? upperFirst(text)
    : startCase(text.toLowerCase().replace(/_/gi, ' '));
}

export default capitalizeString;
