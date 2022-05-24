/** Utilities */
import isArray from 'lodash/isArray';
import { NormalizedSchema, normalize as _normalize, schema } from 'normalizr';

/** Typings */
import { NormalizeSchemaOptions } from '../types';

/**
 * Normalizes payload by defined object attribute.
 *
 * Options:
 * options['idAttribute'] = 'id' // Object property to normalize based on.
 *
 * @param key - Entity type to move records under (e.g. posts).
 * @param payload - Data object or object array to manipulate.
 * @param options - Set custom column to use (e.g. idAttribute).
 *
 * @returns result object:
 * - entities.key: Normalized records by `key`.
 * - results: Array of normalized entities `attribute`s.
 */
function normalize<
  KeyT extends string = string,
  EntityT = any,
  PayloadT extends any | any[] = any[]
>(
  key: KeyT,
  payload: PayloadT,
  options: NormalizeSchemaOptions = {}
): NormalizedSchema<
  { [key: string]: { [attribute: string]: EntityT } | undefined },
  PayloadT extends any[] ? string[] : string
> {
  if (!options?.idAttribute) {
    options.idAttribute = 'id';
  }

  const resultsSchema = new schema.Entity(key, {}, options);

  return _normalize(
    payload,
    !isArray(payload) ? resultsSchema : [resultsSchema]
  );
}

export default normalize;
