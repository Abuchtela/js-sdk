# Quick Start

This submodule provides encryption and decryption of contents (string, file, etc.) respectively using a symmetric key, with the encrypted content returned as a Blob and the symmetric key as a Uint8Array.

### node.js / browser

```
yarn add @lit-protocol/encryption
```

## Description

The `@lit-protocol/encryption` package provides functionalities for encrypting and decrypting various types of content, such as strings and files, using symmetric keys. The encrypted content is returned as a Blob, and the symmetric key is returned as a Uint8Array.

## Installation

To install the `@lit-protocol/encryption` package, you can use either npm or yarn:

```bash
npm install @lit-protocol/encryption
```

or

```bash
yarn add @lit-protocol/encryption
```

## Usage

Here are some examples of how to use the encryption and decryption functionalities provided by the `@lit-protocol/encryption` package:

### Encrypting a String

The `@lit-protocol/encryption` package provides functions for encrypting strings using a symmetric key.

```javascript
import { encryptString } from '@lit-protocol/encryption';

const content = 'Hello, world!';
const { encryptedContent, symmetricKey } = await encryptString(content);

console.log(encryptedContent); // Output: Blob containing the encrypted content
console.log(symmetricKey); // Output: Uint8Array containing the symmetric key
```

### Decrypting a String

The `@lit-protocol/encryption` package also provides functions for decrypting strings using a symmetric key.

```javascript
import { decryptString } from '@lit-protocol/encryption';

const decryptedContent = await decryptString(encryptedContent, symmetricKey);

console.log(decryptedContent); // Output: Hello, world!
```

### Encrypting a File

The `@lit-protocol/encryption` package provides functions for encrypting files using a symmetric key.

```javascript
import { encryptFile } from '@lit-protocol/encryption';

const file = new File(['Hello, world!'], 'hello.txt', { type: 'text/plain' });
const { encryptedContent, symmetricKey } = await encryptFile(file);

console.log(encryptedContent); // Output: Blob containing the encrypted content
console.log(symmetricKey); // Output: Uint8Array containing the symmetric key
```

### Decrypting a File

The `@lit-protocol/encryption` package also provides functions for decrypting files using a symmetric key.

```javascript
import { decryptFile } from '@lit-protocol/encryption';

const decryptedContent = await decryptFile(encryptedContent, symmetricKey);

console.log(decryptedContent); // Output: Blob containing the decrypted content
```

## Contributing

We welcome contributions to the `@lit-protocol/encryption` package. If you have any ideas, suggestions, or bug reports, please open an issue or submit a pull request on the GitHub repository.

## License

The `@lit-protocol/encryption` package is licensed under the MIT License. See the [LICENSE](LICENSE) file for more information.

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
