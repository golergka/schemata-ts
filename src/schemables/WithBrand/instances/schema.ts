/**
 * Schemable for constructing a branded newtype
 *
 * @since 1.0.0
 */
import { Branded } from 'schemata-ts/brand'
import * as SC from 'schemata-ts/SchemaExt'

/**
 * @since 1.0.0
 * @category Combinators
 */
export const Schema =
  <B>() =>
  <O, A>(target: SC.SchemaExt<O, A>): SC.SchemaExt<O, Branded<A, B>> =>
    SC.make(_ => _.brand<B>()<O, A>(target(_)))
