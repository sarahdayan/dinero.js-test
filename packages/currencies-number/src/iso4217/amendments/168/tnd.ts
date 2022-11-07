import type { Currency } from '@dinero.js/core';

/**
 * Tunisian dinar.
 *
 * @public
 */
export const TND: Currency<number> = {
  code: 'TND',
  base: 10,
  exponent: 3,
};