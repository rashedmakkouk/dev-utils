/**
 * Cleans up text input & replaces white spaces with '-'.
 *
 * @param text - Text data to manipulate.
 * @param maxLength - Maximum string output length.
 */
function setSlug(text: string, maxLength = 255): string {
  /** W: all non alphanumeric charachters & whitespace. */
  text = text.replace(/[\W_]+/g, '-').toLowerCase();

  /** Removes last character if '-'. */
  text =
    (text.charAt(text.length - 1) === '-' &&
      text.substring(0, text.length - 1)) ||
    text;

  /** Returns `maxLength` */
  return (text.length > maxLength && text.substring(0, maxLength)) || text;
}

export default setSlug;
