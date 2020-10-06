export type TimestampFormats =
  | 'fromNow'
  | 'MMMM YYYY'
  | 'MM/D'
  | 'MM/DD/YYYY'
  | 'short'
  | 'online'
  | 'offset'
  | 'sql';

export type RandomTypes =
  | 'filename'
  | 'title'
  | 'temp'
  | 'uuid'
  | 'key'
  | 'integer';

export interface RandomOptions {
  min?: number;
  max?: number;
  prefix?: string;
}

export interface LetterCaseOptions {
  /**
   * Converst string to `start case`.
   * See {@link https://en.wikipedia.org/wiki/Letter_case#Stylistic_or_specialised_usage | Start Case}
   */
  asStartCase?: boolean;
  letterCase?: 'lower' | 'upper' | 'upperFirst';
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
