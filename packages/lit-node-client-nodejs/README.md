# Quick Start

This submodule provides functionalities to interact with the Lit network in a Node.js environment. It includes the main `LitNodeClientNodeJs` class, which is used to connect to the Lit network and perform various operations.

### node.js

```
yarn add @lit-protocol/lit-node-client-nodejs
```

## Description

The `@lit-protocol/lit-node-client-nodejs` package provides the core functionalities required to interact with the Lit Protocol in a Node.js environment. This includes the main `LitNodeClientNodeJs` class, which is used to connect to the Lit network and perform various operations. Additionally, the package includes utility functions and constants that are commonly used across different modules of the Lit Protocol SDK.

## Installation

To install the `@lit-protocol/lit-node-client-nodejs` package, you can use either npm or yarn:

```bash
npm install @lit-protocol/lit-node-client-nodejs
```

or

```bash
yarn add @lit-protocol/lit-node-client-nodejs
```

## Usage

Here are some examples of how to use the core functionalities provided by the `@lit-protocol/lit-node-client-nodejs` package:

### Connecting to the Lit Network

The `LitNodeClientNodeJs` class is used to connect to the Lit network and perform various operations.

```javascript
import { LitNodeClientNodeJs } from '@lit-protocol/lit-node-client-nodejs';
import { checkAndSignAuthMessage } from '@lit-protocol/auth-browser';

const client = new LitNodeClientNodeJs({
  litNetwork: 'serrano',
  defaultAuthCallback: checkAndSignAuthMessage,
});

await client.connect();

const authSig = await checkAndSignAuthMessage({
  chain: 'ethereum',
});
```

## Contributing

We welcome contributions to the `@lit-protocol/lit-node-client-nodejs` package. If you have any ideas, suggestions, or bug reports, please open an issue or submit a pull request on the GitHub repository.

## License

The `@lit-protocol/lit-node-client-nodejs` package is licensed under the MIT License. See the [LICENSE](LICENSE) file for more information.
