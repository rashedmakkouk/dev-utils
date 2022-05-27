/** Utilities */
import validateIsBase64 from 'validator/lib/isBase64';
import isString from 'lodash/isString';

/** Typings */
import { IsBase64Options } from '../types';

const MIME_REGEX = '(data:\\w+\\/[a-zA-Z\\+\\-\\.]+;base64)';

/**
 * Validates if supplied mime type and/or base64 string are valid.
 */
function isBase64(
  value?: string | null,
  options: IsBase64Options = {}
): boolean {
  const { allowEmpty, allowMime, mimeRequired, urlSafe } = options;

  if (!value) {
    return allowEmpty === true;
  } else if (!isString(value)) {
    return false;
  }

  function validateMime(mime = ''): boolean {
    return new RegExp(`^${MIME_REGEX}$`, 'gi').test(mime);
  }

  function validateData(data = ''): boolean {
    return !data ? false : validateIsBase64(data, { urlSafe });
  }

  const [mime, data] = value.split(',');

  if (mimeRequired === true) {
    return !!mime && validateMime(mime) && validateData(data);
  } else if (mime) {
    return allowMime === true
      ? validateMime(mime) && validateData(data)
      : false;
  } else {
    return validateData(value);
  }
}

export default isBase64;
