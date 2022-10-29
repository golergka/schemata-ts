/**
 * SchemableExt instances for Encoder
 *
 * **Warning: DO NOT EDIT, this module is autogenerated**
 *
 * @since 0.0.3
 */
import * as Enc from './internal/EncoderBase'
import { SchemableExt2 } from './SchemableExt'

/** Generic */
import * as mapFromEntries from './generic/mapFromEntries'
import * as optionFromExclude from './generic/optionFromExclude'
import * as optionFromNullable from './generic/optionFromNullable'
import * as optionFromUndefined from './generic/optionFromUndefined'

/** Number */
import * as bigIntFromString from './number/bigIntFromString'
import * as float from './number/float'
import * as floatFromString from './number/floatFromString'
import * as int from './number/int'
import * as intFromString from './number/intFromString'

/** String */
import * as base64 from './string/base64'
import * as base64Url from './string/base64Url'
import * as creditCard from './string/creditCard'
import * as hslColor from './string/hslColor'
import * as isoDateString from './string/isoDateString'
import * as jwt from './string/jwt'
import * as latLong from './string/latLong'
import * as nonemptyString from './string/nonemptyString'
import * as rgb from './string/rgb'
import * as uuid from './string/uuid'

/** Date */
import * as safeDate from './date/safeDate'

/**
 * @since 0.0.1
 * @category Instances
 */
export const Schemable: SchemableExt2<Enc.URI> = {
  ...Enc.Schemable,
  ...Enc.WithBrand,
  ...Enc.WithPattern,
  ...Enc.WithRefine,
  ...Enc.WithUnknownContainers,
  mapFromEntries: mapFromEntries.Encoder,
  optionFromExclude: optionFromExclude.Encoder,
  optionFromNullable: optionFromNullable.Encoder,
  optionFromUndefined: optionFromUndefined.Encoder,
  bigIntFromString: bigIntFromString.Encoder,
  float: float.Encoder,
  floatFromString: floatFromString.Encoder,
  int: int.Encoder,
  intFromString: intFromString.Encoder,
  base64: base64.Encoder,
  base64Url: base64Url.Encoder,
  creditCard: creditCard.Encoder,
  hslColor: hslColor.Encoder,
  isoDateString: isoDateString.Encoder,
  jwt: jwt.Encoder,
  latLong: latLong.Encoder,
  nonemptyString: nonemptyString.Encoder,
  rgb: rgb.Encoder,
  uuid: uuid.Encoder,
  safeDate: safeDate.Encoder,
}
