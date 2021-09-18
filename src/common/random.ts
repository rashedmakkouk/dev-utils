/** Utilities */
import { v4 as uuid } from 'uuid';
import moment from 'moment';

/** Typings */
import { RandomOptions, RandomTypes } from '../types';

function random(type: RandomTypes, options: RandomOptions = {}): string {
  let { max = 9024000, min = 1024000 } = options;

  if (type === 'uuid') {
    return uuid();
  } else if (type === 'number') {
    min = Math.ceil(min);
    max = Math.floor(max);

    return `${Math.floor(Math.random() * (max - min)) + min}`;
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
