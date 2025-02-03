# Quick Start

This submodule provides logging functionalities for the Lit Protocol, including methods for logging messages with different levels of severity (info, warn, error).

### node.js / browser

```
yarn add @lit-protocol/logger
```

## Description

The `@lit-protocol/logger` package provides logging functionalities for the Lit Protocol. It includes methods for logging messages with different levels of severity, such as info, warn, and error. These logging utilities help in the development and maintenance of the SDK by providing a consistent way to log messages and handle errors.

## Installation

To install the `@lit-protocol/logger` package, you can use either npm or yarn:

```bash
npm install @lit-protocol/logger
```

or

```bash
yarn add @lit-protocol/logger
```

## Usage

Here are some examples of how to use the logging functionalities provided by the `@lit-protocol/logger` package:

### Logging Messages

The `@lit-protocol/logger` package provides methods for logging messages with different levels of severity.

```javascript
import { logInfo, logWarn, logError } from '@lit-protocol/logger';

logInfo('This is an informational message');
logWarn('This is a warning message');
logError('This is an error message');
```

## Contributing

We welcome contributions to the `@lit-protocol/logger` package. If you have any ideas, suggestions, or bug reports, please open an issue or submit a pull request on the GitHub repository.

## License

The `@lit-protocol/logger` package is licensed under the MIT License. See the [LICENSE](LICENSE) file for more information.

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
