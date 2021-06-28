import isString from 'lodash/isString';

function initials(text = ''): string {
  if (!text || !isString(text)) {
    return '';
  }

  const parts = text.split(/[\s._-|]+/).filter((part): boolean => !!part);

  if (!parts.length) {
    return '';
  }

  const first = parts[0].charAt(0);

  return parts.length === 1 ? first : `${first} ${parts[1].charAt(0)}`;
}

export default initials;
