import { calculator } from '@bitmachina/dinero-calculator-number';
import { describe, it, expect } from 'vitest';

import { getDivisors } from '../getDivisors';

const getDivisorsFn = getDivisors(calculator);

describe('#getDivisors', () => {
  it('returns the same divisor with one base', () => {
    expect(getDivisorsFn([100])).toEqual([100]);
  });
  it('recursively computes divisors with two bases', () => {
    expect(getDivisorsFn([20, 12])).toEqual([240, 12]);
  });
  it('recursively computes divisors with more than two bases', () => {
    expect(getDivisorsFn([20, 12, 7])).toEqual([1680, 84, 7]);
  });
});
