/** Utilities */
import isArray from 'lodash/isArray';
import path from 'path';

/** Typings */
import { JoinPathOptions } from '../types';

/**
 * Joins a list of absolute and relative paths as string.
 *
 * @returns Joined path string.
 */
function joinPath(
  segments: string[] = [],
  options: JoinPathOptions = {}
): string {
  if (!segments || !isArray(segments) || !segments.length) {
    return '';
  }

  const { resolve } = options;

  return path[!resolve ? 'join' : 'resolve'](...segments).replace(/\\/g, '/');
}

export default joinPath;
