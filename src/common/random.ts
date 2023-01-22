/** Utilities */
import isString from 'lodash/isString';
import moment from 'moment';
import { v4 as uuid } from 'uuid';

/** Typings */
import {
  RandomOptions,
  RandomOptionsNumber,
  RandomOptionsString,
  RandomResult,
  RandomTypes,
} from '../types';
import { toFixedRange } from '../utils';

/**
 * Generates a random string or number with customizable options.
 *
 * - filename: File names stored in databases.
 * - number: Number between defined min and max.
 * - temp: File names stored in temporary or cache locations.
 * - title: Content or post random title.
 * - uuid: v4
 *
 * @returns Generated string or number.
 */
function random<RandomTypeT extends RandomTypes>(
  type: RandomTypeT,
  options?: RandomOptions<RandomTypeT>
): RandomResult<RandomTypeT>;
function random(
  type: RandomTypes,
  options: RandomOptionsString | RandomOptionsNumber = {}
): string | number {
  const timeFormat = 'YYYY-MM-DD_HH-mm-ss';

  switch (type) {
    case 'uuid':
      return uuid();

    case 'number': {
      const {
        decimal = false,
        max = 1,
        min = 0,
        precision = 0,
      } = options as RandomOptionsNumber;

      const randomNumber = Math.random() * (max - min + min);

      if (decimal === false) {
        return Math.trunc(randomNumber);
      }

      return precision == null || !toFixedRange.includes(precision)
        ? randomNumber
        : Number(randomNumber.toFixed(precision));
    }

    case 'filename':
    case 'temp':
    case 'title': {
      const { prefix, suffix } = options as RandomOptionsString;

      const randomString: string[] = [];

      prefix && isString(prefix) && randomString.push(prefix);

      const timestamp = moment().format(timeFormat);

      if (type === 'title') {
        randomString.push(timestamp);
      } else {
        randomString.push(timestamp, uuid());
      }

      suffix && isString(suffix) && randomString.push(suffix);

      return randomString.join('_');
    }
  }
}

export default random;
