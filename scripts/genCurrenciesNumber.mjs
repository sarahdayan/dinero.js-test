import path from 'path';
import * as url from 'url';

import { genCurrencies } from './genCurrencies.mjs';

// eslint-disable-next-line functional/no-expression-statement
genCurrencies(
  path.resolve(
    url.fileURLToPath(new URL('.', import.meta.url)), // __dirname es module style
    '../packages/currencies/src/iso4217/amendments/168'
  ),
  ({ base, code, description, exponent }) =>
    `
      import type { Currency } from '../../../types';

      /**
       * ${description}.
       *
       * @public
       */
      export const ${code}: Currency<number> = {
        code: '${code}',
        base: ${base},
        exponent: ${exponent},
      };
    `
);
