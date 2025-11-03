import { Address, BigDecimal, BigInt } from '@graphprotocol/graph-ts'

export const FACTORY_ADDRESS = '0x87C772301B2054D47e2b12c4C3C402481158B7f2'

export const REFERENCE_TOKEN = '0x3B39685B5495359c892DDD1057B5712F49976835' // WETH
export const STABLE_TOKEN_POOL = '0x95e34b9A99C1b64F2E913B37e01608326B245B66' // USDC/WETH 0.01%

export const TVL_MULTIPLIER_THRESHOLD = '2'
export const MATURE_MARKET = '1000000'
export const MINIMUM_NATIVE_LOCKED = BigDecimal.fromString('1')

export const ROLL_DELETE_HOUR = 768
export const ROLL_DELETE_MINUTE = 1680

export const ROLL_DELETE_HOUR_LIMITER = BigInt.fromI32(500)
export const ROLL_DELETE_MINUTE_LIMITER = BigInt.fromI32(1000)

// token where amounts should contribute to tracked volume and liquidity
// usually tokens that many tokens are paired with s
export const WHITELIST_TOKENS: string[] = [
  REFERENCE_TOKEN, // WETH
  '0x18d5bB147f3D05D5f6c5E60Caf1daeeDBF5155B6', // USDC
  '0xeb4e8Eb83d6FFBa2ce0d8F62ACe60648d1ECE116', // USDT
]

export const STABLE_COINS: string[] = [
  '0x18d5bB147f3D05D5f6c5E60Caf1daeeDBF5155B6', // USDC
  '0xeb4e8Eb83d6FFBa2ce0d8F62ACe60648d1ECE116', // USDT
]

export const SKIP_POOLS: string[] = []

export const POOL_MAPINGS: Array<Address[]> = []

export class TokenDefinition {
  address: Address
  symbol: string
  name: string
  decimals: BigInt
}

export const STATIC_TOKEN_DEFINITIONS: TokenDefinition[] = []
