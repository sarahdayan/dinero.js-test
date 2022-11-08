/**
 * @typedef Currency
 * @type {object}
 * @property {number} base
 * @property {string} code
 * @property {string} description
 * @property {number} exponent
 */

import fs from 'fs';
import path from 'path';
import * as url from 'url';

/**
 * Load the currency data array.
 *
 * @returns {Array<Currency>} - Returns a array of currency data objects.
 */
export async function getCurrencies() {
  const raw = await fs.promises.readFile(
    path.resolve(
      url.fileURLToPath(new URL('.', import.meta.url)), // __dirname es module style
      '../data/iso4217/amendments/168.json'
    )
  );
  return JSON.parse(raw);
}
