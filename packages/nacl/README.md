# Quick Start

This submodule provides a re-export of the `nacl` package, which is a cryptographic library for handling various encryption and decryption operations.

### node.js / browser

```
yarn add @lit-protocol/nacl
```

## Description

The `@lit-protocol/nacl` package is a wrapper around the `nacl` library, providing cryptographic functionalities such as public-key encryption, secret-key encryption, digital signatures, and hashing. It is designed to be used in both Node.js and browser environments.

## Installation

To install the `@lit-protocol/nacl` package, you can use either npm or yarn:

```bash
npm install @lit-protocol/nacl
```

or

```bash
yarn add @lit-protocol/nacl
```

## Usage

Here are some examples of how to use the cryptographic functions provided by the `@lit-protocol/nacl` package:

### Public-Key Encryption

The `@lit-protocol/nacl` package provides functions for public-key encryption, allowing you to encrypt and decrypt messages using a pair of public and private keys.

```javascript
import nacl from '@lit-protocol/nacl';

// Generate a new key pair
const keyPair = nacl.box.keyPair();

// Encrypt a message
const message = new TextEncoder().encode('Hello, world!');
const nonce = nacl.randomBytes(nacl.box.nonceLength);
const encryptedMessage = nacl.box(message, nonce, keyPair.publicKey, keyPair.secretKey);

// Decrypt the message
const decryptedMessage = nacl.box.open(encryptedMessage, nonce, keyPair.publicKey, keyPair.secretKey);
console.log(new TextDecoder().decode(decryptedMessage)); // Output: Hello, world!
```

### Secret-Key Encryption

The `@lit-protocol/nacl` package also provides functions for secret-key encryption, allowing you to encrypt and decrypt messages using a shared secret key.

```javascript
import nacl from '@lit-protocol/nacl';

// Generate a new secret key
const secretKey = nacl.randomBytes(nacl.secretbox.keyLength);

// Encrypt a message
const message = new TextEncoder().encode('Hello, world!');
const nonce = nacl.randomBytes(nacl.secretbox.nonceLength);
const encryptedMessage = nacl.secretbox(message, nonce, secretKey);

// Decrypt the message
const decryptedMessage = nacl.secretbox.open(encryptedMessage, nonce, secretKey);
console.log(new TextDecoder().decode(decryptedMessage)); // Output: Hello, world!
```

### Digital Signatures

The `@lit-protocol/nacl` package provides functions for creating and verifying digital signatures, allowing you to sign messages and verify the authenticity of signed messages.

```javascript
import nacl from '@lit-protocol/nacl';

// Generate a new key pair
const keyPair = nacl.sign.keyPair();

// Sign a message
const message = new TextEncoder().encode('Hello, world!');
const signedMessage = nacl.sign(message, keyPair.secretKey);

// Verify the signed message
const verifiedMessage = nacl.sign.open(signedMessage, keyPair.publicKey);
console.log(new TextDecoder().decode(verifiedMessage)); // Output: Hello, world!
```

### Hashing

The `@lit-protocol/nacl` package provides functions for hashing messages, allowing you to create cryptographic hashes of messages.

```javascript
import nacl from '@lit-protocol/nacl';

// Hash a message
const message = new TextEncoder().encode('Hello, world!');
const hash = nacl.hash(message);
console.log(hash);
```

## Contributing

We welcome contributions to the `@lit-protocol/nacl` package. If you have any ideas, suggestions, or bug reports, please open an issue or submit a pull request on the GitHub repository.

## License

The `@lit-protocol/nacl` package is licensed under the MIT License. See the [LICENSE](LICENSE) file for more information.

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
