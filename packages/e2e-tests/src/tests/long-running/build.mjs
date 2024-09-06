import fs from 'fs';
import * as path from 'path';

import * as esbuild from 'esbuild';
import { nodeExternalsPlugin } from 'esbuild-node-externals';

const TEST_DIR = 'packages/e2e-tests/src/tests/long-running';

/**
 * Builds the project using esbuild.
 * @returns {Promise<void>} A promise that resolves when the build is complete.
 */
export const build = async () => {
  await esbuild.build({
    entryPoints: [`${TEST_DIR}/test.mjs`],
    outfile: `./src/tests/long-running/build/test.mjs`,
    bundle: true,
    plugins: [
      nodeExternalsPlugin({
        allowList: [
          'ethers',
          '@lit-protocol/accs-schemas',
          '@lit-protocol/contracts',
          'crypto',
          'secp256k1',
        ],
      }),
    ],
    platform: 'node',
    target: 'esnext',
    format: 'esm',
    inject: [`${TEST_DIR}/shim.mjs`],
    mainFields: ['module', 'main'],
  });
};

/**
 * Inserts a polyfill at the beginning of a file.
 * The polyfill ensures that the global `fetch` function is available.
 * @returns {void}
 */
export const postBuildPolyfill = () => {
  try {
    const file = fs.readFileSync(
      `./src/tests/long-running/build/test.mjs`,
      'utf8'
    );
    const content = `import fetch from 'node-fetch';
try {
  if (!globalThis.fetch) {
    globalThis.fetch = fetch;
  }
} catch (error) {
  console.error('❌ Error in polyfill', error);
}
`;
    const newFile = content + file;
    fs.writeFileSync(`./src/tests/long-running/build/test.mjs`, newFile);
  } catch (e) {
    throw new Error(`Error in postBuildPolyfill: ${e}`);
  }
};

// Go!
(async () => {
  const start = Date.now();
  await build();
  postBuildPolyfill();
  console.log(`[build.mjs] 🚀 Build time: ${Date.now() - start}ms`);
})();
