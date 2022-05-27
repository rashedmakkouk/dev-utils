/** Utilities */
import path from 'path';
import isArray from 'lodash/isArray';

/** Typings */
import { JoinPathOptions } from '../types';

/**
 * Joins list of absolute and relative paths as a string.
 */
function joinPath(
  segments: string[] = [],
  options: JoinPathOptions = {}
): string {
  if (!segments || !isArray(segments) || !segments.length) {
    return '';
  }

  const { resolve } = options;

  let fn: 'join' | 'resolve';

  if (resolve) {
    fn = 'resolve';
  } else {
    fn = 'join';
  }

  return path[fn](...segments).replace(/\\/g, '/');
}

export default joinPath;
