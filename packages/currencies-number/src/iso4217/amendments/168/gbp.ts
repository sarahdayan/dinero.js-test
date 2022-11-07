import type { Currency } from '@dinero.js/core';

/**
 * Pound sterling.
 *
 * @public
 */
export const GBP: Currency<number> = {
  code: 'GBP',
  base: 10,
  exponent: 2,
};