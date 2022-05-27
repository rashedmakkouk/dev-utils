/** Utilities */
import { v4 as uuid } from 'uuid';
import moment from 'moment';

/** Typings */
import { RandomOptions, RandomTypes } from '../types';

/**
 * Generates a random string with customizable options.
 *
 * - filename: File names stored in databases.
 * - number: Number between defined min and max.
 * - title: Content or post random title.
 * - temp: File names stored in temporary or cache locations.
 * - uuid: v4
 */
function random<TypeT extends RandomTypes>(
  type: TypeT,
  options?: RandomOptions
): TypeT extends 'number' ? number : string;

function random(
  type: RandomTypes,
  options: RandomOptions = {}
): string | number {
  if (type === 'uuid') {
    return uuid();
  } else if (type === 'number') {
    let { max = 0, min = 1 } = options;

    min = Math.ceil(min);
    max = Math.floor(max);

    /* eslint-disable-next-line no-mixed-operators */
    return `${Math.floor(Math.random() * (max - min + 1) + min)}`;
  }

  const timestamp = moment().format('YYYY-MM-DD_HH-mm-ss');

  if (type === 'temp') {
    return `${timestamp}_${uuid()}`;
  } else {
    const { prefix, suffix } = options;

    const value: string[] = [];

    prefix && value.push(prefix);

    switch (type) {
      case 'filename':
        value.push(timestamp, uuid());
        break;

      case 'title':
        value.push(timestamp);
        break;

      default:
        return '';
    }

    suffix && value.push(suffix);

    return value.join('_');
  }
}

export default random;
