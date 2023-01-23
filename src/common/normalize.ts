/** Utilities */
import isArray from 'lodash/isArray';
import { normalize as _normalize, NormalizedSchema, schema } from 'normalizr';

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
 * @returns Result object:
 * - Object.entities: Normalized records by 'key'.
 * - Object.result: Array or single value of data 'idAttributes'.
 */
function normalize<
  KeyT extends string = string,
  EntityT = unknown,
  PayloadT extends unknown | unknown[] = unknown[]
>(
  key: KeyT,
  payload: PayloadT,
  options: NormalizeSchemaOptions = {}
): NormalizedSchema<
  { [key: string]: { [attribute: string]: EntityT } | undefined },
  PayloadT extends unknown[] ? string[] : string
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
