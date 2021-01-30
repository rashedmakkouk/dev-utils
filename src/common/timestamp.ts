/** Utilities */
import moment, { Moment } from 'moment';

/** Typings */
import { TimestampFormats } from '../types';

const TIMESTAMP_FORMATS = {
  sql: 'YYYY-MM-DD HH:mm:ss',
};

/**
 * Parses a timestamp string from date with specified format.
 *
 * @param date - .
 * @param format - Returns `moment` object if not supplied.
 */
function timestamp({
  date = Date.now(),
  format,
  timezoneOffest,
}: {
  /** Date class or db timestamp value; @default Date.now(). */
  date?: string | number | Date;
  /** Predefined timestamp output formats. */
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

export default timestamp;
