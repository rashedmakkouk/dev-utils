/** Utilities */
import path from 'path';
import isArray from 'lodash/isArray';

/** Typings */
import { JoinPathOptions } from '../types';

/**
 * Handles absolute and relative `path`s.
 *
 * @param parts - List of paths to concatenate.
 * @param options - Aditional options to apply to result path.
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
