/**
 * Extracts the first character from the first and last words in a string.
 *
 * Splits at: white space, comma, dot, pipe, underscore, dash.
 */
function initials(text = ''): string {
  if (!text || typeof text !== 'string') {
    return '';
  }

  const parts = text.split(/[\s,.|_-]+/g).filter((part): boolean => !!part);

  if (!parts.length) {
    return '';
  }

  const first = parts[0].charAt(0);

  return parts.length === 1
    ? first
    : `${first}${parts[parts.length - 1].charAt(0)}`;
}

export default initials;
