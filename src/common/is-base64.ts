/** Utilities */
import validateIsBase64 from 'validator/lib/isBase64';
import isPlainObject from 'lodash/isPlainObject';
import isString from 'lodash/isString';

/** Typings */
import { IsBase64Options } from '../types';

const MIME_REGEX = '(data:\\w+\\/[a-zA-Z\\+\\-\\.]+;base64)';

function isBase64(
  value?: string | null,
  options: IsBase64Options = {}
): boolean {
  if (!isString(value)) {
    return false;
  }

  if (!options || !isPlainObject(options)) {
    options = {};
  }

  const { allowEmpty, allowMime, mimeRequired, urlSafe } = options;

  if (!value) {
    return allowEmpty === true;
  }

  function validateMime(mime = ''): boolean {
    return new RegExp(`^${MIME_REGEX}$`, 'gi').test(mime);
  }

  function validateData(data = ''): boolean {
    return !data ? false : validateIsBase64(data, { urlSafe });
  }

  const [mime, data] = value.split(',');

  if (mimeRequired === true) {
    return validateMime(mime) && validateData(data);
  } else if (allowMime === true && validateMime(mime)) {
    return validateData(data);
  }

  return validateData(value);
}

export default isBase64;
