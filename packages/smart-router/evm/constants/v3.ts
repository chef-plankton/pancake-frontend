import { ChainId } from '@pancakeswap/sdk'
import { Address } from 'viem'

// = 1 << 23 or 100000000000000000000000
export const V2_FEE_PATH_PLACEHOLDER = 8388608

export const MSG_SENDER = '0x0000000000000000000000000000000000000001'
export const ADDRESS_THIS = '0x0000000000000000000000000000000000000002'

export const MIXED_ROUTE_QUOTER_ADDRESSES = {
  [ChainId.CORE]: '0xb4837aaE46Bb25A6B5A5f54D5ae3431ABe76BD10',
} as const satisfies Record<ChainId, Address>

export const V3_QUOTER_ADDRESSES = {
  [ChainId.CORE]: '0x63c59D024776685986105982719a0b46875F9E5A',
} as const satisfies Record<ChainId, Address>