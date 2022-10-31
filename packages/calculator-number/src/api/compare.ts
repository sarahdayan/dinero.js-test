import { ComparisonOperator } from '@bitmachina/dinero-core';
import type { BinaryOperation } from '@bitmachina/dinero-core';

/**
 * Compare two numbers.
 *
 * @param a - The first number to compare.
 * @param b - The second number to compare.
 *
 * @returns Whether the two numbers are equal, or whether the first one is greater or less than the other.
 */
export const compare: BinaryOperation<number, ComparisonOperator> = (a, b) => {
  if (a < b) {
    return ComparisonOperator.LT;
  }
  if (a > b) {
    return ComparisonOperator.GT;
  }
  return ComparisonOperator.EQ;
};
