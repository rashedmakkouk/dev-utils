/** Utilities */
import { v4 as uuid } from 'uuid';
import isString from 'lodash/isString';
import isArray from 'lodash/isArray';
import isNumber from 'lodash/isNumber';
import isPlainObject from 'lodash/isPlainObject';
import moment, { Moment } from 'moment';
import isEmpty from 'lodash/isEmpty';
import startCase from 'lodash/startCase';
import upperFirst from 'lodash/upperFirst';
import colorConvert from 'color-convert';
import { NormalizedSchema, normalize as _normalize, schema } from 'normalizr';
import path from 'path';

/** Typings */
import { KEYWORD } from 'color-convert/conversions';
import {
  FieldValue,
  GenerateUUIDTypes,
  NormalizeSchemaOptions,
  NumericTypes,
  TimestampFormats,
} from '../@types/shared';

/* eslint-disable-next-line no-control-regex */
const FIRST_CHAR_REGEXP = /^[\x20\x09\x0a\x0d]*(.)/;
const NULLISH_VALUES = ['null', 'undefined'];
const BOOLEAN_VALUES = ['false', 'true'];

const TIMESTAMP_FORMATS = {
  sql: 'YYYY-MM-DD HH:mm:ss',
};

/**
 * Join array of paths.
 *
 * @param uri - Root path.
 * @param paths - List of folders/subFolders.
 */
export function joinPath(parts: string[] = []): string {
  if (!parts || !isArray(parts) || !parts.length) {
    return '';
  }

  return path
    .join(...parts.map((part): string => part || ''))
    .replace(/\\/g, '/');
}

/**
 * Normalizes db query results.
 *
 * Options:
 * options['idAttribute'] = 'username';
 *
 * @param key - Entity type to move records under (e.g. items).
 * @param payload - Data object or object array to manipulate.
 * @param options - Set custom column to use (e.g. idAttribute).
 *
 * @returns result object:
 * .entities: Normalized records per type.
 * .results: List of normalized entities' `attribute`.
 */
export function normalize<
  KeyT extends string = string,
  EntityT extends any = any,
  PayloadT extends any | any[] = any[]
>(
  key: KeyT,
  payload: PayloadT,
  options?: NormalizeSchemaOptions
): NormalizedSchema<
  // FIX: `key: KeyT` An index signature parameter type must be either
  // 'string' or 'number'
  { [key: string]: { [attribute: string]: EntityT } | undefined },
  PayloadT extends any[] ? string[] : string
> {
  const resultsSchema = new schema.Entity(key, {}, options);

  return _normalize(
    payload,
    isArray(payload) ? [resultsSchema] : resultsSchema
  );
}

export function toRGBa(color: KEYWORD | string, alpha = 1): string {
  if (!color || !isString(color)) {
    return 'rgba(0,0,0,0)';
  }

  const numbers = !color.startsWith('#')
    ? colorConvert.keyword.rgb(color as KEYWORD)
    : colorConvert.hex.rgb(color);

  return `rgba(${numbers.map((num): number => num)}, ${
    !isNumber(alpha) ? 1 : alpha
  })`;
}

export function isValid(
  isTypeof: 'string' | 'array' | 'number' | 'object' | 'jsonStr',
  value: FieldValue | any[] | object | object[]
): boolean {
  if (value === null || value === undefined) {
    return false;
  }

  switch (isTypeof) {
    case 'array':
      return isArray(value) && Boolean(value.length);

    case 'jsonStr':
      if (!value || !isString(value)) {
        return false;
      }

      const firstChar = FIRST_CHAR_REGEXP.exec(value)?.[1];
      const lowerCaseValue = value.toLowerCase();

      return (
        firstChar === '{' ||
        firstChar === '[' ||
        NULLISH_VALUES.includes(lowerCaseValue) ||
        BOOLEAN_VALUES.includes(lowerCaseValue)
      );

    case 'number':
      return isNumber(value);

    case 'object':
      return isPlainObject(value) && !isEmpty(value);

    case 'string':
      return (
        isString(value) &&
        'undefined' !== value.toLowerCase() &&
        Boolean(value.length)
      );
  }
}

/**
 * Converts supplied value to `string[]` or `number[]`. Useful for multi value
 * fields as `group_concat`.
 *
 * @param value - Field multi value.
 * @param toNumber - Map array values as numbers.
 *
 * @returns Immutable copy of value.
 */
export function toArray(
  value?: FieldValue,
  toNumber?: boolean
): string[] | number[] {
  const results: string[] | number[] = [];

  if (value === null || value === undefined || value === '') {
    return results;
  }

  if (isString(value)) {
    const nextValue = value.split(',');

    return !toNumber ? nextValue : nextValue.map(Number);
  }

  if (isArray(value)) {
    return !toNumber || isNumber(value[0])
      ? [...value]
      : (value as any).map(Number);
  }

  if (isNumber(value) || isPlainObject(value)) {
    return [value];
  }

  return results;
}

export function toNumeric({
  decimal,
  type = 'round',
  value,
}: {
  decimal?: boolean;
  type?: NumericTypes;
  value?: string | number;
}): number {
  if (!decimal) {
    return (
      Math[type](
        (!isString(value) ? value : value.replace(/,|-/g, '')) as number
      ) || 0
    );
  }

  return Number(value) || 0;
}

export function timeout(ms: number, race?: boolean): Promise<void> {
  return new Promise((resolve, reject): void => {
    // FIX: Cannot find name 'setTimeout'.ts(2304)
    setTimeout((): void => (race ? reject({ status: 408 }) : resolve()), ms);
  });
}

export function generateUUID(
  type?: GenerateUUIDTypes,
  prefix?: string
): string {
  switch (type) {
    case 'filename':
      return `${(Date.now() / 1000).toString().replace('.', '')}-${uuid()}`;

    case 'title':
      // TODO: Add short `uuid`.
      const title = moment().format('YYYY-MM-DD_HH-mm-ss');

      return !prefix ? title : `${prefix}_${title}`;

    case 'temp':
      return `${moment().format('YYYY-MM-DD_HH-mm-ss')}_${uuid()}`;

    default:
      return uuid();
  }
}

/** Trims leading, trailing & multiple `white-space`, `tab` & `new-line`. */
export const trimWhiteSpace = (text: string): string => {
  if (!text || !isString(text)) {
    return '';
  }

  text = text
    /** Removes leading and trailing spaces. */
    .trim()
    /** Replaces multiple `white-space`, `tab` & `newline` with one space. */
    .replace(/[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, ' ')
    .trim();

  return !text.replace(/\s/g, '').length ? '' : text;
};

export const sanitizeString = (text: string): string => {
  text = trimWhiteSpace(text)
    /** Removes html tags; TODO remove ^. */
    .replace(/(<([^>]+)>)/gi, '')
    /** Removes leading and trailing spaces. */
    .trim();

  return !text.replace(/\s/g, '').length ? '' : text;
};

/**
 * Capitalizes fisrt letter of string.
 *
 * @param text - Any text input.
 */
export const capitalizeString = (
  text?: string | null,
  asStartCase?: boolean
): string => {
  if (!text || !isValid('string', text)) {
    return '';
  }

  return !asStartCase
    ? upperFirst(text)
    : startCase(text.toLowerCase().replace(/_/gi, ' '));
};

export function randomInt({
  type,
  min,
  max,
}: {
  type?: 'key' | 'uuid';
  min?: number;
  max?: number;
}): string | number {
  switch (type) {
    case 'uuid':
      return uuid().toString();

    default:
      min = 10240000;
      max = 9024000000000;
      break;
  }

  min = Math.ceil(min);
  max = Math.floor(max);

  const randomInt = Math.floor(Math.random() * (max - min)) + min;

  return type === 'key' ? randomInt.toString() : randomInt;
}

// export function getTimestampDiff(datetime: string, type = 'days', amount = 7) {
//   var now = moment();
//   var count = now.diff(datetime, type);
//   switch (type) {
//     case 'days':
//       return (count <= amount && datetime.fromNow()) || false;
//     case 'minutes':
//     case 'hours':
//       return count <= amount || false;
//   }
// }

// SPIKE: Get user's timezone offset timestamp? or all server date/time &
// display based on offset.

/**
 * Sets a timestamp string from date with specified format.
 *
 * @param date - Date class or db timestamp value; defaults
 * to Date.now().
 * @param format - Returns `moment` object if not supplied.
 */
export function getTimestamp({
  date = Date.now(),
  format,
  timezoneOffest,
}: {
  date?: string | number | Date;
  format?: TimestampFormats;
  timezoneOffest?: string;
}): string | Moment {
  const m = moment(date);

  if (!format) {
    return m;
  }

  const nextFormat = TIMESTAMP_FORMATS[format] || format;

  return moment(date).format(nextFormat);
}

// export function getTimestamp(type: TimestampFormats, timestamp: string) {
//   var response = null;
//   // FIX:: use DatastoreService.getState
//   var offset = store.getState().User.profile.location_timezone_offset;
//   // TODO: move to registration component, include with request
//   if (offset == null || type === 'offset') {
//     var now = new Date();
//     offset = now.getTimezoneOffset() / -60;
//   }
//   // console.log('offset', new Date().getTimezoneOffset() / -60)
//   timestamp = moment(timestamp);
//   var datetime = timestamp.add(offset, 'hours');
//   switch (type) {
//     case 'fromNow':
//       response = datetime.fromNow();
//       break;
//     case 'MMMM YYYY':
//     case 'MM/D':
//     case 'MM/DD/YYYY':
//       response = datetime.format(type);
//       break;
//     case 'datetime':
//       response =
//         datetime.format('dddd, MMMM D') + ' at ' + datetime.format('h:mmA');
//       break;
//     case 'short':
//       response = `${datetime.format('ddd, MMM D')} ${datetime.format('h:mmA')}`;
//       break;
//     case 'online':
//       return getTimestampDiff(datetime, 'minutes', 10);
//     case 'offset':
//       return offset;
//   }
//   // console.log('timestamp', type, response)
//   return getTimestampDiff(datetime) || response;
// }

// TODO: `formatNumber` convert numbers to human readable format (e.g. 1k)
// export function formatNumber(value: string | number, fixed?: number): string | null {
//   if (value === null || value === undefined) return null;

//   const number = !isNumber(value) ? parseInt(value) : value;

//   if (number === 0) {
//     return '0';
//   } // terminate early

//   fixed = !fixed || fixed < 0 ? 0 : fixed; // number of decimal places to show

//   const b = number.toPrecision(2).split('e'), // get power
//     k = b.length === 1 ? 0 : Math.floor(Math.min(b[1].slice(1), 14) / 3), // floor at decimals, ceiling at trillions
//     c =
//       k < 1
//         ? number.toFixed(0 + fixed)
//         : (number / Math.pow(10, k * 3)).toFixed(1 + fixed), // divide by power
//     d = c < 0 ? c : Math.abs(c), // enforce -0 is 0
//     e = d + ['', 'k', 'M', 'B', 'T'][k]; // append power

//   return e;
// }

// export function formatNumber(string, digits)
// {
//     var newstring = string

//     if (string >= 1000) {
//         var suffixes = ['', 'k', 'm', 'b', 't']

//         var suffixNum = Math.floor( ('' + string).length/3 )

//         var shortNum
//         var shortstring = ''

//         for (var precision = 2; precision >= 1; precision--)
//         {
//             shortstring = parseFloat( (suffixNum != 0 ? (string / Math.pow(1000, suffixNum) ) : string).toPrecision(precision))

//             var dotLessShortstring = (shortstring + '').replace(/[^a-zA-Z 0-9]+/g, '')

//             if (dotLessShortstring.length <= 2)
//             {
//                 break
//             }
//         }

//         if (shortstring % 1 != 0)
//         {
//             shortNum = shortstring.toFixed(2)
//         }

//         newstring = shortstring + suffixes[suffixNum]
//     }

//     return newstring
// }

// export function formatNumber(number, digits)
// {
//     var i
//     var string

//     var si = [
//         { string: 1E18, symbol: 'E' },
//         { string: 1E15, symbol: 'P' },
//         { string: 1E12, symbol: 'T' },
//         { string: 1E9, symbol: 'G' },
//         { string: 1E6, symbol: 'M' },
//         { string: 1E3, symbol: 'k' }
//     ]

//     var rx = /\.0+$|(\.[0-9]*[1-9])0+$/

//     for (i = 0; i < si.length; i++)
//     {
//         if (number >= si[i].string)
//         {
//             string = (number / si[i].string).toFixed(digits).replace(rx, '$1') + si[i].symbol

//             return Math.round(string)
//         }
//     }

//     string = number.toFixed(digits).replace(rx, '$1')

//     return Math.round(string)
// }
