import { Address, BigDecimal, BigInt } from '@graphprotocol/graph-ts'

export const FACTORY_ADDRESS = '0x826D713e30f0bF09Dd3219494A508E6B30327d4f'

export const REFERENCE_TOKEN = '0xa51894664a773981c6c112c43ce576f315d5b1b6' // WETH
export const STABLE_TOKEN_POOL = '0x77852ca7a18a67efc8c1b22da4ea13159fbbb5dc' // USDC/WETH 0.3%

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
  '0x07d83526730c7438048d55a4fc0b850e2aab6f0b', // USDC
  '0x2def195713cf4a606b49d07e520e22c17899a736', // USDT
  '0xa9d23408b9ba935c230493c40c73824df71a0975', // TAIKO
]

export const STABLE_COINS: string[] = [
  '0x07d83526730c7438048d55a4fc0b850e2aab6f0b', // USDC
  '0x2def195713cf4a606b49d07e520e22c17899a736', // USDT
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
