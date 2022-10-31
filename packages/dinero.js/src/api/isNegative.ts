import { isNegative as coreIsNegative } from '@bitmachina/dinero-core';
import type { IsNegativeParams } from '@bitmachina/dinero-core';

/**
 * Check whether a Dinero object is negative.
 *
 * @param dineroObject - The Dinero object to check.
 *
 * @returns Whether the Dinero object is negative.
 *
 * @public
 */
export function isNegative<TAmount>(
  ...[dineroObject]: IsNegativeParams<TAmount>
) {
  const { calculator } = dineroObject;
  const isNegativeFn = coreIsNegative(calculator);

  return isNegativeFn(dineroObject);
}
