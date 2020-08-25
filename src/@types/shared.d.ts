export type TimestampFormats =
  | 'fromNow'
  | 'MMMM YYYY'
  | 'MM/D'
  | 'MM/DD/YYYY'
  | 'short'
  | 'online'
  | 'offset'
  | 'sql';

export type RandomIntTypes = 'filename' | 'title' | 'temp' | 'uuid' | 'key';

export type NumericTypes = 'trunc' | 'ceil' | 'round' | 'floor';

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
