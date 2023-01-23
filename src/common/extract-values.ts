/** Utilities */
import isArray from 'lodash/isArray';
import isNumber from 'lodash/isNumber';
import isPlainObject from 'lodash/isPlainObject';
import isString from 'lodash/isString';

// TODO: Refactor 'extractValues' implementation; Issue #4.

/**
 * Extracts values from supplied `key` (i-e 'id') and converts any value to
 * array; drops object values.
 *
 * @param key - Object field name property to extract values from.
 * @param payload - List of results.
 */
function extractValues({
  key,
  payload,
  separator = ',',
}: {
  key: string;
  payload: { [key: string]: unknown } | unknown[];
  separator?: string;
}): string[] | number[] {
  let data: string[] | number[] = [];

  const appendValue = (value?: unknown): void => {
    if (value === null || value === undefined || value === '') {
      return;
    } else if (isString(value)) {
      if (value.includes(separator)) {
        data = [...data, ...value.split(separator)] as string[];
      } else {
        (data as string[]).push(value);
      }
    } else if (isNumber(value)) {
      (data as number[]).push(value);
    } else if (isArray(value)) {
      /* eslint-disable-next-line @typescript-eslint/no-unsafe-assignment */
      data = [...data, ...value];
    }
  };

  if (!isArray(payload)) {
    if (isPlainObject(payload)) {
      const { [key]: value } = payload;

      appendValue(value);
    }
  } else if (payload.length) {
    for (const { [key]: value } of payload) {
      appendValue(value);
    }
  }

  return data;
}

export default extractValues;
