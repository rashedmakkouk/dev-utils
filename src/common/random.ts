/** Utilities */
import { v4 as uuid } from 'uuid';
import moment from 'moment';

/** Typings */
import { RandomOptions, RandomTypes } from '../types';

function random<ResultT extends string | number>(
  type: RandomTypes,
  options: RandomOptions = {}
): ResultT {
  const { prefix } = options;
  let { max = 9024000, min = 1024000 } = options;

  let value: string | number;

  switch (type) {
    case 'filename':
      value = `${(Date.now() / 1000).toString().replace('.', '')}-${uuid()}`;

      return (!prefix ? value : `${prefix}-${value}`) as ResultT;

    case 'title':
      // TODO: Add short `uuid`.
      value = moment().format('YYYY-MM-DD_HH-mm-ss');

      return (!prefix ? value : `${prefix}_${value}`) as ResultT;

    case 'temp':
      return `${moment().format('YYYY-MM-DD_HH-mm-ss')}_${uuid()}` as ResultT;

    case 'uuid':
      return uuid() as ResultT;

    case 'integer':
    case 'key':
      min = Math.ceil(min);
      max = Math.floor(max);

      value = Math.floor(Math.random() * (max - min)) + min;

      return (type === 'integer' ? value : value.toString()) as ResultT;
  }
}

export default random;
