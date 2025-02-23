/**
 * A string of ASCII characters.
 *
 * @since 1.0.0
 */
import { pipe } from 'fp-ts/function'
import { Branded } from 'schemata-ts/brand'
import * as PB from 'schemata-ts/PatternBuilder'
import { make, SchemaExt } from 'schemata-ts/SchemaExt'

interface AsciiBrand {
  readonly Ascii: unique symbol
}

/**
 * A string of ASCII characters.
 *
 * @since 1.0.0
 * @category Model
 */
export type Ascii = Branded<string, AsciiBrand>

/**
 * @since 1.0.0
 * @category Model
 */
export type AsciiS = SchemaExt<string, Ascii>

/**
 * @since 1.0.0
 * @category Pattern
 */
export const ascii: PB.Pattern = pipe(
  PB.characterClass(false, [0x00, 0x7f]),
  PB.atLeastOne(),
)

/**
 * A string of ASCII characters.
 *
 * @since 1.0.0
 * @category Schema
 */
export const Ascii: AsciiS = make(s => s.brand<AsciiBrand>()(s.pattern(ascii, 'Ascii')))
