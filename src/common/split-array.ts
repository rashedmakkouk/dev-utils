import isArray from 'lodash/isArray';

function splitArray(array: any[], size: number): any[][] {
  if (!isArray(array)) {
    return [];
  }

  const length = Math.ceil(array.length / size);

  return Array.from({ length }, (value, index) => {
    const count = index * size;

    return array.slice(count, count + size);
  });
}

export default splitArray;
