import { safeAdd } from '@bitmachina/dinero-core';
import type { AddParams } from '@bitmachina/dinero-core';

/**
 * Add up the passed Dinero objects.
 *
 * @param augend - The Dinero object to add to.
 * @param addend - The Dinero object to add.
 *
 * @returns A new Dinero object.
 *
 * @public
 */
export function add<TAmount>(...[augend, addend]: AddParams<TAmount>) {
  const { calculator } = augend;
  const addFn = safeAdd(calculator);

  return addFn(augend, addend);
}
