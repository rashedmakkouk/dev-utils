import isArray from 'lodash/isArray';
import { NormalizedSchema, normalize as _normalize, schema } from 'normalizr';

/** Typings */
import { NormalizeSchemaOptions } from './utils';

/**
 * Normalizes db query results.
 *
 * Options:
 * options['idAttribute'] = 'username';
 *
 * @param key - Entity type to move records under (e.g. items).
 * @param payload - Data object or object array to manipulate.
 * @param options - Set custom column to use (e.g. idAttribute).
 *
 * @returns result object:
 * .entities: Normalized records per type.
 * .results: List of normalized entities' `attribute`.
 */
function normalize<
  KeyT extends string = string,
  EntityT extends any = any,
  PayloadT extends any | any[] = any[]
>(
  key: KeyT,
  payload: PayloadT,
  options?: NormalizeSchemaOptions
): NormalizedSchema<
  // FIX: `key: KeyT` An index signature parameter type must be either
  // 'string' or 'number'
  { [key: string]: { [attribute: string]: EntityT } | undefined },
  PayloadT extends any[] ? string[] : string
> {
  const resultsSchema = new schema.Entity(key, {}, options);

  return _normalize(
    payload,
    isArray(payload) ? [resultsSchema] : resultsSchema
  );
}

export default normalize;
