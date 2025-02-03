# Quick Start

This submodule provides core functionalities for the Lit Protocol, including the main LitNodeClient class, which is used to interact with the Lit network. It also includes various utility functions and constants that are used throughout the SDK.

### node.js / browser

```
yarn add @lit-protocol/core
```

## Description

The `@lit-protocol/core` package provides the core functionalities required to interact with the Lit Protocol. This includes the main `LitNodeClient` class, which is used to connect to the Lit network and perform various operations. Additionally, the package includes utility functions and constants that are commonly used across different modules of the Lit Protocol SDK.

## Installation

To install the `@lit-protocol/core` package, you can use either npm or yarn:

```bash
npm install @lit-protocol/core
```

or

```bash
yarn add @lit-protocol/core
```

## Usage

Here are some examples of how to use the core functionalities provided by the `@lit-protocol/core` package:

### Connecting to the Lit Network

The `LitNodeClient` class is used to connect to the Lit network and perform various operations.

```javascript
import { LitNodeClient } from '@lit-protocol/core';

const client = new LitNodeClient({
  litNetwork: 'serrano',
});

await client.connect();

const authSig = await client.checkAndSignAuthMessage({
  chain: 'ethereum',
});
```

### Utility Functions

The `@lit-protocol/core` package provides various utility functions that are used throughout the SDK.

```javascript
import { someUtilityFunction } from '@lit-protocol/core';

const result = someUtilityFunction('input');
console.log(result); // Output: some_result
```

## Contributing

We welcome contributions to the `@lit-protocol/core` package. If you have any ideas, suggestions, or bug reports, please open an issue or submit a pull request on the GitHub repository.

## License

The `@lit-protocol/core` package is licensed under the MIT License. See the [LICENSE](LICENSE) file for more information.
