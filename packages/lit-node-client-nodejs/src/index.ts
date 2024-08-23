import 'cross-fetch/dist/node-polyfill.js';

import * as _LitNodeClientNodeJs from './lib/lit-node-client-nodejs';
// ==================== Environment ====================

declare global {
  // This `declare global` hackery _must_ use var to work.
  // eslint-disable-next-line no-var, @typescript-eslint/no-explicit-any
  var LitNodeClientNodeJs: any;
}

const LitNodeClientNodeJs = _LitNodeClientNodeJs.LitNodeClientNodeJs;
if (!globalThis.LitNodeClientNodeJs) {
  globalThis.LitNodeClientNodeJs = LitNodeClientNodeJs;
}

// ==================== Exports ====================
export * from './lib/lit-node-client-nodejs';

export {
  hashResourceIdForSigning,
  humanizeAccessControlConditions,
} from '@lit-protocol/access-control-conditions';

export {
  base64StringToBlob,
  blobToBase64String,
} from '@lit-protocol/misc-browser';

export {
  uint8arrayFromString,
  uint8arrayToString,
} from '@lit-protocol/uint8arrays';
