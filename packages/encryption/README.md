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
