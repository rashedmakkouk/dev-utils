/** Utilities */
import path from 'path';
import isArray from 'lodash/isArray';

/** Typings */
import { JoinPathOptions } from '../types';

/**
 * Joins list of absolute and relative paths as a string.
 */
function joinPath(parts: string[] = [], options: JoinPathOptions = {}): string {
  if (!parts || !isArray(parts) || !parts.length) {
    return '';
  }

  const { resolve } = options;

  let fn: 'join' | 'resolve';

  if (resolve) {
    fn = 'resolve';
  } else {
    fn = 'join';
  }

  return path[fn](
    ...parts.map((part): string => {
      return part || '';
    })
  ).replace(/\\/g, '/');
}

export default joinPath;
