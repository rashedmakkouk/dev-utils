export type TimestampFormats =
  | 'fromNow'
  | 'MMMM YYYY'
  | 'MM/D'
  | 'MM/DD/YYYY'
  | 'short'
  | 'online'
  | 'offset'
  | 'sql';

export type GenerateUUIDTypes = 'filename' | 'title' | 'temp';

export type NumericTypes = 'trunc' | 'ceil' | 'round' | 'floor';

export interface NormalizeSchemaOptions {
  idAttribute?: string;
}

export type FieldValue = string | number | string[] | number[] | null;
