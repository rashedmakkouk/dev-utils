/** Utilities */
import path from 'path';
import isArray from 'lodash/isArray';

/**
 * Join array of paths.
 *
 * @param uri - Root path.
 * @param paths - List of folders/subFolders.
 */
function joinPath(parts: string[] = []): string {
  if (!parts || !isArray(parts) || !parts.length) {
    return '';
  }

  return path
    .join(...parts.map((part): string => part || ''))
    .replace(/\\/g, '/');
}

export default joinPath;
