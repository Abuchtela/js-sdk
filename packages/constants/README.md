# Quick Start

This submodule exports various modules, constants, interfaces, errors, and utilities that are used in the Lit Protocol.

### node.js / browser

```
yarn add @lit-protocol/constants
```

## Description

The `@lit-protocol/constants` package provides a collection of constants, interfaces, errors, and utilities that are commonly used across different modules of the Lit Protocol SDK. These constants and utilities help in the development and maintenance of the SDK.

## Installation

To install the `@lit-protocol/constants` package, you can use either npm or yarn:

```bash
npm install @lit-protocol/constants
```

or

```bash
yarn add @lit-protocol/constants
```

## Usage

Here are some examples of how to use the constants and utilities provided by the `@lit-protocol/constants` package:

### Constants

The `@lit-protocol/constants` package provides various constants that are used throughout the SDK.

```javascript
import { LIT_CONSTANTS } from '@lit-protocol/constants';

console.log(LIT_CONSTANTS.SOME_CONSTANT); // Output: some_value
```

### Interfaces

The `@lit-protocol/constants` package provides various interfaces that are used throughout the SDK.

```typescript
import { SomeInterface } from '@lit-protocol/constants';

const obj: SomeInterface = {
  property1: 'value1',
  property2: 'value2',
};
```

### Errors

The `@lit-protocol/constants` package provides various custom error classes that are used throughout the SDK.

```javascript
import { SomeCustomError } from '@lit-protocol/constants';

try {
  throw new SomeCustomError('Something went wrong');
} catch (error) {
  console.error(error.message); // Output: Something went wrong
}
```

### Utilities

The `@lit-protocol/constants` package provides various utility functions that are used throughout the SDK.

```javascript
import { someUtilityFunction } from '@lit-protocol/constants';

const result = someUtilityFunction('input');
console.log(result); // Output: some_result
```

## Contributing

We welcome contributions to the `@lit-protocol/constants` package. If you have any ideas, suggestions, or bug reports, please open an issue or submit a pull request on the GitHub repository.

## License

The `@lit-protocol/constants` package is licensed under the MIT License. See the [LICENSE](LICENSE) file for more information.
