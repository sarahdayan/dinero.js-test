/* eslint-disable functional/no-mixed-type, functional/no-return-void, functional/no-expression-statement */
import type { Calculator, Dinero, DineroOptions, Formatter } from '../types';

export type CreateDineroOptions<TAmount> = {
  readonly calculator: Calculator<TAmount>;
  readonly formatter?: Formatter<TAmount>;
  readonly onCreate?: (options: DineroOptions<TAmount>) => void;
};

/**
 * @internal
 */
export function createDinero<TAmount>({
  calculator,
  onCreate,
  formatter = {
    toNumber: Number,
    toString: String,
  },
}: CreateDineroOptions<TAmount>) {
  return function dinero({
    amount,
    currency,
    scale = currency.exponent,
  }: DineroOptions<TAmount>): Dinero<TAmount> {
    onCreate?.({ amount, currency, scale });

    return {
      calculator,
      formatter,
      create: dinero,
      toJSON() {
        return {
          amount,
          currency,
          scale,
        };
      },
    };
  };
}
