/** Utilities */
import moment from 'moment';

/** Typings */
import { TimestampOptions } from '../types';

/**
 * Parses any date value to a timestamp with predefined or custom format.
 *
 * - datetime: dddd, MMMM D at h:mA
 * - fromNow: Relative time.
 * - short: ddd, MMM D
 * - sql: YYYY-MM-DD HH:mm:ss
 *
 * @param date - Parses supplied value, else falls back to Date/Time Now.
 *
 * @returns Formatted timestamp.
 */
function timestamp(
  date: string | number | Date | null | undefined = Date.now(),
  options: TimestampOptions = {}
): string {
  const instance = moment(date);

  // TODO: Add 'timezoneOffset' support; Issue #6.
  const { format = 'DD/MM/YYYY', timezoneOffset } = options;

  switch (format) {
    case 'datetime':
      return `${instance.format('dddd, MMMM D')} at ${instance.format(
        'h:mmA'
      )}`;

    case 'fromNow':
      return instance.fromNow();

    case 'short':
      return `${instance.format('ddd, MMM D')} ${instance.format('h:mmA')}`;

    case 'sql':
      return instance.format('YYYY-MM-DD HH:mm:ss');

    default:
      return instance.format(format);
  }
}

export default timestamp;
