import isArray from 'lodash/isArray';

/**
 * Splits any array to chunks by supplied size.
 */
function splitArray(array: any[], size?: number): any[][] {
  if (!size || !Number(size) || !isArray(array)) {
    return [];
  }

  const length = Math.ceil(array.length / size);

  return Array.from({ length }, (value, index) => {
    const count = index * size;

    return array.slice(count, count + size);
  });
}

export default splitArray;
