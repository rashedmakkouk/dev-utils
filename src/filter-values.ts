import isArray from 'lodash/isArray';

function filterValues<ResultT extends any[]>(
  /** Original data to filter. */
  data: any[],
  /** Value to remove from data array. */
  value: any | any[],
  /** Object `key` to filter data by. */
  key?: string
): ResultT {
  if (!isArray(data)) {
    const results: any[] = [];

    return results as ResultT;
  }

  // TODO: Implement object values filter by key.

  const isArrayValue = isArray(value);

  return data.filter((prevData): boolean => {
    return !isArrayValue ? prevData !== value : !value.includes(prevData);
  }) as ResultT;
}

export default filterValues;
