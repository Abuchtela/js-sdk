import { Buffer } from 'buffer';

import * as ipfs from 'ipfs-unixfs-importer/dist/src/index';


/**
 * Converts a string to an IPFS hash.
 * @param input - The input string to convert.
 * @returns A Promise that resolves to the IPFS hash.
 * @throws An error if the generated hash does not start with 'Qm'.
 */
export async function stringToIpfsHash(input: string): Promise<string> {
  const blockput = {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    put: async (block: any) => {
      return block.cid;
    },
  };

  // Convert the input string to a Buffer
  const content = Buffer.from(input);

  // Import the content to create an IPFS file
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const files = ipfs.importer([{ content }], blockput as any);

  // Get the first (and only) file result
  const result = (await files.next()).value;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const ipfsHash = (result as any).cid.toString();

  if (!ipfsHash.startsWith('Qm')) {
    throw new Error('Generated hash does not start with Qm');
  }

  return ipfsHash;
}

export function randomSolanaPrivateKey() {
  const BASE58_ALPHABET =
    '123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz';
  const SOLANA_PRIVATE_KEY_LENGTH = 88;

  let result = '';
  const charactersLength = BASE58_ALPHABET.length;
  for (let i = 0; i < SOLANA_PRIVATE_KEY_LENGTH; i++) {
    const randomIndex = Math.floor(Math.random() * charactersLength);
    result += BASE58_ALPHABET.charAt(randomIndex);
  }
  return result;
}

/**
 * Wraps a promise with a timeout.
 * If the promise does not resolve or reject within the specified time, it will be rejected with a "Timed out" error.
 *
 * @param promise - The promise to wrap with a timeout.
 * @param ms - The timeout duration in milliseconds.
 * @returns A new promise that resolves or rejects based on the original promise or the timeout.
 */
export function withTimeout<T>(
  promise: Promise<T>,
  ms: number
): Promise<T | void> {
  const timeout = new Promise<T>((_, reject) =>
    setTimeout(() => reject(new Error('Timed out')), ms)
  );
  return Promise.race([promise, timeout]);
}


function isErrorWithMessage(error: unknown): error is Error {
  return (
    typeof error === 'object' &&
    error !== null &&
    'message' in error &&
    typeof (error as Record<string, unknown>)['message'] === 'string'
  );
}

// eslint-disable-next-line import/prefer-default-export
export function toErrorWithMessage(maybeError: unknown): Error {
  if (isErrorWithMessage(maybeError)) return maybeError as Error;

  try {
    return new Error(JSON.stringify(maybeError));
  } catch {
    // fallback in case there's an error stringifying the maybeError
    // like with circular references for example.
    return new Error(String(maybeError));
  }
}