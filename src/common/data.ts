/** Utilities */
import isArray from 'lodash/isArray';
import isString from 'lodash/isString';
import isNumber from 'lodash/isNumber';

export function keyExtractor(key: string | number, index: number): string {
  return `${key}-${index}`;
}

export function setSrc(type: 'blob', data: string): string | undefined {
  switch (type) {
    case 'blob':
      return data.replace(/(\r\n|\n|\r)/gm, '');
  }

  return data;
}

/**
 * Extracts values from supplied `key` (i-e 'id') & converts any value to
 * array; drops object values.
 *
 * @param key - Object field name property to extract values from.
 * @param payload - List of results.
 */
export function extractValues(
  key: string,
  payload: any[]
): string[] | number[] {
  let data: string[] | number[] = [];

  if (!isArray(payload) || !payload.length) {
    return data;
  }

  for (const { [key]: value } of payload) {
    if (value === null || value === undefined || value === '') {
      continue;
    }

    if (isArray(value)) {
      data = [...data, ...value];
    } else if (isString(value)) {
      const separator = ',';

      if (value.includes(separator)) {
        data = [...data, ...value.split(separator)] as string[];
      } else {
        (data as string[]).push(value);
      }
    } else if (isNumber(value)) {
      (data as number[]).push(value);
    }
  }

  return data;
}

// export const preparePathPrefix = (): string => {
//   const date = new Date();
//   const month = date.getMonth() + 1;
//   const year = date.getFullYear();

//   /** prefix: `YYYY/mm` (2 digit month). */
//   return path.join(year.toString(), month.toString().padStart(2, '0'));
// };

/**
 * Cleans up text input & replaces white spaces with '-'.
 *
 * @param text - Text data to manipulate.
 * @param maxLength - Maximum string output length.
 */
export function setSlug(text: string, maxLength = 255): string {
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
