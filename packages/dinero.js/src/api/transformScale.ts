import { transformScale as coreTransformScale } from '@pesos/core';
import type { TransformScaleParams } from '@pesos/core';

/**
 * Transform a Dinero object to a new scale.
 *
 * @param dineroObject - The Dinero object to transform.
 * @param newScale - The new scale.
 *
 * @returns A new Dinero object.
 */
export function transformScale<TAmount>(
  ...[dineroObject, newScale]: TransformScaleParams<TAmount>
) {
  const { calculator } = dineroObject;
  const transformScaleFn = coreTransformScale(calculator);

  return transformScaleFn(dineroObject, newScale);
}
