import isArray from 'lodash/isArray';

/**
 * Splits any array to chunks by supplied size.
 *
 * @returns New array chunks.
 */
function splitArray(array: unknown[], size?: number): unknown[][] {
  if (!size || !Number(size) || !isArray(array)) {
    return [];
  }

  const length = Math.ceil(array.length / size);

  return Array.from({ length }, (value, index) => {
    const count = index * size;

    /* eslint-disable-next-line @typescript-eslint/no-unsafe-return */
    return array.slice(count, count + size);
  });
}

export default splitArray;
