import { Address, BigDecimal, BigInt } from '@graphprotocol/graph-ts'

export const FACTORY_ADDRESS = '0x57888032d471D63eb00c165Bc71832ce19499415'

export const REFERENCE_TOKEN = '0xA51894664A773981C6C112C43ce576f315d5b1B6' // WETH
export const STABLE_TOKEN_POOL = '0x6c17C8DCfcd4DD02357803460ea04e1cfbC27875' // USDC/WETH 0.05%

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
  '0x07d83526730c7438048D55A4fc0b850e2aaB6f0b', // USDC
  '0x2DEF195713CF4a606B49D07E520e22C17899a736', // USDT
  '0xA9d23408b9bA935c230493c40C73824Df71A0975', // TAIKO
]

export const STABLE_COINS: string[] = [
  '0x07d83526730c7438048D55A4fc0b850e2aaB6f0b', // USDC
  '0x2DEF195713CF4a606B49D07E520e22C17899a736', // USDT
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
