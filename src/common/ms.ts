/** Utilities */
import isNumber from 'lodash/isNumber';
import isString from 'lodash/isString';

/** Typings */
import { MsOptions, TimeSpans } from '../utils';

const dayInSeconds = 60 * 60 * 24;

/**
 * Time spans in seconds.
 *
 * {@link https://github.com/vercel/ms | vercel / ms}
 *
 * TODO: Add support for `long` formats (e.g. 2 days, 3 hours)
 */
export const TIME_SPANS: { [timePeriod in TimeSpans]: number } = {
  d: 1 * dayInSeconds,
  h: 1 * 60 * 60,
  m: 1 * 60,
  ms: 1 / 1000,
  s: 1,
  w: 7 * dayInSeconds,
  y: 365 * dayInSeconds,
};

/**
 * Parses a number representation of a string time period (e.g. 1h, 2d).
 *
 * @remarks
 * If supplied `span` is a `number` or a string representation of a
 * `number`, value is returned as is bypassing conversion to `s` or
 * `ms`.
 */
function ms(span: string | number, options: MsOptions = {}): number {
  try {
    const { long } = options;

    if (!span) {
      return 0;
    } else if (isString(span)) {
      const parsedSpan = parseInt(span);

      if (!Number.isNaN(parsedSpan)) {
        return parsedSpan;
      } else {
        /** Splits time value to `count` and `spanFormat` (e.g. '1h', '15m'). */
        const [count, spanFormat] = span
          .split(/(\d+)/)
          .filter((value): boolean => !!value);

        return parseInt(count) * TIME_SPANS[spanFormat] * 1000;
      }
    } else if (isNumber(span)) {
      return span;
    } else {
      return 0;
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
