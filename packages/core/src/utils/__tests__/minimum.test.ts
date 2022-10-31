import { compare } from '@bitmachina/dinero-calculator-number';
import { describe, it, expect } from 'vitest';

import { minimum } from '../minimum';

// @ts-expect-error
const minimumFn = minimum({ compare });

describe('minimum', () => {
  it('gets the lowest from positive numbers', () => {
    expect(minimumFn([5, 3, 2])).toBe(2);
  });
  it('gets the lowest from negative numbers', () => {
    expect(minimumFn([-5, -4, -2])).toBe(-5);
  });
  it('gets the lowest from floats', () => {
    expect(minimumFn([10.5, 2.5, 1.6])).toBe(1.6);
  });
  it('gets the lowest from numbers in scientific notation', () => {
    expect(minimumFn([4e5, 3e5, 2e5])).toBe(2e5);
  });
});
