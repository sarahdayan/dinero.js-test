/* eslint-disable functional/no-expression-statement */
import path from 'path';
import * as url from 'url';

import { genCurrencies } from './genCurrencies.mjs';

/**
 * Script to generate Currency<number> source files.
 */
genCurrencies(
  // Output directory
  path.resolve(
    url.fileURLToPath(new URL('.', import.meta.url)), // __dirname es module style
    '../packages/currencies/src/iso4217/amendments/168'
  ),
  // Source format function
  ({ base, code, description, exponent }) =>
    `
      import type { Currency } from '../../../types';

      /**
       * ${description}.
       */
      export const ${code}: Currency<number> = {
        code: '${code}',
        base: ${base},
        exponent: ${exponent},
      };
    `
);
