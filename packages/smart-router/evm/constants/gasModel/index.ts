import { ChainId, Token } from '@pancakeswap/sdk'
import { bscTokens } from '@pancakeswap/tokens'

export const usdGasTokensByChain: { [chainId in ChainId]?: Token[] } = {
  [ChainId.BSC]: [bscTokens.busd],
}

export const nativeWrappedTokenByChain: { [chainId in ChainId]?: Token } = {
  [ChainId.BSC]: bscTokens.wbnb,
}

export * from './v2'
export * from './v3'
export * from './stableSwap'