import type { Currency } from '@dinero.js/core';

/**
 * United States dollar.
 *
 * @public
 */
export const USD: Currency<number> = {
  code: 'USD',
  base: 10,
  exponent: 2,
};