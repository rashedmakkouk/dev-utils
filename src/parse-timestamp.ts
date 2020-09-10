import moment, { Moment } from 'moment';

/** Typings */
import { TimestampFormats } from './utils';

const TIMESTAMP_FORMATS = {
  sql: 'YYYY-MM-DD HH:mm:ss',
};

/**
 * Parses a timestamp string from date with specified format.
 *
 * @param date - Date class or db timestamp value; defaults
 * to Date.now().
 * @param format - Returns `moment` object if not supplied.
 */
function parseTimestamp({
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

export default parseTimestamp;
