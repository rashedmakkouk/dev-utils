import validator from 'validator';

import { toFixedRange, toNumericMathTypes } from '../utils';

export type Separators = '-' | '_' | ',' | ';' | '.' | '&' | '#' | '!';

export type TimeSpans = 'ms' | 's' | 'm' | 'h' | 'd' | 'w' | 'y';

export type TimestampFormats =
  | 'datetime'
  | 'fromNow'
  | 'short'
  | 'offset'
  | 'sql'
  | string;

export type ToFixedRange = (typeof toFixedRange)[number];

export interface TimestampOptions {
  /**
   * Predefined timestamp output formats.
   *
   * {@link https://momentjs.com/docs/#/displaying/format | Moment - Format}
   *
   * @default DD/MM/YYYY
   */
  format?: TimestampFormats;
  timezoneOffset?: string | number;
}

export interface IsBase64Options extends validator.IsBase64Options {
  /** Returns true if value is empty. */
  allowEmpty?: boolean;
  /** String may include mime type. */
  allowMime?: boolean;
  /** String should include mime type. */
  mimeRequired?: boolean;
}

export type RandomTypes = 'filename' | 'number' | 'temp' | 'title' | 'uuid';

/**
 * Available for option: 'number'.
 */
export interface RandomOptionsNumber {
  /**
   * Generate a random number with decimals. Also see 'precision'.
   *
   * @default false
   */
  decimal?: boolean;
  /**
   * @default 0
   */
  min?: number;
  /**
   * @default 1
   */
  max?: number;
  /**
   * Limit generated number decimal places.
   *
   * @default 0
   */
  precision?: ToFixedRange;
}

/**
 * Available for options: 'filename', 'temp', 'title'.
 */
export interface RandomOptionsString {
  /** Text to add to the beginning of the result. */
  prefix?: string;
  /** Text to add to the end of the result. */
  suffix?: string;
}

export type RandomOptions<RandomTypeT extends RandomTypes> =
  RandomTypeT extends 'uuid'
    ? never
    : RandomTypeT extends 'number'
    ? RandomOptionsNumber
    : RandomOptionsString;

export type RandomResult<RandomTypeT extends RandomTypes> =
  RandomTypeT extends 'number' ? number : string;

export interface MsOptions {
  /** Sets time spans to long formats (e.g. minutes, hours). */
  long?: boolean;
}

export type LetterCaseTypes =
  | 'lower'
  | 'upper'
  | 'sentence'
  | 'kebab'
  | 'title';

export interface LetterCaseOptions {
  letterCase: LetterCaseTypes;
  /** Converts supplied symbols list to space. */
  separators?: Separators[];
}

export interface JoinPathOptions {
  /** If true, resolves result path string. */
  resolve?: boolean;
}

export interface NormalizeSchemaOptions {
  idAttribute?: string;
}

export type FieldValue = string | number | string[] | number[] | null;

export interface SqlEscapeOptions {
  /**
   * Use for column names & reserved words.
   *
   * @default false
   */
  escapeId?: boolean;
  /**
   * Useful in setting query conditions values (e.g. limit, offset).
   *
   * @default false
   */
  parseInteger?: boolean;
  /**
   * Removes single quotes from result; useful in `REGEXP` values or query
   * conditions (e.g. ASC).
   *
   * @default false
   */
  stripQuote?: boolean;
}

export type ToNumericMathTypes = (typeof toNumericMathTypes)[number];

export interface ToNumericOptions {
  /**
   * Whether to keep or remove decimal point.
   *
   * @default true
   */
  decimal?: boolean;
  math?: ToNumericMathTypes;
  /**
   * If supplied, limits number decimal places.
   *
   * @default undefined
   */
  precision?: ToFixedRange;
}

export interface ToArrayOptions {
  /** Maps array values as numbers. */
  parseNumber?: boolean;
  /**
   * The pattern where the split should occur.
   *
   * @default ,
   */
  separator?: Separators;
}

export interface IsValidOptions {
  /**
   * If true, validates empty values as valid.
   *
   * @default false
   */
  allowEmpty?: boolean;
}
