/** Utilities */
import trimWhiteSpace from './trim-whitespace';

/**
 * Trims whitespaces and removes HTML tags.
 */
function sanitize(text: string): string {
  text = trimWhiteSpace(text)
    /** Removes html tags; TODO remove ^. */
    .replace(/(<([^>]+)>)/gi, '')
    /** Removes leading and trailing spaces. */
    .trim();

  return !text.replace(/\s/g, '').length ? '' : text;
}

export default sanitize;
