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
import * as Natural from './number/Natural'
import * as NegativeInt from './number/NegativeInt'
import * as NonNegativeFloat from './number/NonNegativeFloat'
import * as PositiveFloat from './number/PositiveFloat'
import * as PositiveInt from './number/PositiveInt'

/** String */
import * as ASCII from './string/ASCII'
import * as Base64 from './string/Base64'
import * as Base64Url from './string/Base64Url'
import * as BtcAddress from './string/BtcAddress'
import * as EmailAddress from './string/EmailAddress'
import * as ISODateString from './string/ISODateString'
import * as IntString from './string/IntString'
import * as NaturalString from './string/NaturalString'
import * as NegativeIntString from './string/NegativeIntString'
import * as NonNegativeFloatString from './string/NonNegativeFloatString'
import * as NonemptyString from './string/NonemptyString'
import * as PositiveFloatString from './string/PositiveFloatString'
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
  readonly Natural: Natural.SchemableParams<S>
  readonly NegativeInt: NegativeInt.SchemableParams<S>
  readonly NonNegativeFloat: NonNegativeFloat.SchemableParams<S>
  readonly PositiveFloat: PositiveFloat.SchemableParams<S>
  readonly PositiveInt: PositiveInt.SchemableParams<S>
  readonly ASCII: ASCII.SchemableParams<S>
  readonly Base64: Base64.SchemableParams<S>
  readonly Base64Url: Base64Url.SchemableParams<S>
  readonly BtcAddress: BtcAddress.SchemableParams<S>
  readonly EmailAddress: EmailAddress.SchemableParams<S>
  readonly ISODateString: ISODateString.SchemableParams<S>
  readonly IntString: IntString.SchemableParams<S>
  readonly NaturalString: NaturalString.SchemableParams<S>
  readonly NegativeIntString: NegativeIntString.SchemableParams<S>
  readonly NonNegativeFloatString: NonNegativeFloatString.SchemableParams<S>
  readonly NonemptyString: NonemptyString.SchemableParams<S>
  readonly PositiveFloatString: PositiveFloatString.SchemableParams<S>
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
  readonly Natural: Natural.SchemableParams1<S>
  readonly NegativeInt: NegativeInt.SchemableParams1<S>
  readonly NonNegativeFloat: NonNegativeFloat.SchemableParams1<S>
  readonly PositiveFloat: PositiveFloat.SchemableParams1<S>
  readonly PositiveInt: PositiveInt.SchemableParams1<S>
  readonly ASCII: ASCII.SchemableParams1<S>
  readonly Base64: Base64.SchemableParams1<S>
  readonly Base64Url: Base64Url.SchemableParams1<S>
  readonly BtcAddress: BtcAddress.SchemableParams1<S>
  readonly EmailAddress: EmailAddress.SchemableParams1<S>
  readonly ISODateString: ISODateString.SchemableParams1<S>
  readonly IntString: IntString.SchemableParams1<S>
  readonly NaturalString: NaturalString.SchemableParams1<S>
  readonly NegativeIntString: NegativeIntString.SchemableParams1<S>
  readonly NonNegativeFloatString: NonNegativeFloatString.SchemableParams1<S>
  readonly NonemptyString: NonemptyString.SchemableParams1<S>
  readonly PositiveFloatString: PositiveFloatString.SchemableParams1<S>
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
  readonly Natural: Natural.SchemableParams2C<S>
  readonly NegativeInt: NegativeInt.SchemableParams2C<S>
  readonly NonNegativeFloat: NonNegativeFloat.SchemableParams2C<S>
  readonly PositiveFloat: PositiveFloat.SchemableParams2C<S>
  readonly PositiveInt: PositiveInt.SchemableParams2C<S>
  readonly ASCII: ASCII.SchemableParams2C<S>
  readonly Base64: Base64.SchemableParams2C<S>
  readonly Base64Url: Base64Url.SchemableParams2C<S>
  readonly BtcAddress: BtcAddress.SchemableParams2C<S>
  readonly EmailAddress: EmailAddress.SchemableParams2C<S>
  readonly ISODateString: ISODateString.SchemableParams2C<S>
  readonly IntString: IntString.SchemableParams2C<S>
  readonly NaturalString: NaturalString.SchemableParams2C<S>
  readonly NegativeIntString: NegativeIntString.SchemableParams2C<S>
  readonly NonNegativeFloatString: NonNegativeFloatString.SchemableParams2C<S>
  readonly NonemptyString: NonemptyString.SchemableParams2C<S>
  readonly PositiveFloatString: PositiveFloatString.SchemableParams2C<S>
  readonly PositiveIntString: PositiveIntString.SchemableParams2C<S>
  readonly UUID: UUID.SchemableParams2C<S>
  readonly SafeDate: SafeDate.SchemableParams2C<S>
}
