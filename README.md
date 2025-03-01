<div align="center">
<h1>Lit Protocol Javascript/Typescript SDK V7.x.x</h1>

<img src="https://i.ibb.co/p2xfzK1/Screenshot-2022-11-15-at-09-56-57.png">
<br/>
<a href="https://twitter.com/LitProtocol"><img src="https://img.shields.io/twitter/follow/litprotocol?label=Follow&style=social"/></a>
<br/>
<br/>
The Lit JavaScript SDK provides developers with a framework for implementing Lit functionality into their own applications. Find installation instructions in the docs to get started with the Lit SDK based on your use case:
<br/>
<br/>

<a href="https://developer.litprotocol.com/v3/sdk/installation"><img src="https://i.ibb.co/fDqdXLq/button-go-to-docs.png" /></a>

<a href="https://developer.litprotocol.com/v3/sdk/installation">
https://developer.litprotocol.com/SDK/Explanation/installation
</a>

</div>

<div align="left">

# Quick Start

### NodeJS Exclusive

Removed browser-specific methods, e.g., checkAndSignAuthSig

```
yarn add @lit-protocol/lit-node-client-nodejs
```

or..

### Isomorphic Implementation

Operable in both Node.js and the browser

```
yarn add @lit-protocol/lit-node-client
```

</div>

<div align="center">

# Packages

📝 If you're looking to use the Lit SDK, you're probably all set with just the lit-node-client <link>. <br/>Get started with interacting with Lit network!

<!-- autogen:package:start -->

| Package                                                                                                                    | Category                                                                                        | Download                                                                                                                                                                        |
| -------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [@lit-protocol/lit-node-client-nodejs](https://github.com/LIT-Protocol/js-sdk/tree/master/packages/lit-node-client-nodejs) | ![lit-node-client-nodejs](https://img.shields.io/badge/-nodejs-2E8B57 'lit-node-client-nodejs') | <a target="_blank" href="https://www.npmjs.com/package/@lit-protocol/lit-node-client-nodejs"><img src="https://img.shields.io/npm/v/@lit-protocol/lit-node-client-nodejs"/></a> |
| [@lit-protocol/lit-node-client](https://github.com/LIT-Protocol/js-sdk/tree/master/packages/lit-node-client)               | ![lit-node-client](https://img.shields.io/badge/-universal-8A6496 'lit-node-client')            | <a target="_blank" href="https://www.npmjs.com/package/@lit-protocol/lit-node-client"><img src="https://img.shields.io/npm/v/@lit-protocol/lit-node-client"/></a>               |

If you're a tech-savvy user and wish to utilize only specific submodules that our main module relies upon, you can find individual packages listed below. This way, you can import only the necessary packages that cater to your specific use case::

| Package                                                                                                                          | Category                                                                                                 | Download                                                                                                                                                                              |
| -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [@lit-protocol/access-control-conditions](https://github.com/LIT-Protocol/js-sdk/tree/master/packages/access-control-conditions) | ![access-control-conditions](https://img.shields.io/badge/-universal-8A6496 'access-control-conditions') | <a target="_blank" href="https://www.npmjs.com/package/@lit-protocol/access-control-conditions"><img src="https://img.shields.io/npm/v/@lit-protocol/access-control-conditions"/></a> |
| [@lit-protocol/auth-helpers](https://github.com/LIT-Protocol/js-sdk/tree/master/packages/auth-helpers)                           | ![auth-helpers](https://img.shields.io/badge/-universal-8A6496 'auth-helpers')                           | <a target="_blank" href="https://www.npmjs.com/package/@lit-protocol/auth-helpers"><img src="https://img.shields.io/npm/v/@lit-protocol/auth-helpers"/></a>                           |
| [@lit-protocol/constants](https://github.com/LIT-Protocol/js-sdk/tree/master/packages/constants)                                 | ![constants](https://img.shields.io/badge/-universal-8A6496 'constants')                                 | <a target="_blank" href="https://www.npmjs.com/package/@lit-protocol/constants"><img src="https://img.shields.io/npm/v/@lit-protocol/constants"/></a>                                 |
| [@lit-protocol/contracts-sdk](https://github.com/LIT-Protocol/js-sdk/tree/master/packages/contracts-sdk)                         | ![contracts-sdk](https://img.shields.io/badge/-universal-8A6496 'contracts-sdk')                         | <a target="_blank" href="https://www.npmjs.com/package/@lit-protocol/contracts-sdk"><img src="https://img.shields.io/npm/v/@lit-protocol/contracts-sdk"/></a>                         |
| [@lit-protocol/core](https://github.com/LIT-Protocol/js-sdk/tree/master/packages/core)                                           | ![core](https://img.shields.io/badge/-universal-8A6496 'core')                                           | <a target="_blank" href="https://www.npmjs.com/package/@lit-protocol/core"><img src="https://img.shields.io/npm/v/@lit-protocol/core"/></a>                                           |
| [@lit-protocol/crypto](https://github.com/LIT-Protocol/js-sdk/tree/master/packages/crypto)                                       | ![crypto](https://img.shields.io/badge/-universal-8A6496 'crypto')                                       | <a target="_blank" href="https://www.npmjs.com/package/@lit-protocol/crypto"><img src="https://img.shields.io/npm/v/@lit-protocol/crypto"/></a>                                       |
| [@lit-protocol/encryption](https://github.com/LIT-Protocol/js-sdk/tree/master/packages/encryption)                               | ![encryption](https://img.shields.io/badge/-universal-8A6496 'encryption')                               | <a target="_blank" href="https://www.npmjs.com/package/@lit-protocol/encryption"><img src="https://img.shields.io/npm/v/@lit-protocol/encryption"/></a>                               |
| [@lit-protocol/event-listener](https://github.com/LIT-Protocol/js-sdk/tree/master/packages/event-listener)                       | ![event-listener](https://img.shields.io/badge/-universal-8A6496 'event-listener')                       | <a target="_blank" href="https://www.npmjs.com/package/@lit-protocol/event-listener"><img src="https://img.shields.io/npm/v/@lit-protocol/event-listener"/></a>                       |
| [@lit-protocol/logger](https://github.com/LIT-Protocol/js-sdk/tree/master/packages/logger)                                       | ![logger](https://img.shields.io/badge/-universal-8A6496 'logger')                                       | <a target="_blank" href="https://www.npmjs.com/package/@lit-protocol/logger"><img src="https://img.shields.io/npm/v/@lit-protocol/logger"/></a>                                       |
| [@lit-protocol/misc](https://github.com/LIT-Protocol/js-sdk/tree/master/packages/misc)                                           | ![misc](https://img.shields.io/badge/-universal-8A6496 'misc')                                           | <a target="_blank" href="https://www.npmjs.com/package/@lit-protocol/misc"><img src="https://img.shields.io/npm/v/@lit-protocol/misc"/></a>                                           |
| [@lit-protocol/nacl](https://github.com/LIT-Protocol/js-sdk/tree/master/packages/nacl)                                           | ![nacl](https://img.shields.io/badge/-universal-8A6496 'nacl')                                           | <a target="_blank" href="https://www.npmjs.com/package/@lit-protocol/nacl"><img src="https://img.shields.io/npm/v/@lit-protocol/nacl"/></a>                                           |
| [@lit-protocol/pkp-base](https://github.com/LIT-Protocol/js-sdk/tree/master/packages/pkp-base)                                   | ![pkp-base](https://img.shields.io/badge/-universal-8A6496 'pkp-base')                                   | <a target="_blank" href="https://www.npmjs.com/package/@lit-protocol/pkp-base"><img src="https://img.shields.io/npm/v/@lit-protocol/pkp-base"/></a>                                   |
| [@lit-protocol/pkp-cosmos](https://github.com/LIT-Protocol/js-sdk/tree/master/packages/pkp-cosmos)                               | ![pkp-cosmos](https://img.shields.io/badge/-universal-8A6496 'pkp-cosmos')                               | <a target="_blank" href="https://www.npmjs.com/package/@lit-protocol/pkp-cosmos"><img src="https://img.shields.io/npm/v/@lit-protocol/pkp-cosmos"/></a>                               |
| [@lit-protocol/pkp-ethers](https://github.com/LIT-Protocol/js-sdk/tree/master/packages/pkp-ethers)                               | ![pkp-ethers](https://img.shields.io/badge/-universal-8A6496 'pkp-ethers')                               | <a target="_blank" href="https://www.npmjs.com/package/@lit-protocol/pkp-ethers"><img src="https://img.shields.io/npm/v/@lit-protocol/pkp-ethers"/></a>                               |
| [@lit-protocol/pkp-sui](https://github.com/LIT-Protocol/js-sdk/tree/master/packages/pkp-sui)                                     | ![pkp-sui](https://img.shields.io/badge/-universal-8A6496 'pkp-sui')                                     | <a target="_blank" href="https://www.npmjs.com/package/@lit-protocol/pkp-sui"><img src="https://img.shields.io/npm/v/@lit-protocol/pkp-sui"/></a>                                     |
| [@lit-protocol/pkp-walletconnect](https://github.com/LIT-Protocol/js-sdk/tree/master/packages/pkp-walletconnect)                 | ![pkp-walletconnect](https://img.shields.io/badge/-universal-8A6496 'pkp-walletconnect')                 | <a target="_blank" href="https://www.npmjs.com/package/@lit-protocol/pkp-walletconnect"><img src="https://img.shields.io/npm/v/@lit-protocol/pkp-walletconnect"/></a>                 |
| [@lit-protocol/types](https://github.com/LIT-Protocol/js-sdk/tree/master/packages/types)                                         | ![types](https://img.shields.io/badge/-universal-8A6496 'types')                                         | <a target="_blank" href="https://www.npmjs.com/package/@lit-protocol/types"><img src="https://img.shields.io/npm/v/@lit-protocol/types"/></a>                                         |
| [@lit-protocol/uint8arrays](https://github.com/LIT-Protocol/js-sdk/tree/master/packages/uint8arrays)                             | ![uint8arrays](https://img.shields.io/badge/-universal-8A6496 'uint8arrays')                             | <a target="_blank" href="https://www.npmjs.com/package/@lit-protocol/uint8arrays"><img src="https://img.shields.io/npm/v/@lit-protocol/uint8arrays"/></a>                             |
| [@lit-protocol/wasm](https://github.com/LIT-Protocol/js-sdk/tree/master/packages/wasm)                                           | ![wasm](https://img.shields.io/badge/-universal-8A6496 'wasm')                                           | <a target="_blank" href="https://www.npmjs.com/package/@lit-protocol/wasm"><img src="https://img.shields.io/npm/v/@lit-protocol/wasm"/></a>                                           |
| [@lit-protocol/wrapped-keys](https://github.com/LIT-Protocol/js-sdk/tree/master/packages/wrapped-keys)                           | ![wrapped-keys](https://img.shields.io/badge/-universal-8A6496 'wrapped-keys')                           | <a target="_blank" href="https://www.npmjs.com/package/@lit-protocol/wrapped-keys"><img src="https://img.shields.io/npm/v/@lit-protocol/wrapped-keys"/></a>                           |
| [@lit-protocol/wrapped-keys-lit-actions](https://github.com/LIT-Protocol/js-sdk/tree/master/packages/wrapped-keys-lit-actions)   | ![wrapped-keys-lit-actions](https://img.shields.io/badge/-universal-8A6496 'wrapped-keys-lit-actions')   | <a target="_blank" href="https://www.npmjs.com/package/@lit-protocol/wrapped-keys-lit-actions"><img src="https://img.shields.io/npm/v/@lit-protocol/wrapped-keys-lit-actions"/></a>   |
| [@lit-protocol/auth-browser](https://github.com/LIT-Protocol/js-sdk/tree/master/packages/auth-browser)                           | ![auth-browser](https://img.shields.io/badge/-browser-E98869 'auth-browser')                             | <a target="_blank" href="https://www.npmjs.com/package/@lit-protocol/auth-browser"><img src="https://img.shields.io/npm/v/@lit-protocol/auth-browser"/></a>                           |
| [@lit-protocol/misc-browser](https://github.com/LIT-Protocol/js-sdk/tree/master/packages/misc-browser)                           | ![misc-browser](https://img.shields.io/badge/-browser-E98869 'misc-browser')                             | <a target="_blank" href="https://www.npmjs.com/package/@lit-protocol/misc-browser"><img src="https://img.shields.io/npm/v/@lit-protocol/misc-browser"/></a>                           |

<!-- autogen:package:end -->

## API Doc

| Version      | Link                                                     |
| ------------ | -------------------------------------------------------- |
| V7 (Current) | [7.x.x docs](https://v7-api-doc-lit-js-sdk.vercel.app/)  |
| V6           | [6.x.x docs](https://v6-api-doc-lit-js-sdk.vercel.app/)  |
| V5           | [5.x.x docs](https://v3.api-docs.getlit.dev/)            |
| V2           | [2.x.x docs](http://docs.lit-js-sdk-v2.litprotocol.com/) |

</div>

# Contributing and developing to this SDK

## Prerequisite

- node (v19.x or above)
- rust (v1.70.00 or above)
- [wasm-pack](https://github.com/rustwasm/wasm-pack)

## Recommended

- NX Console: https://nx.dev/core-features/integrate-with-editors

# Quick Start

The following commands will help you start developing with this repository.

First, install the dependencies via yarn:

```
yarn
```

## Building

You can build the project with the following commands:

```
// for local development - It stripped away operations that don't matter for local dev
yarn build:dev

// you should never need to use yarn build unless you want to test or publish it
yarn build
```

## Run unit tests

```
yarn test:unit
```

## Run E2E tests in nodejs

```
yarn test:local
```

# Advanced

## Creating a new library

`nx generate @nx/js:library`

## Building

```sh
yarn build
```

### Building target package

```sh
yarn nx run <project-name>:build
```

## Building Local Changes

During development you may wish to build your code changes in `packages/` in a client application to test the correctness of the functionality.

If you would like to establish a dependency between packages within this monorepo and an external client application that consumes these packages:

1. Run `npm link` at the root of the specific package you are making code changes in.

```
cd ./packages/*/<package-name>
npm link
```

2. Build the packages with or without dependencies

```
yarn build
# or
yarn nx run lit-node-client-nodejs:build --with-deps=false
```

3. In the client application, run `npm link <package> --save` to ensure that the `package.json` of the client application is updated with a `file:` link to the dependency. This effectively creates a symlink in the `node_modules` of the client application to the local dependency in this repository.

```
cd path/to/client-application
npm link <package> --save
```

Having done this setup, this is what the development cycle looks like moving forward:

1. Make code change
2. Rebuild specific package
3. Rebuild client application.

### Building changes to Rust source

If changes are made to `packages/wasm` see [here](./packages/wasm/README.md) for info on building from source.

## Publishing

You must have at least nodejs v18 to do this.

1. Install the latest packages with `yarn install`

2. Run `yarn bump` to bump the version

3. Build all the packages with `yarn build`

4. Run the unit tests with `yarn test:unit` & e2e node tests `yarn test:local` locally & ensure that they pass

5. Update the docs with `yarn gen:docs --push`

6. Finally, publish with `yarn publish:packages`

7. Commit these changes "Published version X.X.X"

## Testing

### Quick Start on E2E Testing

The following will serve the react testing app and launch the cypress e2e testing after

```sh
yarn test:local
```

### Unit Tests

```sh
yarn test:unit
```

## Testing with a Local Lit Node

First, deploy your Lit Node Contracts, since the correct addresses will be pulled from the `../lit-assets/blockchain/contracts/deployed-lit-node-contracts-temp.json` file.

Set these two env vars:

```sh
export LIT_JS_SDK_LOCAL_NODE_DEV="true"
export LIT_JS_SDK_FUNDED_WALLET_PRIVATE_KEY="putAFundedPrivateKeyOnChronicleHere"
```

Run:

```sh
yarn update:contracts-sdk --fetch
yarn update:contracts-sdk --gen
yarn build:packages
```

To run manual tests:

```sh
 yarn nx run nodejs:serve
```

## ENV Vars

| Variable | Description |
| -------- | ----------- |
| LIT_JS_SDK_GITHUB_ACCESS_TOKEN | A GitHub access token to get the contract ABIs from a private repo |
| LIT_JS_SDK_LOCAL_NODE_DEV | Set to true to use a local node |
| LIT_JS_SDK_FUNDED_WALLET_PRIVATE_KEY | Set to a funded wallet on Chronicle Testnet |

# Error Handling

This SDK uses custom error classes derived from [@openagenda/verror](https://github.com/OpenAgenda/verror) to handle errors between packages and to the SDK consumers.
Normal error handling is also supported as VError extends the native Error class, but using VError allows for better error composition and information propagation.
You can check their documentation for the extra fields that are added to the error object and methods on how to handle them in a safe way.

## Example

```ts
import { VError } from '@openagenda/verror';
import { LitNodeClientBadConfigError } from '@lit-protocol/constants';

try {
  const someNativeError = new Error('some native error');

  throw new LitNodeClientBadConfigError(
    {
      cause: someNativeError,
      info: {
        foo: 'bar',
      },
      meta: {
        baz: 'qux',
      },
    },
    'some useful message'
  );
} catch (e) {
  console.log(e.name); // LitNodeClientBadConfigError
  console.log(e.message); // some useful message: some native error
  console.log(e.info); // { foo: 'bar' }
  console.log(e.baz); // qux
  // VError.cause(e) is someNativeError
  // VError.info(e) is { foo: 'bar' }
  // VError.meta(e) is { baz: 'qux', code: 'lit_node_client_bad_config_error', kind: 'Config' }
  // Verror.fullStack(e) is the full stack trace composed of the error chain including the causes
}
```

## Creating a new error

In file `packages/constants/src/lib/errors.ts` you can find the list of errors that are currently supported and add new ones if needed.

To create and use a new error, you need to:

1. Add the error information to the `LIT_ERROR` object in `packages/constants/src/lib/errors.ts`
2. Export the error from the `errors.ts` file at the end of the file
3. Import the error where you need it
4. Throw the error in your code adding all the information a user might need to know about the error such as the cause, the info, etc.

# Dockerfile

...coming soon

## Other Commands

### Interactive graph dependencies using NX

```
yarn graph
```

![](https://i.ibb.co/2dLyMTW/Screenshot-2022-11-15-at-15-18-46.png)

# FAQs & Common Errors

<details>
<summary>(React) Failed to parse source map from</summary>

In your React package.json, add `GENERATE_SOURCEMAP=false` to your start script

eg.

```
  "scripts": {
    "start": "GENERATE_SOURCEMAP=false react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  },
```

</details>

<details>
<summary>Reference Error: crypto is not defined</summary>

```js
import crypto, { createHash } from 'crypto';
Object.defineProperty(globalThis, 'crypto', {
  value: {
    getRandomValues: (arr: any) => crypto.randomBytes(arr.length),
    subtle: {
      digest: (algorithm: string, data: Uint8Array) => {
        return new Promise((resolve, reject) =>
          resolve(
            createHash(algorithm.toLowerCase().replace('-', ''))
              .update(data)
              .digest()
          )
        );
      },
    },
  },
});
```

</details>
<details>
<summary>error Command failed with exit code 13.</summary>

Make sure your node version is above v18.0.0

</details>

# Downloading Diffs in Codespace

To download diffs in Codespace, follow these steps:

1. Open your Codespace.
2. Navigate to the terminal.
3. Run the following command to download the diffs:

```sh
git diff > diffs.patch
```

4. Apply the patch using the following command:

```sh
git apply diffs.patch
```

# Setting Up the Environment

To set up the environment for development, follow these steps:

1. Clone the repository:

```sh
git clone https://github.com/LIT-Protocol/js-sdk.git
```

2. Navigate to the project directory:

```sh
cd js-sdk
```

3. Install the dependencies:

```sh
yarn install
```

4. Set up the environment variables:

Create a `.env` file in the root directory and add the following variables:

```sh
MAX_ATTEMPTS=1
NETWORK=datil-dev
DEBUG=true
WAIT_FOR_KEY_INTERVAL=3000
LIT_OFFICAL_RPC=https://chain-rpc.litprotocol.com/http
TIME_TO_RELEASE_KEY=10000
RUN_IN_BAND=true
RUN_IN_BAND_INTERVAL=5000
PRIVATE_KEYS="0x59c6995e998f97a5a0044966f0945389dc9e86dae88c7a8412f4603b6b78690d,0x5de4111afa1a4b94908f83103eb1f1706367c2e68ca870fc3fb9a804cdab365a,0x7c852118294e51e653712a81e05800f419141751be58f605c371e15141b007a6,0x47e179ec197488593b187f80a00eb0da91f1b9d0b13f8733639f19c30a34926a,0x8b3a350cf5c34c9194ca85829a2df0ec3153be0318b5e2d3348e872092edffba,0x92db14e403b83dfe3df233f83dfa3a0d7096f21ca9b0d6d6b8d88b2b4ec1564e,0x4bbbf85ce3377467afe5d46f804f221813b2bb87f24d81f60f1fcdbf7cbf4356,0xdbda1821b80551c9d65939329250298aa3472ba22feea921c0cf5d620ea67b97,0x2a871d0798f97d79848a013d4936a73bf4cc922c825d33c1cf7073dff6d409c6"
NO_SETUP=false
USE_SHIVA=false
NETWORK_CONFIG=./networkContext.json
TEST_TIMEOUT=45000
```

5. Build the project:

```sh
yarn build
```

6. Run the tests:

```sh
yarn test
```
