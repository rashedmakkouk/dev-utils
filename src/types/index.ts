import validator from 'validator';

export type TimeSpans = 'ms' | 's' | 'm' | 'h' | 'd' | 'w' | 'y';

export type TimestampFormats =
  | 'datetime'
  | 'fromNow'
  | 'short'
  | 'offset'
  | 'sql'
  | string;

export type RandomTypes =
  | 'filename'
  | 'title'
  | 'temp'
  | 'uuid'
  | 'key'
  | 'integer';

export interface TimestampOptions {
  /**
   * Predefined timestamp output formats.
   *
   * {@link https://momentjs.com/docs/#/displaying/format | Moment - Format}
   */
  format?: TimestampFormats;
  timezoneOffest?: string;
}

export interface IsBase64Options extends validator.IsBase64Options {
  allowEmpty?: boolean;
  allowMime?: boolean;
  mimeRequired?: boolean;
}

export interface RandomOptions {
  min?: number;
  max?: number;
  prefix?: string;
}

export interface MsOptions {
  /** Sets time spans to long formats (e.g. minutes, hours) */
  long?: boolean;
}

export interface LetterCaseOptions {
  letterCase: 'lower' | 'upper' | 'sentence' | 'kebab' | 'title';
  /** Converts supplied symbols list to space. */
  symbols?: ('-' | '_' | ',' | ';' | '.' | '&' | '#' | '!')[];
}

export type MathTypes = 'trunc' | 'ceil' | 'round' | 'floor';

export interface JoinPathOptions {
  resolve?: boolean;
}

export interface NormalizeSchemaOptions {
  idAttribute?: string;
}

export type FieldValue = string | number | string[] | number[] | null;

export interface SqlEscapeOptions {
  /** Use for column names & reserved words. */
  escapeId?: boolean;
  /** Useful in setting query conditions values (e.g. limit, offset). */
  parseInteger?: boolean;
  /**
   * Removes single quotes from result; useful in `REGEXP` values or query
   * conditions (e.g. ASC).
   */
  stripQuote?: boolean;
}

export interface ToNumericArgs {
  /** Whether to keep or remove decimal point. */
  decimal?: boolean;
  math?: MathTypes;
  value?: string | number;
}
