/**
 * The extended Schemable typeclass
 *
 * **Warning: DO NOT EDIT, this module is autogenerated**
 *
 * @since 0.0.1
 */
import { URIS, URIS2 } from 'fp-ts/HKT'
import { Schemable, Schemable1, Schemable2C } from 'io-ts/Schemable'

/** Number */
import * as Int from './number/Int'
import * as NegativeInt from './number/NegativeInt'
import * as PositiveInt from './number/PositiveInt'

/** String */
import * as ISODateString from './string/ISODateString'
import * as IntString from './string/IntString'
import * as NegativeIntString from './string/NegativeIntString'
import * as PositiveIntString from './string/PositiveIntString'
import * as UUID from './string/UUID'

/** Date */
import * as SafeDate from './date/SafeDate'

/**
 * @since 0.0.1
 * @category Instances
 */
export interface SchemableExt<S> extends Schemable<S> {
  readonly Int: Int.SchemableParams<S>
  readonly NegativeInt: NegativeInt.SchemableParams<S>
  readonly PositiveInt: PositiveInt.SchemableParams<S>
  readonly ISODateString: ISODateString.SchemableParams<S>
  readonly IntString: IntString.SchemableParams<S>
  readonly NegativeIntString: NegativeIntString.SchemableParams<S>
  readonly PositiveIntString: PositiveIntString.SchemableParams<S>
  readonly UUID: UUID.SchemableParams<S>
  readonly SafeDate: SafeDate.SchemableParams<S>
}

/**
 * @since 0.0.1
 * @category Instances
 */
export interface SchemableExt1<S extends URIS> extends Schemable1<S> {
  readonly Int: Int.SchemableParams1<S>
  readonly NegativeInt: NegativeInt.SchemableParams1<S>
  readonly PositiveInt: PositiveInt.SchemableParams1<S>
  readonly ISODateString: ISODateString.SchemableParams1<S>
  readonly IntString: IntString.SchemableParams1<S>
  readonly NegativeIntString: NegativeIntString.SchemableParams1<S>
  readonly PositiveIntString: PositiveIntString.SchemableParams1<S>
  readonly UUID: UUID.SchemableParams1<S>
  readonly SafeDate: SafeDate.SchemableParams1<S>
}

/**
 * @since 0.0.1
 * @category Instances
 */
export interface SchemableExt2C<S extends URIS2> extends Schemable2C<S, unknown> {
  readonly Int: Int.SchemableParams2C<S>
  readonly NegativeInt: NegativeInt.SchemableParams2C<S>
  readonly PositiveInt: PositiveInt.SchemableParams2C<S>
  readonly ISODateString: ISODateString.SchemableParams2C<S>
  readonly IntString: IntString.SchemableParams2C<S>
  readonly NegativeIntString: NegativeIntString.SchemableParams2C<S>
  readonly PositiveIntString: PositiveIntString.SchemableParams2C<S>
  readonly UUID: UUID.SchemableParams2C<S>
  readonly SafeDate: SafeDate.SchemableParams2C<S>
}
