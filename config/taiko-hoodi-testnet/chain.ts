import { Address, BigDecimal, BigInt } from '@graphprotocol/graph-ts'

export const FACTORY_ADDRESS = '0x87C772301B2054D47e2b12c4C3C402481158B7f2'

// token and pool addresses are case sensitive, use lowercase
export const REFERENCE_TOKEN = '0x3b39685b5495359c892ddd1057b5712f49976835' // WETH
export const STABLE_TOKEN_POOL = '0x95e34b9a99c1b64f2e913b37e01608326b245b66' // USDC/WETH 0.01%

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
  '0x18d5bb147f3d05d5f6c5e60caf1daeedbf5155b6', // USDC
  '0xeb4e8eb83d6ffba2ce0d8f62ace60648d1ece116', // USDT
]

export const STABLE_COINS: string[] = [
  '0x18d5bb147f3d05d5f6c5e60caf1daeedbf5155b6', // USDC
  '0xeb4e8eb83d6ffba2ce0d8f62ace60648d1ece116', // USDT
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
