/**
 * For applications where unique keys need to be generated for elements in an
 * array (e.g. React Native FlatList).
 *
 * @returns Concatenated 'key-index' string.
 */
function keyExtractor(key: string | number, index: number): string {
  return `${key}-${index}`;
}

export default keyExtractor;
