/** Utilities */
import moment from 'moment';

/** Typings */
import { TimestampOptions } from '../types';

/**
 * Parses a timestamp string from date with specified format.
 */
function timestamp(
  date: string | number | Date = Date.now(),
  { format, timezoneOffest }: TimestampOptions = { format: 'DD/MM/YYYY' }
): string {
  const instance = moment(date);

  let nextFormat: string | undefined = format;

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
      nextFormat = 'YYYY-MM-DD HH:mm:ss';
      break;
  }

  return instance.format(nextFormat);
}

export default timestamp;
