import type { Currency } from '@dinero.js/core';

/**
 * Jordanian dinar.
 *
 * @public
 */
export const JOD: Currency<number> = {
  code: 'JOD',
  base: 10,
  exponent: 3,
};