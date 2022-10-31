import { safeMinimum } from '@bitmachina/dinero-core';
import type { MinimumParams } from '@bitmachina/dinero-core';

/**
 * Get the lowest of the passed Dinero objects.
 *
 * @param dineroObjects - The Dinero objects to minimum.
 *
 * @returns A new Dinero object.
 *
 * @public
 */
export function minimum<TAmount>(...[dineroObjects]: MinimumParams<TAmount>) {
  const { calculator } = dineroObjects[0];
  const minimumFn = safeMinimum(calculator);

  return minimumFn(dineroObjects);
}
