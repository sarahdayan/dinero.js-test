import { transformScale as coreTransformScale } from '@bitmachina/dinero-core';
import type { TransformScaleParams } from '@bitmachina/dinero-core';

/**
 * Transform a Dinero object to a new scale.
 *
 * @param dineroObject - The Dinero object to transform.
 * @param newScale - The new scale.
 * @param divide - A custom divide function.
 *
 * @returns A new Dinero object.
 *
 * @public
 */
export function transformScale<TAmount>(
  ...[dineroObject, newScale, divide]: TransformScaleParams<TAmount>
) {
  const { calculator } = dineroObject;
  const transformScaleFn = coreTransformScale(calculator);

  return transformScaleFn(dineroObject, newScale, divide);
}
