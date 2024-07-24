import { expect, jest, test } from '@jest/globals';
import { TinnyEnvironment, getEoaSessionSigs, TinnyPerson, getLitActionSessionSigs, getLitActionSessionSigsUsingIpfsId } from '@lit-protocol/tinny';

import {
  createSiweMessageWithRecaps,
  generateAuthSig,
  LitAbility,
  LitActionResource,
  LitPKPResource,
} from '@lit-protocol/auth-helpers';
import {
  AuthCallbackParams,
  AuthSig,
  LitResourceAbilityRequest,
  SessionSigsMap,
} from '@lit-protocol/types';
import {
  PKPEthersWallet,
  ethRequestHandler,
  signTypedData,
} from '@lit-protocol/pkp-ethers';
import { ethers } from 'ethers';

import {
  SignTypedDataVersion,
  recoverTypedSignature,
} from '@metamask/eth-sig-util';


try {
  jest.setTimeout(60000);
} catch (e) {
  // ... continue execution
}

describe('PKP Ethers', () => {
  let devEnv: TinnyEnvironment;
  beforeAll(async () => {
    devEnv = new TinnyEnvironment();
    await devEnv.init();
  });

  afterAll(async () => {
    await devEnv.litNodeClient?.disconnect();
  });

  beforeEach(() => {
    jest.spyOn(console, 'warn').mockImplementation(() => {});
  });

  describe('Sign Message', () => {
    it('LitAction Session', async () => {
      await signMessage(devEnv, getLitActionSessionSigs);
    });

    it('LitAction IPFS Session', async () => {
      await signMessage(devEnv, getLitActionSessionSigsUsingIpfsId);
    });

    it('EOA Wallet', async () => {
      await signMessage(devEnv, getEoaSessionSigs);
    });

    it('PKP Session', async () => {
      await signMessage(devEnv, getEoaSessionSigs);
    });
  });

  describe('ETH Signing', () => {
    it('LitAction Session', async () => {
      await ethTransaction(devEnv, getLitActionSessionSigs);
    });

    it('LitAction IPFS Session', async () => {
      await ethTransaction(devEnv, getLitActionSessionSigsUsingIpfsId);
    });

    it('EOA Wallet', async () => {
      await ethTransaction(devEnv, getEoaSessionSigs);
    });

    it('PKP Session', async () => {
      await ethTransaction(devEnv, getEoaSessionSigs);
    });
  });

  describe('ETH Personal Signing', () => {
    it('LitAction Session', async () => {
      await ethPersonalSign(devEnv, getLitActionSessionSigs);
    });

    it('LitAction IPFS Session', async () => {
      await ethPersonalSign(devEnv, getLitActionSessionSigsUsingIpfsId);
    });

    it('EOA Wallet', async () => {
      await ethPersonalSign(devEnv, getEoaSessionSigs);
    });

    it('PKP Session', async () => {
      await ethPersonalSign(devEnv, getEoaSessionSigs);
    });
  });

  describe('Sign Transaction', () => {
    it('LitAction Session', async () => {
      await signTransaction(devEnv, getLitActionSessionSigs);
    });

    it('LitAction IPFS Session', async () => {
      await signTransaction(devEnv, getLitActionSessionSigsUsingIpfsId);
    });

    it('EOA Wallet', async () => {
      await signTransaction(devEnv, getEoaSessionSigs);
    });

    it('PKP Session', async () => {
      await signTransaction(devEnv, getEoaSessionSigs);
    });
  });

  describe('Eth Sign Typed Data', () => {
    it('LitAction Session', async () => {
      await signTransaction(devEnv, getLitActionSessionSigs);
    });

    it('LitAction IPFS Session', async () => {
      await signTypedDataV1(devEnv, getLitActionSessionSigsUsingIpfsId);
    });

    it('EOA Wallet', async () => {
      await signTypedDataV1(devEnv, getEoaSessionSigs);
    });

    it('PKP Session', async () => {
      await signTypedDataV1(devEnv, getEoaSessionSigs);
    });
  });

  describe('Sign Typed Data Util', () => {
    it('LitAction Session', async () => {
      await ethTypedDataUtil(devEnv, getLitActionSessionSigs);
    });

    it('LitAction IPFS Session', async () => {
      await ethTypedDataUtil(devEnv, getLitActionSessionSigsUsingIpfsId);
    });

    it('EOA Wallet', async () => {
      await ethTypedDataUtil(devEnv, getEoaSessionSigs);
    });

    it('PKP Session', async () => {
      await ethTypedDataUtil(devEnv, getEoaSessionSigs);
    });
  });

  describe('SignedTypedDataV1', () => {
    it('LitAction Session', async () => {
      await signTypedDataV1(devEnv, getLitActionSessionSigs);
    });

    it('LitAction IPFS Session', async () => {
      await signTypedDataV1(devEnv, getLitActionSessionSigsUsingIpfsId);
    });

    it('EOA Wallet', async () => {
      await signTypedDataV1(devEnv, getEoaSessionSigs);
    });

    it('PKP Session', async () => {
      await signTypedDataV1(devEnv, getEoaSessionSigs);
    });
  });

  describe('SignedTypedDatav3', () => {
    it('LitAction Session', async () => {
      await signTypedDatav3(devEnv, getLitActionSessionSigs);
    });

    it('LitAction IPFS Session', async () => {
      await signTypedDatav3(devEnv, getLitActionSessionSigsUsingIpfsId);
    });

    it('EOA Wallet', async () => {
      await signTypedDatav3(devEnv, getEoaSessionSigs);
    });

    it('PKP Session', async () => {
      await signTypedDatav3(devEnv, getEoaSessionSigs);
    });
  });

  describe('Signed Typed Data v4', () => {
    it('LitAction Session', async () => {
      await signTypedDatav4(devEnv, getLitActionSessionSigs);
    });

    it('LitAction IPFS Session', async () => {
      await signTypedDatav4(devEnv, getLitActionSessionSigsUsingIpfsId);
    });

    it('EOA Wallet', async () => {
      await signTypedDatav4(devEnv, getEoaSessionSigs);
    });

    it('PKP Session', async () => {
      await signTypedDatav4(devEnv, getEoaSessionSigs);
    });
  });

  describe('Sign With AuthContext', () => {
    it('LitAction Session', async () => {
      await signWithAuthContext(devEnv, getLitActionSessionSigs);
    });

    it('LitAction IPFS Session', async () => {
      await signWithAuthContext(devEnv, getLitActionSessionSigsUsingIpfsId);
    });

    it('EOA Wallet', async () => {
      await signWithAuthContext(devEnv, getEoaSessionSigs);
    });

    it('PKP Session', async () => {
      await signWithAuthContext(devEnv, getEoaSessionSigs);
    });
  });
});

const signMessage = async (
  devEnv: TinnyEnvironment,
  generator: (
    devEnv: TinnyEnvironment,
    person: TinnyPerson,
    resources?: LitResourceAbilityRequest[]
  ) => Promise<SessionSigsMap | undefined>
): Promise<void> => {
  const alice = await devEnv.createRandomPerson();
  const eoaSessionSigs = await generator(devEnv, alice);

  const pkpEthersWallet = new PKPEthersWallet({
    litNodeClient: devEnv.litNodeClient!,
    pkpPubKey: alice.pkp?.publicKey!,
    controllerSessionSigs: eoaSessionSigs,
  });

  await pkpEthersWallet.init();

  // -- test signMessage
  try {
    const res = await pkpEthersWallet.signMessage(alice.loveLetter);
    expect(res).toBeDefined();
  } catch (e) {
    throw new Error('❌ Error: ' + (e as Error).message);
  } finally {
    devEnv.releasePrivateKeyFromUser(alice);
  }
};

const ethTransaction = async (
  devEnv: TinnyEnvironment,
  generator: (
    devEnv: TinnyEnvironment,
    person: TinnyPerson,
    resources?: LitResourceAbilityRequest[]
  ) => Promise<SessionSigsMap | undefined>
): Promise<void> => {
  const alice = await devEnv.createRandomPerson();
  const eoaSessionSigs = await generator(devEnv, alice);

  const pkpEthersWallet = new PKPEthersWallet({
    litNodeClient: devEnv.litNodeClient!,
    pkpPubKey: alice.pkp?.publicKey!,
    controllerSessionSigs: eoaSessionSigs,
  });

  await pkpEthersWallet.init();

  // -- test eth_sign
  try {
    // Message to sign
    const message = 'Hello world';
    const hexMsg = ethers.utils.hexlify(ethers.utils.toUtf8Bytes(message));

    // DATA, 20 Bytes - address
    // DATA, N Bytes - message to sign
    // Reference: https://ethereum.github.io/execution-apis/api-documentation/#eth_sign
    const signature = await ethRequestHandler({
      signer: pkpEthersWallet,
      payload: {
        method: 'eth_sign',
        params: [alice.pkp?.ethAddress, hexMsg],
      },
    });
    const recoveredAddr = ethers.utils.verifyMessage(message, signature);
    expect(signature.length).toEqual(132);
    expect(recoveredAddr).toEqual(alice.pkp?.ethAddress);

    console.log('✅ recoveredAddr:', recoveredAddr);
  } catch (e) {
    throw (new Error('❌ Error: ' + (e as Error).message).stack = (
      e as Error
    ).stack);
  } finally {
    devEnv.releasePrivateKeyFromUser(alice);
  }
};

const signTransaction = async (
  devEnv: TinnyEnvironment,
  generator: (
    devEnv: TinnyEnvironment,
    person: TinnyPerson,
    resources?: LitResourceAbilityRequest[]
  ) => Promise<SessionSigsMap | undefined>
): Promise<void> => {
  const alice = await devEnv.createRandomPerson();
  const eoaSessionSigs = await generator(devEnv, alice);

  const pkpEthersWallet = new PKPEthersWallet({
    litNodeClient: devEnv?.litNodeClient!,
    pkpPubKey: alice.pkp?.publicKey!,
    controllerSessionSigs: eoaSessionSigs,
  });

  await pkpEthersWallet.init();

  // -- eth_sendTransaction parameters
  try {
    // Transaction to sign and send
    const from = alice.pkp?.ethAddress!;
    const to = alice.pkp?.ethAddress;
    const gasLimit = ethers.BigNumber.from('21000');
    const value = ethers.BigNumber.from('0');
    const data = '0x';

    // pkp-ethers signer will automatically add missing fields (nonce, chainId, gasPrice, gasLimit)
    const tx = {
      from: from,
      to: to,
      gasLimit,
      value,
      data,
    };

    // eth_sendTransaction parameters
    // Transaction - Object
    // Reference: https://ethereum.github.io/execution-apis/api-documentation/#eth_sendTransaction
    // A serialized form of the whole transaction
    const rawSignedTx = await ethRequestHandler({
      signer: pkpEthersWallet,
      payload: {
        method: 'eth_signTransaction',
        params: [tx],
      },
    });

    const parsedTransaction = ethers.utils.parseTransaction(rawSignedTx);

    const signature = ethers.utils.joinSignature({
      r: parsedTransaction.r!,
      s: parsedTransaction.s!,
      v: parsedTransaction.v!,
    });

    const rawTx = {
      nonce: parsedTransaction.nonce,
      gasPrice: parsedTransaction.gasPrice,
      gasLimit: parsedTransaction.gasLimit,
      to: parsedTransaction.to,
      value: parsedTransaction.value,
      data: parsedTransaction.data,
      chainId: parsedTransaction.chainId, // Include chainId if the transaction is EIP-155
    };

    const txHash = ethers.utils.keccak256(
      ethers.utils.serializeTransaction(rawTx)
    );

    const { v, r, s } = parsedTransaction;

    const recoveredAddress = ethers.utils.recoverAddress(txHash, {
      r: r!,
      s: s!,
      v: v!,
    });

    // ==================== Post-Validation ====================
    expect(parsedTransaction).toBeDefined();

    expect(signature.length).toEqual(132);

    expect(recoveredAddress.toLowerCase()).toEqual(
      alice.pkp?.ethAddress.toLowerCase()
    );
  } catch (e) {
    if ((e as Error).message.includes('insufficient FPE funds')) {
      console.log(
        `🧪 PKPEthersWallet should be able to send tx (insufficient FPE funds ❗️)`
      );
    } else {
      throw new Error(`❌ Error: ${(e as Error).toString()}`);
    }
  } finally {
    devEnv.releasePrivateKeyFromUser(alice);
  }
};

const ethTypedDataUtil = async (
  devEnv: TinnyEnvironment,
  generator: (
    devEnv: TinnyEnvironment,
    person: TinnyPerson,
    resources?: LitResourceAbilityRequest[]
  ) => Promise<SessionSigsMap | undefined>
): Promise<void> => {
  const alice = await devEnv.createRandomPerson();
  const eoaSessionSigs = await generator(devEnv, alice);

  const pkpEthersWallet = new PKPEthersWallet({
    litNodeClient: devEnv?.litNodeClient!,
    pkpPubKey: alice.pkp?.publicKey!,
    controllerSessionSigs: eoaSessionSigs,
  });

  await pkpEthersWallet.init();

  // -- eth_signTypedData parameters
  try {
    // Example from https://github.com/MetaMask/test-dapp/blob/main/src/index.js#L1033
    const msgParams = {
      types: {
        EIP712Domain: [
          { name: 'name', type: 'string' },
          { name: 'version', type: 'string' },
          { name: 'chainId', type: 'uint256' },
          { name: 'verifyingContract', type: 'address' },
        ],
        Person: [
          { name: 'name', type: 'string' },
          { name: 'wallet', type: 'address' },
        ],
        Mail: [
          { name: 'from', type: 'Person' },
          { name: 'to', type: 'Person' },
          { name: 'contents', type: 'string' },
        ],
      },
      primaryType: 'Mail',
      domain: {
        name: 'Ether Mail',
        version: '1',
        chainId: 80001,
        verifyingContract: '0xCcCCccccCCCCcCCCCCCcCcCccCcCCCcCcccccccC',
      },
      message: {
        from: {
          name: 'Cow',
          wallet: '0xCD2a3d9F938E13CD947Ec05AbC7FE734Df8DD826',
        },
        to: {
          name: 'Bob',
          wallet: '0xbBbBBBBbbBBBbbbBbbBbbbbBBbBbbbbBbBbbBBbB',
        },
        contents: 'Hello, Bob!',
      },
    };

    const signature = await ethRequestHandler({
      signer: pkpEthersWallet,
      payload: {
        method: 'eth_signTypedData',
        params: [alice?.pkp?.ethAddress, JSON.stringify(msgParams)],
      },
    });

    // https://docs.ethers.io/v5/api/utils/signing-key/#utils-verifyTypedData
    const recoveredAddr = ethers.utils.verifyTypedData(
      msgParams.domain,
      { Person: msgParams.types.Person, Mail: msgParams.types.Mail },
      msgParams.message,
      signature
    );

    expect(signature.length).toEqual(132);

    expect(recoveredAddr.toLowerCase()).toEqual(
      alice.pkp?.ethAddress.toLowerCase()
    );
  } catch (e) {
    throw new Error(`❌ ${(e as Error).toString()}`);
  } finally {
    devEnv.releasePrivateKeyFromUser(alice);
  }
};

const signTypedDataV1 = async (
  devEnv: TinnyEnvironment,
  generator: (
    devEnv: TinnyEnvironment,
    person: TinnyPerson,
    resources?: LitResourceAbilityRequest[]
  ) => Promise<SessionSigsMap | undefined>
): Promise<void> => {
  const alice = await devEnv.createRandomPerson();
  const eoaSessionSigs = await getEoaSessionSigs(devEnv, alice);

  const pkpEthersWallet = new PKPEthersWallet({
    litNodeClient: devEnv?.litNodeClient!,
    pkpPubKey: alice.pkp?.publicKey!,
    controllerSessionSigs: eoaSessionSigs,
  });

  await pkpEthersWallet.init();

  // -- eth_signTypedData_v1 parameters
  try {
    const msgParams = [
      {
        type: 'string',
        name: 'Message',
        value: 'Hi, Alice!',
      },
      {
        type: 'uint32',
        name: 'A number',
        value: '1337',
      },
    ];

    const signature = await ethRequestHandler({
      signer: pkpEthersWallet,
      payload: {
        method: 'eth_signTypedData_v1',
        params: [msgParams, alice.pkp?.ethAddress],
      },
    });

    const signatureBytes = ethers.utils.arrayify(signature);

    const recoveredAddr = recoverTypedSignature({
      data: msgParams,
      signature: signatureBytes as any,
      version: SignTypedDataVersion.V1,
    });

    // ==================== Post-Validation ====================
    if (signature.length !== 132) {
      throw new Error('❌ signature should be 132 characters long');
    }

    if (recoveredAddr.toLowerCase() !== alice.pkp?.ethAddress.toLowerCase()) {
      throw new Error(
        `❌ recoveredAddr ${recoveredAddr} should be ${alice.pkp?.ethAddress}`
      );
    }

    console.log('signature: ', signature);
    console.log('recoveredAddr: ', recoveredAddr);
  } catch (e) {
    throw new Error(`❌ ${(e as Error).toString()}`);
  } finally {
    devEnv.releasePrivateKeyFromUser(alice);
  }
};

const signTypedDatav3 = async (
  devEnv: TinnyEnvironment,
  generator: (
    devEnv: TinnyEnvironment,
    person: TinnyPerson,
    resources?: LitResourceAbilityRequest[]
  ) => Promise<SessionSigsMap | undefined>
): Promise<void> => {
  const alice = await devEnv.createRandomPerson();
  const eoaSessionSigs = await generator(devEnv, alice);

  const pkpEthersWallet = new PKPEthersWallet({
    litNodeClient: devEnv.litNodeClient!,
    pkpPubKey: alice.pkp?.publicKey!,
    controllerSessionSigs: eoaSessionSigs,
  });

  await pkpEthersWallet.init();

  // -- eth_signTypedData_v3 parameters
  try {
    const msgParams = {
      types: {
        EIP712Domain: [
          { name: 'name', type: 'string' },
          { name: 'version', type: 'string' },
          { name: 'chainId', type: 'uint256' },
          { name: 'verifyingContract', type: 'address' },
        ],
        Person: [
          { name: 'name', type: 'string' },
          { name: 'wallet', type: 'address' },
        ],
        Mail: [
          { name: 'from', type: 'Person' },
          { name: 'to', type: 'Person' },
          { name: 'contents', type: 'string' },
        ],
      },
      primaryType: 'Mail',
      domain: {
        name: 'Ether Mail',
        version: '1',
        chainId: 80001,
        verifyingContract: '0xCcCCccccCCCCcCCCCCCcCcCccCcCCCcCcccccccC',
      },
      message: {
        from: {
          name: 'Cow',
          wallet: '0xCD2a3d9F938E13CD947Ec05AbC7FE734Df8DD826',
        },
        to: {
          name: 'Bob',
          wallet: '0xbBbBBBBbbBBBbbbBbbBbbbbBBbBbbbbBbBbbBBbB',
        },
        contents: 'Hello, Bob!',
      },
    };

    const signature = await ethRequestHandler({
      signer: pkpEthersWallet,
      payload: {
        method: 'eth_signTypedData_v3',
        params: [alice.pkp?.ethAddress, JSON.stringify(msgParams)],
      },
    });

    const recoveredAddr = recoverTypedSignature({
      data: {
        // @ts-ignore
        types: msgParams.types,
        // @ts-ignore
        domain: msgParams.domain,
        // @ts-ignore
        primaryType: msgParams.primaryType,
        // @ts-ignore
        message: msgParams.message,
      },
      signature: signature,
      version: SignTypedDataVersion.V3,
    });

    if (signature.length !== 132) {
      throw new Error('❌ signature should be 132 characters long');
    }

    if (recoveredAddr.toLowerCase() !== alice.pkp?.ethAddress.toLowerCase()) {
      throw new Error(
        `❌ recoveredAddr ${recoveredAddr} should be ${alice.pkp?.ethAddress}`
      );
    }
  } catch (e) {
    throw new Error(`❌ ${(e as Error).toString()}`);
  } finally {
    devEnv.releasePrivateKeyFromUser(alice);
  }
};

const signTypedDatav4 = async (
  devEnv: TinnyEnvironment,
  generator: (
    devEnv: TinnyEnvironment,
    person: TinnyPerson,
    resources?: LitResourceAbilityRequest[]
  ) => Promise<SessionSigsMap | undefined>
): Promise<void> => {
  const alice = await devEnv.createRandomPerson();
  const eoaSessionSigs = await generator(devEnv, alice);

  const pkpEthersWallet = new PKPEthersWallet({
    litNodeClient: devEnv.litNodeClient!,
    pkpPubKey: alice.pkp?.publicKey!,
    controllerSessionSigs: eoaSessionSigs,
  });

  await pkpEthersWallet.init();

  // -- eth_signTypedData_v3 parameters
  try {
    const msgParams = {
      domain: {
        chainId: 80001,
        name: 'Ether Mail',
        verifyingContract: '0xCcCCccccCCCCcCCCCCCcCcCccCcCCCcCcccccccC',
        version: '1',
      },
      message: {
        contents: 'Hello, Bob!',
        from: {
          name: 'Cow',
          wallets: [
            '0xCD2a3d9F938E13CD947Ec05AbC7FE734Df8DD826',
            '0xDeaDbeefdEAdbeefdEadbEEFdeadbeEFdEaDbeeF',
          ],
        },
        to: [
          {
            name: 'Bob',
            wallets: [
              '0xbBbBBBBbbBBBbbbBbbBbbbbBBbBbbbbBbBbbBBbB',
              '0xB0BdaBea57B0BDABeA57b0bdABEA57b0BDabEa57',
              '0xB0B0b0b0b0b0B000000000000000000000000000',
            ],
          },
        ],
      },
      primaryType: 'Mail',
      types: {
        EIP712Domain: [
          { name: 'name', type: 'string' },
          { name: 'version', type: 'string' },
          { name: 'chainId', type: 'uint256' },
          { name: 'verifyingContract', type: 'address' },
        ],
        Mail: [
          { name: 'from', type: 'Person' },
          { name: 'to', type: 'Person[]' },
          { name: 'contents', type: 'string' },
        ],
        Person: [
          { name: 'name', type: 'string' },
          { name: 'wallets', type: 'address[]' },
        ],
      },
    };

    const signature = await ethRequestHandler({
      signer: pkpEthersWallet,
      payload: {
        method: 'eth_signTypedData_v4',
        params: [alice.pkp?.ethAddress, JSON.stringify(msgParams)],
      },
    });

    const recoveredAddr = recoverTypedSignature({
      data: msgParams as any,
      signature: signature,
      version: SignTypedDataVersion.V4,
    });

    if (signature.length !== 132) {
      throw new Error('❌ signature should be 132 characters long');
    }

    if (recoveredAddr.toLowerCase() !== alice.pkp?.ethAddress.toLowerCase()) {
      throw new Error(
        `❌ recoveredAddr ${recoveredAddr} should be ${alice.pkp?.ethAddress}`
      );
    }
  } catch (e) {
    throw new Error(`❌ ${(e as Error).toString()}`);
  } finally {
    devEnv.releasePrivateKeyFromUser(alice);
  }
};

const signWithAuthContext = async (
  devEnv: TinnyEnvironment,
  generator: (
    devEnv: TinnyEnvironment,
    person: TinnyPerson,
    resources?: LitResourceAbilityRequest[]
  ) => Promise<SessionSigsMap | undefined>
): Promise<void> => {
  const alice = await devEnv.createRandomPerson();

  const pkpEthersWallet = new PKPEthersWallet({
    pkpPubKey: alice.pkp?.publicKey!,
    litNodeClient: devEnv.litNodeClient!,
    authContext: {
      getSessionSigsProps: {
        authNeededCallback: async function (
          params: AuthCallbackParams
        ): Promise<AuthSig> {
          const toSign = await createSiweMessageWithRecaps({
            uri: params.uri!,
            expiration: params.expiration!,
            resources: params.resourceAbilityRequests!,
            walletAddress: alice.wallet.address,
            nonce: await devEnv.litNodeClient?.getLatestBlockhash()!,
            litNodeClient: devEnv.litNodeClient,
          });

          const authSig = await generateAuthSig({
            signer: alice.wallet,
            toSign,
          });

          return authSig;
        },
        resourceAbilityRequests: [
          {
            resource: new LitPKPResource('*'),
            ability: LitAbility.PKPSigning,
          },
          {
            resource: new LitActionResource('*'),
            ability: LitAbility.LitActionExecution,
          },
        ],
      },
    },
  });
};

const ethPersonalSign = async (
  devEnv: TinnyEnvironment,
  generator: (
    devEnv: TinnyEnvironment,
    person: TinnyPerson,
    resources?: LitResourceAbilityRequest[]
  ) => Promise<SessionSigsMap | undefined>
): Promise<void> => {
  const alice = await devEnv.createRandomPerson();
  const pkpSessionSigs = await generator(devEnv, alice);

  const pkpEthersWallet = new PKPEthersWallet({
    litNodeClient: devEnv.litNodeClient!,
    pkpPubKey: alice.pkp?.publicKey!,
    controllerSessionSigs: pkpSessionSigs,
  });

  await pkpEthersWallet.init();

  // -- personal_sign parameters
  try {
    // Message to sign
    const message = 'Free the web';
    const hexMsg = ethers.utils.hexlify(ethers.utils.toUtf8Bytes(message));

    // personal_sign parameters
    // DATA, N Bytes - message to sign.
    // DATA, 20 Bytes - address
    // Reference: https://metamask.github.io/api-playground/api-documentation/#personal_sign
    const signature = await ethRequestHandler({
      signer: pkpEthersWallet,
      payload: {
        method: 'personal_sign',
        params: [hexMsg, alice.pkp?.ethAddress],
      },
    });

    const recoveredAddr = ethers.utils.verifyMessage(message, signature);

    // ==================== Post-Validation ====================
    if (signature.length !== 132) {
      throw new Error('❌ signature should be 132 characters long');
    }

    if (recoveredAddr !== alice.pkp?.ethAddress) {
      throw new Error(
        `❌ recoveredAddr should be ${alice.pkp?.ethAddress} but got ${recoveredAddr}`
      );
    }

    console.log('✅ personal_sign recoveredAddr:', recoveredAddr);
  } catch (e) {
    throw new Error('❌ Error: ' + (e as Error).message);
  } finally {
    devEnv.releasePrivateKeyFromUser(alice);
  }
};
