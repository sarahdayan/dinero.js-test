/* eslint-disable functional/no-expression-statement */

/**
 * @typedef {import('./getCurrencies.mjs').CurrencyData} CurrencyData
 *
 * @callback formatFn
 * @param {CurrencyData} currency - The currency data to transform into a source file.
 * @returns {string} - The generated currency source file.
 */

import { promises as fs } from 'fs';
import path from 'path';

// eslint-disable-next-line import/default
import prettier from 'prettier';

import currencies from './getCurrencies.mjs';

// prettier requires this to import into an es module without error.
// eslint-disable-next-line import/no-named-as-default-member
const { format, resolveConfig } = prettier;

const dirExists = (dirPath) =>
  fs
    .stat(dirPath)
    .then((stats) => stats.isDirectory())
    .catch(() => false);

/**
 * Generate a set of currency source files.
 *
 * @param {string} outputDir - The directory to output the source files into.
 * @param {formatFn} formatFn - The.
 * @returns {Promise<void>} - Returns a Promise that resolves when all the files are generated.
 */
export async function genCurrencies(outputDir, formatFn) {
  if (!(await dirExists(outputDir))) {
    await fs.mkdir(outputDir, { recursive: true });
  }

  const prettierOptions = {
    ...(await resolveConfig(process.cwd())),
    parser: 'babel',
  };

  // Generate Currency ts files
  const promises = currencies
    .map((currency) => ({
      moduleName: currency.code.toLowerCase(),
      moduleText: formatFn(currency),
    }))
    .map(({ moduleName, moduleText }) =>
      fs.writeFile(
        path.join(outputDir, `${moduleName}.ts`),
        format(moduleText, prettierOptions)
      )
    );

  // Generate index ts file
  const indexModuleText = currencies
    .sort((a, b) => a.code.localeCompare(b))
    .reduce(
      (acc, current) =>
        `${acc}export * from './${current.code.toLowerCase()}';\n`,
      ''
    );

  await fs.writeFile(
    path.join(outputDir, 'index.ts'),
    format(indexModuleText, prettierOptions)
  );

  await Promise.all(promises);
}
