# Quick Start

This submodule defines a PKPBase class, providing shared wallet functionality for PKP signers, responsible for managing public key compression, initializing and connecting to the LIT node, running LIT actions, and offering debug functions for logging and error handling.

| Method/Property                                                      | Description                                                                   |
| -------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| `compressPubKey(pubKey: string)`                                     | Compresses a provided public key                                              |
| `setUncompressPubKeyAndBuffer(prop: PKPBaseProp)`                    | Sets the uncompressed public key and its buffer representation                |
| `setCompressedPubKeyAndBuffer(prop: PKPBaseProp)`                    | Sets the compressed public key and its buffer representation                  |
| `setLitAction(prop: PKPBaseProp)`                                    | Sets the Lit action to be executed by the LitNode client                      |
| `setLitActionJsParams<CustomType extends T = T>(params: CustomType)` | Sets the value of the `litActionJsParams` property to the given params object |
| `createAndSetSessionSigs(sessionParams: GetSessionSigsProps)`        | Creates and sets the session sigs and their expiration                        |
| `init()`                                                             | Initializes the PKPBase instance by connecting to the LIT node                |
| `runLitAction(toSign: Uint8Array, sigName: string)`                  | Runs the specified Lit action with the given parameters                       |
| `ensureLitNodeClientReady()`                                         | Ensures that the LitNode client is ready for use                              |
| `log(...args: any[])`                                                | Logs the provided arguments to the console, but only if debugging is enabled  |

### node.js / browser

```
yarn add @lit-protocol/pkp-base
```

## Description

The `@lit-protocol/pkp-base` package provides a foundational class for managing PKP (Public Key Pair) signers. This class offers shared wallet functionality, including public key compression, initialization and connection to the LIT node, execution of LIT actions, and debugging capabilities.

## Installation

To install the `@lit-protocol/pkp-base` package, you can use either npm or yarn:

```bash
npm install @lit-protocol/pkp-base
```

or

```bash
yarn add @lit-protocol/pkp-base
```

## Usage

Here are some examples of how to use the `PKPBase` class provided by the `@lit-protocol/pkp-base` package:

### Compressing a Public Key

The `compressPubKey` method allows you to compress a provided public key.

```javascript
import { PKPBase } from '@lit-protocol/pkp-base';

const pkpBase = new PKPBase();
const compressedPubKey = pkpBase.compressPubKey('your-public-key');
console.log(compressedPubKey);
```

### Setting Uncompressed Public Key and Buffer

The `setUncompressPubKeyAndBuffer` method sets the uncompressed public key and its buffer representation.

```javascript
import { PKPBase } from '@lit-protocol/pkp-base';

const pkpBase = new PKPBase();
pkpBase.setUncompressPubKeyAndBuffer({ pubKey: 'your-public-key' });
```

### Initializing the PKPBase Instance

The `init` method initializes the PKPBase instance by connecting to the LIT node.

```javascript
import { PKPBase } from '@lit-protocol/pkp-base';

const pkpBase = new PKPBase();
await pkpBase.init();
```

### Running a LIT Action

The `runLitAction` method runs the specified LIT action with the given parameters.

```javascript
import { PKPBase } from '@lit-protocol/pkp-base';

const toSign = new Uint8Array([/* your data */]);
const sigName = 'your-signature-name';
await pkpBase.runLitAction(toSign, sigName);
```

## Contributing

We welcome contributions to the `@lit-protocol/pkp-base` package. If you have any ideas, suggestions, or bug reports, please open an issue or submit a pull request on the GitHub repository.

## License

The `@lit-protocol/pkp-base` package is licensed under the MIT License. See the [LICENSE](LICENSE) file for more information.

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
