# Quick Start

This submodule provides various utility functions for error handling, logging, type checking, and other operations in the JavaScript SDK for the Lit Protocol.

### node.js / browser

```
yarn add @lit-protocol/misc
```

## Description

The `@lit-protocol/misc` package provides a collection of utility functions that are commonly used across different modules of the Lit Protocol SDK. These utilities include functions for error handling, logging, type checking, and other miscellaneous operations that help in the development and maintenance of the SDK.

## Installation

To install the `@lit-protocol/misc` package, you can use either npm or yarn:

```bash
npm install @lit-protocol/misc
```

or

```bash
yarn add @lit-protocol/misc
```

## Usage

Here are some examples of how to use the utility functions provided by the `@lit-protocol/misc` package:

### Error Handling

The `@lit-protocol/misc` package provides utility functions for error handling, such as creating custom error classes and handling errors in a consistent manner.

```javascript
import { createCustomError } from '@lit-protocol/misc';

class MyCustomError extends createCustomError('MyCustomError') {}

try {
  throw new MyCustomError('Something went wrong');
} catch (error) {
  console.error(error.message); // Output: Something went wrong
}
```

### Logging

The `@lit-protocol/misc` package includes utility functions for logging messages with different log levels, such as info, warning, and error.

```javascript
import { logInfo, logWarning, logError } from '@lit-protocol/misc';

logInfo('This is an informational message');
logWarning('This is a warning message');
logError('This is an error message');
```

### Type Checking

The `@lit-protocol/misc` package provides utility functions for type checking, such as checking if a value is of a specific type.

```javascript
import { isString, isNumber, isArray } from '@lit-protocol/misc';

console.log(isString('Hello')); // Output: true
console.log(isNumber(123)); // Output: true
console.log(isArray([1, 2, 3])); // Output: true
```

## Contributing

We welcome contributions to the `@lit-protocol/misc` package. If you have any ideas, suggestions, or bug reports, please open an issue or submit a pull request on the GitHub repository.

## License

The `@lit-protocol/misc` package is licensed under the MIT License. See the [LICENSE](LICENSE) file for more information.

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
