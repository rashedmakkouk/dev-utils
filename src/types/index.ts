import validator from 'validator';

export type Separators = '-' | '_' | ',' | ';' | '.' | '&' | '#' | '!';

export type TimeSpans = 'ms' | 's' | 'm' | 'h' | 'd' | 'w' | 'y';

export type TimestampFormats =
  | 'datetime'
  | 'fromNow'
  | 'short'
  | 'offset'
  | 'sql'
  | string;

export type RandomTypes = 'filename' | 'number' | 'title' | 'temp' | 'uuid';

export interface TimestampOptions {
  /**
   * Predefined timestamp output formats.
   *
   * {@link https://momentjs.com/docs/#/displaying/format | Moment - Format}
   *
   * @default DD/MM/YYYY
   */
  format?: TimestampFormats;
  timezoneOffest?: string | number;
}

export interface IsBase64Options extends validator.IsBase64Options {
  /** Returns true if value is empty. */
  allowEmpty?: boolean;
  /** String may include mime type. */
  allowMime?: boolean;
  /** String should include mime type. */
  mimeRequired?: boolean;
}

export interface RandomOptions {
  min?: number;
  max?: number;
  prefix?: string;
  suffix?: string;
}

export interface MsOptions {
  /** Sets time spans to long formats (e.g. minutes, hours). */
  long?: boolean;
}

export interface LetterCaseOptions {
  letterCase: 'lower' | 'upper' | 'sentence' | 'kebab' | 'title';
  /** Converts supplied symbols list to space. */
  separators?: Separators[];
}

export type MathTypes = 'trunc' | 'ceil' | 'round' | 'floor';

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

export interface ToNumericOptions {
  /**
   * Whether to keep or remove decimal point.
   *
   * @default true
   */
  decimal?: boolean;
  math?: MathTypes;
}

export interface ToArrayOptions {
  /**
   * The pattern where the split should occur.
   *
   * @default ,
   */
  separator?: Separators;
  /** Maps array values as numbers. */
  toNumber?: boolean;
}
