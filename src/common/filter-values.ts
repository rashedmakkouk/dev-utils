/** Utilities */
import isArray from 'lodash/isArray';

// TODO: Refactor 'filterValues' implementation; Issue #5.

function filterValues<ResultT extends unknown[]>(
  /** Original data to filter. */
  data: unknown[],
  /** Value to remove from data array. */
  value: unknown | unknown[],
  /** Object 'key' to filter data by. */
  key?: string
): ResultT {
  if (!isArray(data)) {
    const results: unknown[] = [];

    return results as ResultT;
  }

  // TODO: Implement object values filter by key.

  const isArrayValue = isArray(value);

  return data.filter((prevData): boolean => {
    return !isArrayValue ? prevData !== value : !value.includes(prevData);
  }) as ResultT;
}

export default filterValues;
