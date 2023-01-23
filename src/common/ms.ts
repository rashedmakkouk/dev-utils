/** Utilities */
import isString from 'lodash/isString';

/** Typings */
import { MsOptions, TimeSpans } from '../types';

const dayInSeconds = 60 * 60 * 24;

/**
 * Time spans in seconds.
 */
export const TIME_SPANS: { [timePeriod in TimeSpans]: number } = {
  /* eslint-disable sort-keys */
  ms: 1 / 1000,
  s: 1,
  m: 1 * 60,
  h: 1 * 60 * 60,
  d: 1 * dayInSeconds,
  w: 7 * dayInSeconds,
  y: 365 * dayInSeconds,
};

// TODO: Refactor 'ms' implementation; Issue #2.

/**
 * Parses a number representation or a string time period (e.g. 1h, 2d) to Unix
 * Timestamp.
 *
 * - ms: millisecond.
 * - s: second.
 * - h: hour.
 * - d: day.
 * - w: week.
 * - m: month.
 * - y: year.
 *
 * @remarks
 * If supplied 'span' is a number or a string representation of a number, value
 * is returned as is bypassing conversion.
 *
 * @returns Time representation in milliseconds, else parses value as integer.
 */
function ms(span: string | number, options: MsOptions = {}): number {
  try {
    const { long } = options;

    if (!span) {
      return 0;
    } else if (isString(span) && isNaN(Number(span))) {
      /** Splits time value to `count` and `spanFormat` (e.g. '1h', '15m'). */
      const [count, spanFormat] = span
        .split(/(\d+)/)
        .filter((value): boolean => !!value);

      const timeSpan = TIME_SPANS[spanFormat as keyof typeof TIME_SPANS];

      if (!timeSpan) {
        throw Error('Unsupported time span.');
      }

      return parseInt(count, 10) * timeSpan * 1000;
    } else {
      return parseInt(isString(span) ? span : `${span}`, 10);
    }
  } catch (error) {
    /**
     * - Invalid argument.
     * - Exception thrown.
     */
    return 0;
  }
}

export default ms;
