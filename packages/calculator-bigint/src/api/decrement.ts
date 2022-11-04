import type { UnaryOperation } from '@pesos/core';

/**
 * Returns an decremented bigint.
 *
 * @param value - The bigint to decrement.
 *
 * @returns The decremented bigint.
 */
export const decrement: UnaryOperation<bigint> = (value) => {
  return value - 1n;
};
